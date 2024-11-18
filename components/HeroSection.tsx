import React from 'react'

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function HeroSection({ title, subtitle, backgroundImage }: HeroSectionProps) {
  return (
    <div 
      className="relative h-[30vh] min-h-[300px] bg-cover bg-center flex items-center justify-center" 
      style={{backgroundImage: `url('${backgroundImage}')`}}
    >
      <div className="absolute inset-0 bg-main opacity-50"></div>
      <div className="relative z-10 text-center text-second">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl">{subtitle}</p>
      </div>
    </div>
  )
}