import React from 'react';
import './PersonalInfo.scss';
import InfoList from './InfoList';

const PersonalInfo = () => (
  <div className="personal-info">
    <img
      src="http://res.cloudinary.com/amoslv/image/upload/v1582804227/jfee3x6fq8u8vdg9f7cl.jpg"
      alt=""
    />
    <div className="personal-info__bio flex-center">
      <div className="personal-info__bio__wrap">
        <InfoList label="Name:" detail="Amos Oruaroghene" />
        <InfoList label="Github:" detail="amoskeysz" />
        <InfoList label="Address:" detail="Lagos, Nigeria" />
        <InfoList label="Hobbies:" detail="Pencil drawing, playing video games, football" />
      </div>
    </div>
  </div>
);

export default PersonalInfo;
