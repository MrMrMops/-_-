import Header from "./components/Header";
import BannerVco from "./components/BannerVco";
import WhoUs from './components/WhoUs';
import WhoUsOnly from './components/WhoUsOnly';
import WhatWeDo from "./components/Whatwedo";
import WhatWeDoBan from "./components/WhatWeDoBan";
import FuturePlans from './components/FuturePlans';
import FuturePlansBun from './components/FuturePlans_Bun/FuturePlansBun';
import Links from './components/Links';
import Footer from "./components/Footer";

import shus from './components/images/shus.jpg'

export default function App() {
  return (
    <>
      <Header/>
      <BannerVco></BannerVco>
      <WhoUs></WhoUs>
      <WhoUsOnly></WhoUsOnly>
      <WhatWeDo></WhatWeDo>
      <WhatWeDoBan />
      <FuturePlans />
      <FuturePlansBun>
      <img src={shus} alt="s" />
      <img src={shus} alt="s" />
      <img src={shus} alt="s" />
      </FuturePlansBun>
      <Links></Links>
      <Footer />
    </>
    
  )
}
