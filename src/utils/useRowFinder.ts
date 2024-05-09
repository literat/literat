import { useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default function useRowFinder() {
  const ref = useRef(null);
  const previous = useRef({
    width: undefined,
    renders: 0,
  });
  const [rows, setRows] = useState({});

  // when the nav changes size, run this callback
  function callback([entry]) {
    // if there is nothing, skip it
    if (!entry.target?.children) return;
    // if the width has not changed, skip it
    const { width } = entry.contentRect;

    if (width === previous.current.width && previous.current.renders >= 2) {
      // console.log('Same width, skipping');
      previous.current.renders = 0;
      return;
    }

    const items = Array.from(entry.target.children);
    let row = 0;
    const rowData = {};

    items.forEach((item, i) => {
      if (!item.previousElementSibling || item.offsetLeft < item.previousElementSibling.offsetLeft) {
        row += 1;
      }
      rowData[i] = row;
    });

    setRows(rowData);

    // update the prev width
    if (previous.current.width === width) {
      previous.current.renders = previous.current.renders + 1 || 1;
    }
    previous.current.width = width;
  }

  useEffect(() => {
    const observer = new ResizeObserver(callback);
    const element = ref.current;
    observer.observe(element);

    return function () {
      observer.unobserve(element);
    };
  }, [ref]);

  const getRow = (index) => rows[index];

  return {
    ref,
    getRow,
  };
}
