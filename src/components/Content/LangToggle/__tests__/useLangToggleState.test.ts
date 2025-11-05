import { renderHook, act } from '@testing-library/react';
import { useLangToggleState } from '../useLangToggleState';

// Mock window.history.replaceState
const mockReplaceState = jest.fn();
Object.defineProperty(window, 'history', {
  value: { replaceState: mockReplaceState },
  writable: true,
});

describe('useLangToggleState', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockReplaceState.mockClear();
  });

  it('initializes with initialLang when location.search is empty', () => {
    const location = {
      search: '',
      pathname: '/talks/giving',
    } as unknown as Location;

    const { result } = renderHook(() => useLangToggleState('en', location));

    expect(result.current.lang).toBe('en');
  });

  it('initializes with CS when lang=cs is present in URL', () => {
    const location = {
      search: '?lang=cs',
      pathname: '/talks/giving',
    } as unknown as Location;

    const { result } = renderHook(() => useLangToggleState('en', location));

    expect(result.current.lang).toBe('cs');
  });

  it('toggleLang updates URL and lang state when current lang is en', () => {
    const location = {
      search: '',
      pathname: '/talks/giving',
    } as unknown as Location;

    const { result } = renderHook(() => useLangToggleState('en', location));

    act(() => {
      result.current.toggleLang();
    });

    expect(mockReplaceState).toHaveBeenCalledWith(
      null,
      '',
      '/talks/giving?lang=cs',
    );
    expect(result.current.lang).toBe('cs');
  });

  it('toggleLang updates URL and lang state when current lang is cs', () => {
    const location = {
      search: '?lang=cs',
      pathname: '/talks/giving',
    } as unknown as Location;

    const { result } = renderHook(() => useLangToggleState('en', location));

    // The effect updates lang from 'en' to 'cs' based on location.search
    expect(result.current.lang).toBe('cs');

    act(() => {
      result.current.toggleLang();
    });

    expect(mockReplaceState).toHaveBeenCalledWith(null, '', '/talks/giving');
    expect(result.current.lang).toBe('en');
  });

  it('syncs state when location.search changes', () => {
    let location = {
      search: '',
      pathname: '/talks/giving',
    } as unknown as Location;

    const { result, rerender } = renderHook(
      ({ loc }: { loc: Location }) => useLangToggleState('en', loc),
      {
        initialProps: { loc: location },
      },
    );

    expect(result.current.lang).toBe('en');

    location = {
      search: '?lang=cs',
      pathname: '/talks/giving',
    } as unknown as Location;

    rerender({ loc: location });

    expect(result.current.lang).toBe('cs');
  });
});
