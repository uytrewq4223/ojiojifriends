import React from 'react';
import Header from './Header'; // PC用ヘッダー
import MobileHeader from './MobileHeaderMenu'; // モバイル用ヘッダー
import Footer from './Footer';
import MobileFooterMenu from './MobileFooterMenu';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* PC用ヘッダー: モバイルでは非表示 */}
      <div className="hidden md:block">
        <Header />
      </div>
      {/* モバイル用ヘッダー */}
      <div className="block md:hidden">
        <MobileHeader />
      </div>

      {/* メインコンテンツ */}
      <main className="flex-grow">{children}</main>

      {/* フッター */}
      <Footer />

      {/* モバイル専用フッターメニュー */}
      <div className="block sm:hidden">
        <MobileFooterMenu />
      </div>
    </div>
  );
};

export default Layout;
