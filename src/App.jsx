import Header from "./components/Header/Header";
import BannerVco from "./components/BannerVco";
import WhoUs from './components/WhoUs'
import WhoUsOnly from './components/WhoUsOnly'
import WhatWoDo from "./components/Whatwedo";

export default function App() {
  return (
    <>
      <Header/>
      <BannerVco></BannerVco>
      <WhoUs></WhoUs>
      <WhoUsOnly></WhoUsOnly>
      <WhatWoDo></WhatWoDo>
            
    </>
  )
}
