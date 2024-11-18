import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Twitter, MessageCircle } from 'lucide-react'; // アイコンを変更

const MobileFooterMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-base bg-opacity-90 text-second p-2 md:hidden transition-opacity duration-300">
      <div className="flex justify-around items-center">
        {/* LINE */}
        <Link
          href="https://line.me/R/ti/p/@677txcvf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-2"
        >
          <MessageCircle className="w-6 h-6 mb-1" aria-hidden="true" />
          <span className="text-xs">LINE</span>
        </Link>
        {/* Twitter */}
        <Link
          href="https://x.com/mdat_sapporo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-2"
        >
          <Twitter className="w-6 h-6 mb-1" aria-hidden="true" />
          <span className="text-xs">Twitter</span>
        </Link>
        {/* 電話 */}
        <Link
          href="tel:+81123456789" // ダミー電話番号
          className="flex flex-col items-center p-2"
        >
          <Phone className="w-6 h-6 mb-1" aria-hidden="true" />
          <span className="text-xs">電話</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileFooterMenu;
