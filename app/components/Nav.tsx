'use client'
import MenuButton from "./Menu";
import Link from 'next/link'
import React, { useEffect, useState } from "react";
import {motion} from "framer-motion"
import { ThemePack } from "../util/Theme";

interface NavProps {
  wave: string;
  themePack: ThemePack;
  openToggleMenu: (status: boolean) => void;
}

export default function Nav({wave, themePack, openToggleMenu}: NavProps) {
    const [header,setHeader] = useState(false);

    const scrollHeader = () => {
      if (window.scrollY >= 20) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    }

    useEffect(()=>{
      window.addEventListener('scroll', scrollHeader)
      return () => {
        window.addEventListener('scroll', scrollHeader)
      }
    }, [])

  return (
    // <div className={header ? " fixed w-[100%] top-0 border-0" : ""} >
    <div className={"w-full flex pl-5 " + themePack.background}>
        <motion.div
          initial={{ opacity: 0, y: -25}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={themePack && "mt-2 w-full text-center md:pl-0 font-mono font-extrabold pt-5 text-l text-[20px] lg:text-[24px] w-80 " + themePack.font2}><Link href="/">Nils Sohn <motion.div animate={{ rotate: -15 }}
            transition={{ duration: .5 }}>
          <motion.div animate={{ rotate: 30 }}
            transition={{ delay: .5, duration: .5 }}>
              <motion.div animate={{ opacity: 0 }}
            transition={{ delay: 1, duration: .6 }}>
              { wave == "no" ? "" : "👋" }</motion.div></motion.div></motion.div>
              </Link></motion.div>
      <ul className={themePack && "hidden md:flex w-200 pl-14 pr-14 mt-3 justify-between p-5 lg:justify-center item-center w-full mt-3 " + themePack.font2}>
        <motion.li initial={{ opacity: 0, x: +25}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}><Link className={"hover:" + themePack.font3} href="/">Home</Link></motion.li>
        <motion.li initial={{ opacity: 0, x: +25}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}><Link className={"hover:" + themePack.font3} href="https://github.com/sohndotcloud/sohn.cloud">About</Link></motion.li>
          <motion.li initial={{ opacity: 0, x: +25}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}><Link className={"hover:" + themePack.font3} href="https://github.com/sohndotcloud">Portfolio</Link></motion.li>
          <motion.li initial={{ opacity: 0, x: +25}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}><Link className={"hover:" + themePack.font3} href="https://linkedin.com/in/nils-sohn">Contact</Link></motion.li>
      </ul>
      <MenuButton openToggleMenu={openToggleMenu} themePack={themePack} />
    </div>

    // </div> 
  );
}
