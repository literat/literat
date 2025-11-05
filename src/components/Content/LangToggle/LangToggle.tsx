import React, { Fragment } from 'react';
import { LangButton } from './LangButton';
import * as styles from './LangToggle.module.scss';
import { Lang, LangProp } from './useLangToggleState';

interface LangToggleProps {
  lang: LangProp;
  toggleLang: () => void;
}

const languages: LangProp[] = [Lang.EN, Lang.CS];

export const LangToggle = ({ lang, toggleLang }: LangToggleProps) => (
  <div className={styles.LangToggle}>
    {languages.map((currentLang, index) => {
      const isCurrent = lang === currentLang;

      return (
        <Fragment key={currentLang}>
          {index > 0 && <span aria-hidden>|</span>}
          <LangButton
            isActive={isCurrent}
            disabled={isCurrent}
            onClick={toggleLang}
          >
            {currentLang.toUpperCase()}
          </LangButton>
        </Fragment>
      );
    })}
  </div>
);
