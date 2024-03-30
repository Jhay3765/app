'use client'
import Image from "next/image"
import { useState } from "react"
export const Drop = (props) =>{
   const [ open , setOpen] = useState(false)
    return (
        <div  onClick={()=>setOpen(!open)} 
            style={{ backgroundColor : open && '#22c55e' , color : open && 'black'}}
        
        className="border-b p-2 rounded-lg pt-4 border-white border-r  border-r-theme-dark-green border-l border-l-theme-dark-green  text-3xl py-2  w-full">
          <section className="flex justify-between w-full ">
          <h1 className="font-semibold">{props.name}</h1>
          <Image src={'/arr-down.svg'} alt="" width={15} height={15}/>
          </section>
          {
            open &&   <p className="text-base mt-2 mb-4">{props.desc}</p>   
          }
        
        </div>
    )
  }
  