import React from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'

export default function AboutUs() {
  return (
    <Layout>
      <HeroSection 
        title="当店について"
        subtitle="心と体の癒しをお届けします"
        backgroundImage="/images/hero/heroHome.png"
      />
      <div className="container mx-auto py-8 px-4">
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">真夜中のアトリエ札幌店の理念</h2>
          <p className="mb-4 text-main">
            真夜中のアトリエ札幌店は、心と体の癒しを追求する女性専用のプライベートエステサロンです。厳しい研修を修了した熟練のセラピストが、お客様一人一人に合わせた最適なトリートメントプランをご提案いたします。
          </p>
          <p className="mb-4 text-main">
            丁寧なカウンセリングでお悩みやご要望をお伺いし、忙しい日々の疲れを優しく解きほぐす極上のリラクゼーションをご提供します。清潔で落ち着いた空間で、都会の喧騒を忘れる特別なひとときをお過ごしいただけます。
          </p>
          <h2 className="text-2xl font-semibold my-6">私たちのこだわり</h2>
          <ul className="list-disc list-inside mb-4 text-main">
            <li>厳選された技術を持つセラピストによる施術</li>
            <li>清潔で快適な環境の提供</li>
            <li>お客様一人一人に寄り添ったプランニング</li>
            <li>定期的な研修でスキルを磨き続けるスタッフ</li>
          </ul>
          <p className="mt-6 text-main">
            心からリラックスできる癒しの時間をお届けします。ご不明点等ございましたらお気軽にお問い合わせください。皆様のご来店をスタッフ一同、心よりお待ちしております。
          </p>
        </section>
      </div>
    </Layout>
  )
}
