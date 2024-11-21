import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';

export default function Recruit() {
    return (
        <Layout>
            {/* ヒーローセクション */}
            <HeroSection
                title="採用情報"
                subtitle="真夜中のアトリエ札幌店で新たなキャリアを始めませんか？"
                backgroundImage="/images/hero/recruitHero.png"
            />

            {/* トップ文章 */}
            <div className="container mx-auto py-8 px-4 text-main">
                <section className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-6">真夜中のアトリエ札幌店へようこそ</h2>
                    <p className="mb-4">
                        当店では、お客様に癒しと安心をお届けすることをモットーに、一緒に働く仲間を募集しています。
                        高収入、柔軟な勤務時間、安心のサポート体制で、あなたのライフスタイルに合わせた働き方が可能です。
                    </p>
                    <p>
                        未経験の方でも安心して働ける充実した研修制度をご用意しております。
                        あなたも私たちと一緒に、新しいキャリアをスタートさせませんか？
                    </p>
                </section>
            </div>

            {/* LINEリンク */}
            <div className="container mx-auto py-6 px-4">
                <div className="text-center mb-6">
                    <a
                        href="https://line.me/R/ti/p/@505cwyqt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg shadow-md font-bold"
                    >
                        ご応募・お問い合わせはこちら(求人専用)
                    </a>
                </div>

                {/* 募集条件 */}
                <section className="max-w-3xl mx-auto text-main">
                    <h2 className="text-2xl font-semibold mb-6">募集要項</h2>

                    <table className="w-full border-collapse border border-gray-300 text-sm shadow-md">
                        <tbody>
                            <tr>
                                <th className="border border-gray-300 bg-gray-100 p-2 text-left w-1/3">業務内容</th>
                                <td className="border border-gray-300 p-2">
                                    <p>ホテルやお客様のご自宅にてオイルマッサージや性感マッサージ(お客様の希望のあった場合のみ)を提供していただきます。</p>
                                    <p>当店では本番行為は固く禁じておりますため、このような目的でのご応募はお控えください。</p>
                                </td>
                            </tr>
                            <tr>
                                <th className="border border-gray-300 bg-gray-100 p-2 text-left w-1/3">勤務時間</th>
                                <td className="border border-gray-300 p-2">
                                    <ul className="list-disc list-outside ml-6">
                                        <li className="text-main mb-1">完全自由出勤</li>
                                        <li className="text-main mb-1">週1勤務も可能（詳しくはお問い合わせください）</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th className="border border-gray-300 bg-gray-100 p-2 text-left w-1/3">応募資格</th>
                                <td className="border border-gray-300 p-2">
                                    <ul className="list-disc list-outside ml-6">
                                        <li className="text-main mb-1">
                                            近郊在住の18歳〜70歳未満の男性であること
                                        </li>
                                        <li className="text-main mb-1">
                                            同業との兼業不可（在籍店を辞めた後の勤務は可）
                                        </li>
                                        <li className="text-main mb-1">経験不問（経験者優遇）</li>
                                        <li className="text-main mb-1">性に対して探究心がある</li>
                                        <li className="text-main mb-1">x(Twitter)アカウントを作っていただける方</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th className="border border-gray-300 bg-gray-100 p-2 text-left">給与</th>
                                <td className="border border-gray-300 p-2">
                                    <ul className="list-disc list-outside ml-6">
                                        <li className="mb-1">完全歩合制（最低50%以上、経験者は最大80%）</li>
                                        <li className="mb-1">バック100%の契約形態もございますのでお問い合わせください</li>
                                        <li className="mb-1">全額日払い</li>
                                        <li className="mb-1">
                                            指名料、交通費、有料オプション全額バック
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th className="border border-gray-300 bg-gray-100 p-2 text-left">その他</th>
                                <td className="border border-gray-300 p-2">
                                    <p>初回登録料10000円</p>
                                    <p>※毎月の性病検査は実費となります。</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </Layout>
    );
}
