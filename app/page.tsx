'use client'
import Nav from './components/Nav'
import ProgramMenu from './components/ProgramMenu';
import {motion} from "framer-motion"
import {useState} from "react"

interface ThemePack {
  background: string;
  font: string
}

export default function Home() {
  const [ theme, selectTheme ] = useState("");
  const [ themePack, setThemePack ] = useState<ThemePack>({font: "serif", background: "bg-neutral-900"});
  
  const handleSelectTheme = (data: string) => {
    selectTheme(data);
    switch (data) {
      case "Bubble Theme":
        setThemePack({font: "serif", background: "bg-neutral-900"});
        break;
    }
  }

  return (
     <div>
     <Nav wave={"yes"} themePack={themePack}/>
     <div className="body mt-4">
      <motion.div initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="border text-amber-50 mx-10 h-200 mb-10 border-t-4">
            <ProgramMenu selectTheme={handleSelectTheme} />
        </motion.div>
     </div>
     </div>
  );
}
