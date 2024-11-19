import React from 'react';
import Image from 'next/image';

const BannerSection = () => {
  const banners = [
    { src: '/images/banner/1.png', alt: 'Banner 1', link: '' },
    { src: '/images/banner/2.png', alt: 'Banner 2', link: '' },
    { src: '/images/banner/3.png', alt: 'Banner 3', link: '' },
    { src: '/images/banner/4.png', alt: 'Banner 4', link: 'https://line.me/R/ti/p/@677txcvf' } // 4枚目にリンクを設定
  ];

  return (
    <div className="mt-8">
      {banners.map((banner, index) => {
        const BannerContent = (
          <div className="relative w-full max-w-screen-lg mx-auto mb-6">
            <div className="relative w-[95%] pb-[33.33%] md:w-[80%] mx-auto">
              <Image
                src={banner.src}
                alt={banner.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        );

        return banner.link ? (
          <a
            key={index}
            href={banner.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {BannerContent}
          </a>
        ) : (
          <div key={index}>{BannerContent}</div>
        );
      })}
    </div>
  );
};

export default BannerSection;
