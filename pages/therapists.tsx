import React from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import TherapistList from '../components/TherapistList'

export default function Therapists() {
  return (
    <Layout>
      <HeroSection 
        title="セラピスト一覧"
        subtitle="あなたにぴったりのセラピストをお選びください"
        backgroundImage="/images/hero/heroHome.png"
      />
      <div className="container w-4/5 mx-auto py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-4 text-main">セラピスト紹介</h2>
          <p className="text-center max-w-2xl mx-auto text-main">
            真夜中のアトリエ札幌店に在籍する魅力的なセラピストたちをご紹介します。あなたの目的に合ったセラピストが施術いたします。詳しいプロフィールは、各セラピストの写真をクリックしてご確認ください。
          </p>
        </section>
        <TherapistList />
      </div>
    </Layout>
  )
}