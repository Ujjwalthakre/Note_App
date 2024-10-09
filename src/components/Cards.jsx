import React from 'react';
import { GiStarfighter } from "react-icons/gi";
import { motion } from "framer-motion";

const Cards = ({data ,reference}) => {
  return (

     <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className="relative w-60 h-72 bg-zinc-600 rounded-[30px] text-white px-8 py-10 overflow-hidden">
        <GiStarfighter className='text-3xl'/>
        <p className='text-sm mt-5 font-semibold'>{data.desc}</p>
        <div className="footer absolute bottom-0  w-full left-0">
       
       {data.tag.isOpen && (
        <div className={`tag flex items-center ${data.tag.tagColor ==="blue" ? "bg-blue-700" : "bg-green-500"} justify-center py-3 w-full`}>
            <h3 className='text-md font-semibold'>{data.tag.TagTitle}</h3>
        </div>
       )}
       
       </div>
     </motion.div>
    
  )
}

export default Cards