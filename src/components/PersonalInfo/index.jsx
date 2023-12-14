import React from 'react';
import './PersonalInfo.scss';
import InfoList from './InfoList';

const PersonalInfo = () => (
  <div className="personal-info">
    <img
      src="https://res.cloudinary.com/amoslv/image/upload/v1702553341/WhatsApp_Image_2023v-12-14_at_12.27.53_jy2dkb.jpg"
      alt=""
    />
    <div className="personal-info__bio flex-center">
      <div className="personal-info__bio__wrap">
        <InfoList label="Name:" detail="Amos" />
        {/* <InfoList label="Email:" detail="inspiron.amos@gmail.com" /> */}
        {/* <InfoList label="Phone:" detail="+2347084324266" /> */}
        <InfoList label="Github:" detail="amoskeysz" />
        {/* <InfoList label="Address:" detail="Lagos, Nigeria" /> */}
        <InfoList label="Hobbies:" detail="Pencil drawing, playing video games, football" />
      </div>
    </div>
  </div>
);

export default PersonalInfo;
