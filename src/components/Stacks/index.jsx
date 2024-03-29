import React from 'react';
import './Stacks.scss';
import StackList from './StackList';

const Stacks = () => (
  <div className="stacks">
    <h3>Stacks</h3>
    <div className="stacks__wrap">
      <StackList
        stackName="React"
        score="85"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572104565/react_wii1jw.svg"
      />
      <StackList
        stackName="NextJs"
        score="85"
        imgLink="https://res.cloudinary.com/amoslv/image/upload/v1702551835/nextjs-icon-svgrepo-com_jucxnl.svg"
      />
      <StackList
        stackName="Gatsby"
        score="80"
        imgLink="https://res.cloudinary.com/amoslv/image/upload/v1702551834/gatsby-svgrepo-com_dk0225.svg"
      />
      <StackList
        stackName="Vue"
        score="80"
        imgLink="https://res.cloudinary.com/amoslv/image/upload/v1702551835/vue-vuejs-javascript-js-framework-svgrepo-com_zosh5h.svg"
      />
      <StackList
        stackName="Redux"
        score="80"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572104565/redux_co340h.svg"
      />
      <StackList
        stackName="Angular"
        score="59"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572104565/angular_zbkgrg.svg"
      />
      <StackList
        stackName="PHP"
        score="45"
        imgLink="https://res.cloudinary.com/amoslv/image/upload/v1702551835/php01-svgrepo-com_fbkiim.svg"
      />
      <StackList
        stackName="Nest JS"
        score="80"
        imgLink="https://res.cloudinary.com/amoslv/image/upload/v1702551834/nest-middleware-js-svgrepo-com_df5vbd.svg"
      />
      <StackList
        stackName="Node"
        score="75"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572104565/nodejs_abllv9.svg"
      />
      <StackList
        stackName="Webpack"
        score="80"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572104565/webpack_euqggc.svg"
      />
    </div>
  </div>
);

export default Stacks;
