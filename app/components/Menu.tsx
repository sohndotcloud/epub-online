'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { ThemePack } from '../util/Theme'

interface MenuButtonProps {
  themePack: ThemePack;
}

const MenuButton = ({themePack}: MenuButtonProps) => {
  return (
    <motion.div initial={{ opacity: 0, y: -25, x: +25}}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: .95 }}
          className="mt-9 mr-10 md:hidden">
        <button className="space-y-1.5" id="menu-button">
        <span className={"block w-6 h-0.5 " + themePack.background2 }></span>
        <span className={"block w-6 h-0.5 " + themePack.background2 }></span>
        <span className={"block w-6 h-0.5 " + themePack.background2 }></span>
        </button>
    </motion.div>
  )
}

export default MenuButton
