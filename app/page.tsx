'use client'
import Nav from './components/Nav'
import {motion} from "framer-motion"
export default function Home() {
  
  return (
     <div>
     <Nav />
     <div className="body mt-10">
      <motion.div initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="border text-amber-50 mx-10 h-500">
        </motion.div>
     </div>
     </div>
  );
}
