'use client'
import Nav from './components/Nav'
import ProgramMenu from './components/ProgramMenu';
import {motion} from "framer-motion"
import {useState} from "react"
import { ThemePack, bubbleTheme, dopplerTheme, goldTheme, sunsetTheme, magentaTheme } from "./util/Theme";

export default function Home() {
  const [ theme, selectTheme ] = useState("");
  const [ themePack, setThemePack ] = useState<ThemePack>(bubbleTheme);
  const [ prevTheme, setPrevTheme ] = useState<ThemePack>(bubbleTheme);
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

  return (
     <div>
     <Nav wave={"yes"} themePack={themePack}/>
     <div className={themePack ? "body " + themePack.background : "body mt-4"}>
      <motion.div initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className={themePack ? "border mx-10 h-220 border-t-4 " + themePack.font2 : "border mx-10 h-200 mb-10 border-t-4"}>
            <ProgramMenu handleSelectThemeSuper={handleSelectTheme} themePack={themePack} selectTheme={handleSelectTheme} />
        </motion.div>
     </div>
     </div>
  );
}
