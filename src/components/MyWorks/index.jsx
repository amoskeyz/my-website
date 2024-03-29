import React from "react";
import "./MyWorks.scss";
import SliderMenu from "react-slider-menu-package";
import ProjectDiv from "./ProjectDiv";

const MyWorks = () => (
  <div className="my-works" id="works">
    <h2 className="my-works__title">My Works</h2>
    <div className="my-works__slider-wrap">
      <SliderMenu
        autoMode
        elementsPerView={3}
        height={250}
        sliderTransition={1.5}
        autoModeDelayTime={15}
        elementsMinWidth={350}
      >
        <ProjectDiv
          appLink="https://cydene.com"
          imgLink="https://res.cloudinary.com/amoslv/image/upload/v1702552353/Screenshot_2023-12-14_at_12.11.04_t7i3s3.png"
        />
        <ProjectDiv
          appLink="https://www.shuttlers.ng/"
          imgLink="https://res.cloudinary.com/amoslv/image/upload/v1702552344/Screenshot_2023-12-14_at_12.08.28_ai1avi.png"
        />
        <ProjectDiv
          appLink="https://seerbit.com"
          imgLink="https://res.cloudinary.com/amoslv/image/upload/v1702552348/Screenshot_2023-12-14_at_12.09.21_zmd9l2.png"
        />
        <ProjectDiv
          appLink="https://www.kiakiafx.com/main"
          imgLink="https://res.cloudinary.com/amoslv/image/upload/v1702552347/Screenshot_2023-12-14_at_12.11.33_caoj0i.png"
        />
        <ProjectDiv
          appLink="https://www.sonesta.com/"
          imgLink="https://res.cloudinary.com/amoslv/image/upload/v1702552344/Screenshot_2023-12-14_at_12.08.50_fzjhnz.png"
        />
        <ProjectDiv
          appLink="https://travelers.com/"
          imgLink="https://res.cloudinary.com/amoslv/image/upload/v1702552344/Screenshot_2023-12-14_at_12.09.11_k8fic5.png"
        />
        <ProjectDiv
          appLink="https://www.nevadabridgetv.com/home"
          imgLink="https://ik.imagekit.io/62eig2lzls/Screenshot_2021-09-17_at_19.12.39__2__ZDh3xQpD63l.png"
        />
        {/* <ProjectDiv
          appLink="https://app.utiva.io/home"
          imgLink="https://ik.imagekit.io/62eig2lzls/Screenshot_2021-07-07_at_13.29.11_oRrgha2J8.png"
        /> */}
        <ProjectDiv
          appLink="https://utiva.io/"
          imgLink="https://ik.imagekit.io/62eig2lzls/Screenshot_2021-07-07_at_13.38.07_oQDrykou_.png"
        />
        <ProjectDiv
          appLink="https://ayodelejaynelagos.com/"
          imgLink="https://ik.imagekit.io/62eig2lzls/Screenshot_2021-07-07_at_13.30.59_vhpvNO15D.png"
        />
        <ProjectDiv
          appLink="https://ccsshoppers.com/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572108431/Screen_Shot_2019-10-25_at_9.24.23_AM_iu0hmb.png"
        />
        <ProjectDiv
          appLink="https://bulk-sms-app--frontend-stagging.herokuapp.com"
          imgLink="http://res.cloudinary.com/amoslv/image/upload/v1582807425/n99jdzc37uudcxdndqkm.png"
        />

        <ProjectDiv
          appLink="https://demeter-ah-frontend-staging.herokuapp.com/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572108439/Screen_Shot_2019-10-25_at_10.33.32_AM_o7vila.png"
        />
        <ProjectDiv
          appLink="https://amoskeyz.github.io/AutoMart/UI/index.html"
          imgLink="http://res.cloudinary.com/amoslv/image/upload/v1582806421/qtsin6qypnyavv70fn8f.png"
        />

        <ProjectDiv
          appLink="https://amoskeyz.github.io/Epic-mail/UI/index.html"
          imgLink="http://res.cloudinary.com/amoslv/image/upload/v1582806900/i6g9pk96xv69afaytwgq.png"
        />
        {/* <ProjectDiv
          appLink="https://epic-mail-react-app.herokuapp.com/#/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572110587/Screen_Shot_2019-10-26_at_6.21.10_PM_tg3li7.png"
        />
        <ProjectDiv
          appLink="https://crypto-book-order-app-react.herokuapp.com/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572110595/Screen_Shot_2019-10-26_at_6.18.56_PM_jisamy.png"
        />
        <ProjectDiv imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572110675/Screen_Shot_2019-10-26_at_6.20.09_PM_jnin7m.png" />
        <ProjectDiv
          appLink="https://lyrics-app-react.herokuapp.com/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572110588/Screen_Shot_2019-10-26_at_6.22.22_PM_v4txrg.png"
        />
        <ProjectDiv
          appLink="https://busha-admin-dashboars-app.herokuapp.com/balances"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572111009/Screen_Shot_2019-10-26_at_6.27.29_PM_mxpny0.png"
        /> */}
      </SliderMenu>
    </div>
  </div>
);

export default MyWorks;
