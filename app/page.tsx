'use client'
import Nav from './components/Nav'
import ProgramMenu from './components/ProgramMenu';
import { motion } from "framer-motion"
import { useState } from "react"
import { ThemePack, bubbleTheme, dopplerTheme, goldTheme, sunsetTheme, magentaTheme } from "./util/Theme";

export default function Home() {
  const [ theme, selectTheme ] = useState("");
  const [ themePack, setThemePack ] = useState<ThemePack>(bubbleTheme);
  const [ prevTheme, setPrevTheme ] = useState<ThemePack>(bubbleTheme);
  const [ mobileMenu, setMobileMenu ] = useState(false);
  const map = new Map();
  map.set(bubbleTheme.name, bubbleTheme);
  map.set(goldTheme.name, goldTheme);
  map.set(sunsetTheme.name, sunsetTheme);
  map.set(dopplerTheme.name, dopplerTheme);
  map.set(magentaTheme.name, magentaTheme);


  const handleSelectTheme = (data: string) => {
    selectTheme(theme);
    const tp = map.get(data);
    if (tp === undefined) {
        setThemePack(prevTheme);
    } else {
      setPrevTheme(tp);
      setThemePack(tp);      
    }
  }

  const openToggleMenu = (status: boolean) => {
    setMobileMenu(status);

  };

  return (
     <div>
     <Nav openToggleMenu={openToggleMenu} wave={"yes"} themePack={themePack}/>
     <div className={themePack ? "body " + themePack.background : "body mt-4"}>
      <motion.div initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className={themePack ? "border mx-10 h-220 border-t-4 " + themePack.font2 : "border mx-10 h-200 mb-10 border-t-4"}>
            <ProgramMenu handleSelectThemeSuper={handleSelectTheme} themePack={themePack} selectTheme={handleSelectTheme} />
        </motion.div>
     </div>
     <div className={mobileMenu ? "" : "hidden"}>
     <nav className={"fixed top-0 left-0 h-screen w-screen " + themePack.background + " " + themePack.font2 }>
      <div className="pl-18 pt-18">
        <div className="flex">
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        <button onClick={() => setMobileMenu(false) } className="text-3xl font-bold ml-20">x</button>
        </div>
        <ul className="space-y-2">
          <li><a href="https://sohn.cloud" className={"block py-2 font-bold rounded hover:" + themePack.background}>Home</a></li>
          <li><a href="https://github.com/sohndotcloud/sohn.cloud" className={"block py-2 font-bold rounded hover:" + themePack.background}>About</a></li>
          <li><a href="https://github.com/sohndotcloud" className={"block py-2 font-bold rounded hover:" + themePack.background}>Portfolio</a></li>
          <li><a href="https://linkedin.com/in/nils-sohn" className={"block py-2 font-bold rounded hover:" + themePack.background}>Contact</a></li>
        </ul>
      </div>
    </nav>
    </div>
     </div>
  );
}

