import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-base shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center ml-5">
        <div className="flex items-center space-x-3">
          {/* ロゴ画像 */}
          <Link href="/">
            <Image src="/images/logo/logo.png" alt="Logo" width={40} height={40} />
          </Link>
          {/* サイト名 */}
          <Link href="/" className="text-2xl font-bold text-second" style={{ fontFamily: "Times New Roman, serif" }}>
            おじおじフレンズ 札幌
          </Link>
        </div>
        
        <ul className="flex space-x-4">
          <li><Link href="/therapists" className="text-second hover:text-main">セラピスト一覧</Link></li>
          <li><Link href="/aboutus" className="text-second hover:text-main">当店について</Link></li>
          <li><Link href="/feeSystem" className="text-second hover:text-main">コース・料金</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
