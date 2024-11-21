import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import Link from 'next/link';
import Image from 'next/image';
import BannerSection from '../components/BannerSection';
import TodayTherapists from '../components/TodayTherapists'; // インポート

const MenuTile = ({ title, imageSrc, href }) => (
  <Link href={href} legacyBehavior>
    <a className="group">
      <div className="relative w-full pb-[55%]">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-second p-4">
          <h3 className="text-center font-semibold text-2xl">{title}</h3>
        </div>
      </div>
    </a>
  </Link>
);

export default function Home() {
  return (
    <Layout>
      <HeroSection
        title="おじおじフレンズへようこそ"
        subtitle="札幌発・おじさんのみを集めた女性用風俗店！じじいの秘技をとくとご覧あれ！"
        backgroundImage="/images/hero/heroHome.jpg"
      />

      <div className="mt-4 relative w-full max-w-screen-lg mx-auto mb-6">
        <div className="relative w-[95%] pb-[33.33%] md:w-[80%] mx-auto">
          <Image
            src={"/images/main/mainbanner.png"}
            alt={"mainbanner"}
            layout="fill"
            objectFit="cover"
            className="rounded-sm shadow-md"
          />
        </div>
      </div>

      <div className="container mx-auto py-0 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-3">
          <MenuTile
            title="セラピスト一覧！"
            imageSrc="/images/main/menu1.jpg"
            href="/therapists"
          />
          <MenuTile
            title="ご利用方法"
            imageSrc="/images/main/menu2.png"
            href="/aboutus"
          />
          <MenuTile
            title="コース・料金"
            imageSrc="/images/main/menu3.png"
            href="/feeSystem"
          />
          <MenuTile
            title="一緒に働きませんか"
            imageSrc="/images/main/menu4.jpg"
            href="/recruit"
          />
        </div>
      </div>

      {/* 今日遊べる男セクション */}
      <TodayTherapists />

      {/* バナーセクション */}
      <BannerSection />
    </Layout>
  );
}
