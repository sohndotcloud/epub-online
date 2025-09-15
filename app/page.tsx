'use client'
import Nav from './components/Nav'
import ProgramMenu from './components/ProgramMenu';
import {motion} from "framer-motion"
import {useState} from "react"
import { ThemePack, bubbleTheme, goldTheme } from "./util/Theme";

export default function Home() {
  const [ theme, selectTheme ] = useState("");
  const [ themePack, setThemePack ] = useState<ThemePack>(bubbleTheme);
  const map = new Map();
  map.set(bubbleTheme.name, bubbleTheme);
  map.set(goldTheme.name, goldTheme);
  let prevTheme: ThemePack;
  const handleSelectTheme = (data: string) => {
    selectTheme(theme);
    const tp = map.get(data);
    prevTheme = tp;
    if (tp === undefined) {
        setThemePack(goldTheme);
    } else {
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
          className={themePack ? "border mx-10 h-180 border-t-4 " + themePack.font2 : "border mx-10 h-200 mb-10 border-t-4"}>
            <ProgramMenu themePack={themePack} selectTheme={handleSelectTheme} />
        </motion.div>
     </div>
     </div>
  );
}
