import React from 'react';
import './Languages.scss';
import LanguageList from './LanguageList';

const Languages = () => (
  <div className="languages">
    <h3>Languages</h3>
    <div className="languages__wrap">
      <LanguageList name="JavaScript" score="75" />
      <LanguageList name="HTML/CSS" score="85" />
      <LanguageList name="C/Embedded C" score="80" />
      <LanguageList name="UI/UX" score="60" />
      <LanguageList name="PHP" score="50" />
      {/* <LanguageList name="TypeScript" score="50" /> */}
    </div>
  </div>
);

export default Languages;
