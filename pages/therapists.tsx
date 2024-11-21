import React from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import TherapistList from '../components/TherapistList'

export default function Therapists() {
  return (
    <Layout>
      <HeroSection 
        title="ジジピスト一覧"
        subtitle="あなたにぴったりのジジピストをお選びください"
        backgroundImage="/images/hero/heroHome.jpg"
      />
      <div className="container w-4/5 mx-auto py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-4 text-main">ジジピスト紹介</h2>
          <p className="text-center max-w-2xl mx-auto text-main">
            人生も晩年に差しかかるころ、おじさんたちはある思いに胸を掻き立てられます。それは、若かりし頃には思いもしなかった、人に愛を与えるということ。そんな人々を我々はジジピストと呼びます。愛に悩み愛に生きた生粋のじじいたちがあなたに新しい世界を見せます。
          </p>
        </section>
        <TherapistList />
      </div>
    </Layout>
  )
}