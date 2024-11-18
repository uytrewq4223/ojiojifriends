import React from 'react';
import { useRouter } from 'next/router';

const AgeVerification = () => {
  const router = useRouter();

  const handleVerification = (isVerified: boolean) => {
    if (isVerified) {
      // クッキーを設定して年齢確認済みとする
      document.cookie = 'ageVerified=true; path=/; max-age=31536000'; // 1年間有効
      router.push('/'); // トップページへリダイレクト
    } else {
      // 年齢確認NGの場合
      router.push('https://www.google.com'); // 他サイトへリダイレクト
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-second text-base">
      <h1 className="text-3xl font-bold mb-6">年齢確認</h1>
      <p className="text-lg mb-8">本サイトをご利用いただくには18歳以上である必要があります。</p>
      <div className="flex gap-4">
        <button
          onClick={() => handleVerification(true)}
          className="bg-accent text-second px-6 py-3 rounded-lg shadow"
        >
          はい
        </button>
        <button
          onClick={() => handleVerification(false)}
          className="bg-base text-second px-6 py-3 rounded-lg shadow"
        >
          いいえ
        </button>
      </div>
    </div>
  );
};

export default AgeVerification;
