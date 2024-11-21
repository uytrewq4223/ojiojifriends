import React, { useState, useEffect } from "react";
import Image from "next/image";

const TherapistProfile = ({ therapist }) => {
  const imageCount = 5;
  const images = Array.from(
    { length: imageCount },
    (_, i) => `${therapist.id}${i + 1}.jpg`
  );
  const [mainImage, setMainImage] = useState(images[0]);

  // Twitterウィジェットを動的にロード
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).twttr) {
      (window as any).twttr.widgets.load();
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8 bg-second rounded-lg shadow-2xl">
      <div className="md:flex md:justify-between md:space-x-8">
        {/* メイン画像と情報 */}
        <div className="relative w-full md:w-[40%]">
          <div className="relative w-full pb-[120%] md:pb-[120%]">
            <Image
              src={`/images/therapists/${therapist.id}/${mainImage}`}
              alt={therapist.name}
              layout="fill"
              objectFit="cover"
              className="rounded-md shadow-md"
            />
            {/* 下部グラデーションとテキスト */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
              <h1 className="text-xl md:text-2xl font-bold truncate">
                {therapist.name}
              </h1>
              <p className="text-xs md:text-sm mt-1">
                {`年齢: ${therapist.age}歳 / 身長: ${therapist.height}cm`}
              </p>
              <p className="text-xs md:text-sm mt-1 line-clamp-2">
                {therapist.description}
              </p>
            </div>
          </div>
          {/* サムネイル */}
          <div className="flex gap-2 mt-4 justify-center">
            {Array.from({ length: 5 }, (_, index) => {
              const image = images[index] || "default-thumbnail.png"; // 画像がない場合デフォルト画像を使用

              return (
                <div
                  key={index}
                  className={`relative w-16 h-16 cursor-pointer rounded-lg overflow-hidden ${mainImage === image ? "ring-4 ring-accent" : "ring-1 ring-gray-300"
                    } transition-all duration-300`}
                  onClick={() => setMainImage(image)}
                >
                  <Image
                    src={
                      image === "default-thumbnail.png"
                        ? `/images/${image}` // デフォルト画像の場合
                        : `/images/therapists/${therapist.id}/${image}` // 通常画像の場合
                    }
                    alt={`${therapist.name} thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* セラピストの詳細情報 */}
        <div className="md:w-[55%] mt-6 md:mt-0">
          {/* 質問と回答セクション */}
          <div className="bg-gray-900 text-second p-6 rounded-md shadow-md mb-6">
            <h2 className="text-2xl font-semibold mb-4">セラピストに質問</h2>
            <ul className="divide-y divide-gray-700">
              {therapist.questions.map((q, index) => (
                <li
                  key={index}
                  className="py-4 md:flex md:items-start md:space-x-4 md:space-y-0"
                >
                  {/* 質問部分 */}
                  <p className="text-sm md:text-lg font-semibold mb-2 md:mb-0 md:w-1/3">
                    <span className="text-accent font-bold">Q:</span> {q.question}
                  </p>
                  {/* 回答部分 */}
                  <p className="text-sm md:text-lg md:w-2/3">
                    <span className="text-accent font-bold">A:</span> {q.answer}
                  </p>
                </li>
              ))}
            </ul>
          </div>





          {/* オプションセクション */}
          <div className="bg-gray-900 text-second p-6 rounded-md shadow-md mb-6">
            <h2 className="text-2xl font-semibold mb-4">オプション</h2>
            <div className="flex flex-wrap gap-2">
              {therapist.options.map((option, index) => (
                <span
                  key={index}
                  className="bg-accent text-second text-sm px-4 py-2 rounded-sm"
                >
                  {option}
                </span>
              ))}
            </div>
          </div>

          {/* Twitter埋め込みセクション */}
          {therapist.twitter && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                {therapist.name}の投稿
              </h2>
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
