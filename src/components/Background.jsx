import React from 'react'

const Background = () => {
  return (
    <>
    <div className="fixed w-full h-screen z-[2]">
    <div className=" absolute top-[2%]  rounded-full w-full py-10 flex justify-center text-2xl text-zinc-300 font-semibold ">Make Your Docs</div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[14vw] leading-none tracking-tighter font-semibold text-zinc-700 '>Notes.</h1>
    </div>
    </>
  )
}

export default Background