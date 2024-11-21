import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';

const FeeSystem = () => {
  return (
    <Layout>
      <HeroSection 
        title="コース・料金表"
        subtitle="最高の「癒し」をお約束いたします。"
        backgroundImage="/images/hero/heroHome.jpg"
      />
      <div className="container mx-auto py-8 ">
        <section className="mb-12 w-[80%] mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">料金システム</h2>
          <p className="text-center max-w-2xl mx-auto text-main">
            あなたの目的に合ったコースをお選びください。詳細は各コースの説明をご確認ください。
          </p>
        </section>
        
        <div className="space-y-12">
          <FeeSection
            title="１. 初回お試しデートコース"
            description="カフェなどでセラピストと会って直接確認ができるお試しコースです。"
            items={[
              { name: "60分", description: "初見で緊張される方の為の初回限定デートコースです。※指名料込み", price: "5000円" }
            ]}
          />
          
          <FeeSection
            title="２. 性感マッサージコース"
            description="セラピストによる性感マッサージをお愉しみ戴ける基本コースです。"
            items={[
              { name: "90分", description: "アロマ＆性感マッサージのお試しコースです。", price: "15,000円" },
              { name: "120分", description: "初めてご利用のお客様におすすめのスタンダードコースです。", price: "20,000円" },
              { name: "150分", description: "リピーター様に大人気の特別ロングコースです。", price: "25,000円" },
              { name: "新人限定120分", description: "指名料込みで期待の新人をお試しいただけるコースです。", price: "10,000円" },
              { name: "延長料金", description: "30分毎に延長料金が発生いたします。", price: "7,000円" },
              { name: "指名料", description: "ご指名される場合は3000円の指名料をいただいております", price: "3,000円" }
            ]}
          />
        </div>
      </div>

      {/* 一文を追加 */}
      <p className="text-center text-main text-lg mt-8 mb-16">
        キャンセル料は24時間前まで無料となっております。24時間前を過ぎますと、50%のキャンセル料を頂戴しておりますのでご容赦ください。
      </p>
    </Layout>
  );
};

const FeeSection = ({ title, description, items }) => (
  <div className="bg-second shadow-lg rounded-lg overflow-hidden">
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 text-center text-main">{title}</h3>
      <p className="text-base mb-6 text-center">{description}</p>
      {/* w-4/5 で幅を画面の80%に、mx-auto で中央揃え */}
      <table className="md:w-4/5 w-full mx-auto">
        <thead>
          <tr className="bg-base bg-opacity-10">
            <th className="p-2 text-left text-second">コース</th>
            <th className="p-2 text-left text-second">説明</th>
            <th className="p-2 text-right text-second">料金</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b border-base border-opacity-10">
              <td className="p-2 text-main">{item.name}</td>
              <td className="p-2 text-main">{item.description}</td>
              <td className="p-2 text-right text-main">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default FeeSystem;
