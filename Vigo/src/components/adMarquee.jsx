import React from 'react'
import Marquee from './marquee'

export default function AdMarquee() {
  return (
    <div>
      <Marquee speed={40}>
        <span className="mx-4 text-6xl  text-slate-50">CONNECT AND GROW </span>
        <span className="mx-4 text-6xl  text-slate-50">CONNECT AND GROW </span>
        <span className="mx-4 text-6xl  text-slate-50">CONNECT AND GROW </span>
        <span className="mx-4 text-6xl  text-slate-50">CONNECT AND GROW </span>
        
        
      </Marquee>
    </div>
  )
}
