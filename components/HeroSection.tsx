import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function HeroSection({ title, subtitle, backgroundImage }: HeroSectionProps) {
  return (
    <div 
      className="relative h-[30vh] min-h-[220px] bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* 背景オーバーレイ */}
      <div className="absolute inset-0 bg-main opacity-50"></div>

      {/* コンテンツ */}
      <div className="relative z-10 text-center text-second max-w-[90%] mx-auto px-4">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug">
          {title}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
