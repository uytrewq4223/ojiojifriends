import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import Link from 'next/link';
import Image from 'next/image';
import BannerSection from '../components/BannerSection'; // インポート

const MenuTile = ({ title, imageSrc, href }) => (
  <Link href={href} legacyBehavior>
    <a className="group">
      <div className="relative w-full pb-[55%]"> {/* 縦方向の余白を減らす*/}
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-second p-4">
          <h3 className="text-center font-semibold text-2xl">{title}</h3> {/* フォントサイズ調整 */}
        </div>
      </div>
    </a>
  </Link>
);

export default function Home() {
  return (
    <Layout>
      <HeroSection 
        title="真夜中のアトリエへようこそ"
        subtitle="最高の「癒し」をお約束いたします。"
        backgroundImage="/images/hero/heroHome.png"
      />
      <div className="container mx-auto py-0 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-3"> 
          <MenuTile
            title="セラピスト一覧"
            imageSrc="/images/main/menu1.png"
            href="/therapists"
          />
          <MenuTile
            title="当店について"
            imageSrc="/images/main/menu2.png"
            href="/aboutus"
          />
          <MenuTile
            title="コース・料金"
            imageSrc="/images/main/menu3.png"
            href="/feeSystem"
          />
          <MenuTile
            title="求人のお知らせ"
            imageSrc="/images/main/menu4.jpg"
            href="/recruit"
          />
        </div>
      </div>
      {/* バナーセクション */}
      <BannerSection />
    </Layout>
  );
}
