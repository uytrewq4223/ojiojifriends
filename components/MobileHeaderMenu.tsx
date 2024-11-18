import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-base shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {/* ロゴ画像 */}
          <Link href="/">
            <Image src="/images/logo/logo.png" alt="Logo" width={40} height={40} />
          </Link>
          {/* サイト名 */}
          <Link href="/" className="text-xl font-bold text-second" style={{ fontFamily: "Times New Roman, serif" }}>
            真夜中のアトリエ
          </Link>
        </div>

        {/* ハンバーガーメニュー */}
        <button
          onClick={toggleMenu}
          className="text-second focus:outline-none md:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* ドロップダウンメニュー */}
      {isMenuOpen && (
        <ul className="bg-base shadow-md space-y-2 p-4 md:hidden">
          <li>
            <Link
              href="/therapists"
              className="block text-second hover:text-main"
              onClick={() => setIsMenuOpen(false)}
            >
              セラピスト一覧
            </Link>
          </li>
          <li>
            <Link
              href="/aboutus"
              className="block text-second hover:text-main"
              onClick={() => setIsMenuOpen(false)}
            >
              当店について
            </Link>
          </li>
          <li>
            <Link
              href="/feeSystem"
              className="block text-second hover:text-main"
              onClick={() => setIsMenuOpen(false)}
            >
              コース・料金
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default MobileHeader;
