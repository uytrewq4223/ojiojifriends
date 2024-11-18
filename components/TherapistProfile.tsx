import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const TherapistProfile = ({ therapist }) => {
  const imageCount = 5;
  const images = Array.from({ length: imageCount }, (_, i) => `${therapist.id}${i + 1}.jpg`);
  const [mainImage, setMainImage] = useState(images[0]);

  // Twitterウィジェットを動的にロード
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).twttr) {
      (window as any).twttr.widgets.load();
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8 bg-second rounded-lg shadow-2xl">
      <div className="md:flex md:justify-between md:space-x-8">
        {/* メイン画像 */}
        <div className="relative w-full md:w-[40%]">
          <div className="relative w-full pb-[100%]">
            <Image
              src={`/images/therapists/${therapist.id}/${mainImage}`}
              alt={therapist.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* サムネイル */}
          <div className="flex gap-2 mt-4 justify-center">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative w-16 h-16 cursor-pointer rounded-lg overflow-hidden ${
                  mainImage === image ? 'ring-4 ring-accent' : 'ring-1 ring-gray-300'
                } transition-all duration-300`}
                onClick={() => setMainImage(image)}
              >
                <Image
                  src={`/images/therapists/${therapist.id}/${image}`}
                  alt={`${therapist.name} thumbnail ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* セラピストの情報 */}
        <div className="md:w-[55%] mt-6 md:mt-0">
          {/* セラピスト情報 */}
          <div className="bg-main text-second p-6 rounded-lg shadow-md mb-6">
            <h1 className="text-4xl font-bold mb-4">{therapist.name}</h1>
            <p className="text-lg">年齢: {therapist.age}歳 / 身長: {therapist.height}cm</p>
            <p className="text-base mt-4 leading-relaxed">{therapist.description}</p>
          </div>

          {/* 質問と回答セクション */}
          <div className="bg-base text-second p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold mb-4">セラピストに質問</h2>
            <table className="w-full border-collapse">
              <tbody>
                {therapist.questions.map((q, index) => (
                  <tr key={index} className="border-b border-second border-opacity-20">
                    <td className="text-lg font-semibold py-2 px-4 w-1/3">{q.question}</td>
                    <td className="text-lg py-2 px-4">{q.answer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* オプションセクション */}
          <div className="bg-base text-second p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">オプション</h2>
            <div className="flex flex-wrap gap-2">
              {therapist.options.map((option, index) => (
                <span key={index} className="bg-accent text-second text-sm px-4 py-2 rounded-md">
                  {option}
                </span>
              ))}
            </div>
          </div>

          {/* Twitter埋め込みセクション */}
          {therapist.twitter && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">{therapist.name}の投稿</h2>
              <a
                className="twitter-timeline"
                data-height="400"
                href={`https://twitter.com/${therapist.twitter}`}
              >
                Tweets by {therapist.twitter}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TherapistProfile;
