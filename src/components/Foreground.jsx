import React, {useRef, useState } from 'react'
import Cards from './Cards'

const Foreground = () => {

    const ref = useRef(null);

    const data = [
        {
            desc: "I want to Complete the weather app today itsef via React js.",
            tag: { isOpen: true, TagTitle: "Complete it", tagColor: "green" },
        },
        {
            desc: "I want to Complete the weather app today itsef via React js.",
            tag: { isOpen: true, TagTitle: "Download Now", tagColor: "blue" },
        },
        {
            desc: "I want to Complete the weather app today itsef via React js.",
            tag: { isOpen: true, TagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc:"I want to go for running on every saturday Sunday",
            tag:{isOpen: false}
        }
    ];
    // useState()
    return (
        <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
            {data.map((item, index)=>(
                <Cards data={item} reference={ref}/>
            ))}
        </div>
    )
}

export default Foreground