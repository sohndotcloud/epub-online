'use client'
import MenuButton from "./components/Menu";
import Link from 'next/link'
import {motion} from "framer-motion"

export default function Home() {
  
  return (
    <div>
    <div className="h-10 w-full flex dark:bg-neutral-900">
        <motion.div
          initial={{ opacity: 0, y: -25}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-2 w-full text-center md:pl-10 w-50 font-mono font-extrabold text-l p-5 text-[20px] mt-2 lg:text-[24px] w-80 dark:text-amber-300"><Link href="/">Nils Sohn <motion.div animate={{ rotate: -15 }}
            transition={{ duration: .5 }}>
          <motion.div animate={{ rotate: 30 }}
            transition={{ delay: .5, duration: .5 }}>
              <motion.div animate={{ opacity: 0 }}
            transition={{ delay: 1, duration: .2 }}>
              👋</motion.div></motion.div></motion.div>
              </Link></motion.div>
      <ul className="hidden md:flex w-200 pl-14 pr-14 mt-3 justify-between p-5 lg:justify-center item-center w-full mt-3 dark:text-amber-300">
        <motion.li initial={{ opacity: 0, x: +25}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}><Link className="hover:text-amber-700" href="/">Home</Link></motion.li>
        <motion.li initial={{ opacity: 0, x: +25}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}><Link className="hover:text-amber-700" href="/">About</Link></motion.li>
          <motion.li initial={{ opacity: 0, x: +25}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}><Link className="hover:text-amber-700" href="/">Portfolio</Link></motion.li>
          <motion.li initial={{ opacity: 0, x: +25}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}><Link className="hover:text-amber-700" href="/">Contact</Link></motion.li>
      </ul>
      <MenuButton />
    </div>

    </div>
  );
}
