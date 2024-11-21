import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { therapistsData } from '../data/therapistsData';

const TodayTherapists = () => {
  const availableTherapists = therapistsData.filter(
    (therapist) => therapist.availability === 'today'
  );

  return (
    <div className="my-8">
      <h2 className="text-center text-2xl font-bold mb-6">今日遊べるセラピスト</h2>
      <div className="container mx-auto max-w-[90%] p-4 border-4 border-yellow-500 rounded-lg shadow-xl bg-gradient-to-br from-yellow-200 to-yellow-400">
        {/* 横スクロールエリア */}
        <div
          className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
          style={{
            WebkitOverflowScrolling: 'touch', // スクロールのスムーズさを改善
          }}
        >
          {availableTherapists.map((therapist) => (
            <Link
              key={therapist.id}
              href={`/profile/${therapist.id}`}
              className="flex-shrink-0 w-[65%] sm:w-[40%] md:w-[28%] lg:w-[22%] bg-second rounded-lg overflow-hidden block transform transition-transform hover:scale-105 hover:shadow-xl border-4 border-yellow-500"
            >
              {/* 画像部分 */}
              <div className="relative w-full pb-[120%]">
                <Image
                  src={`/images/therapists/${therapist.id}/${therapist.id}1.jpg`}
                  alt={therapist.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2">
                  <h3 className="text-center font-bold text-lg">{therapist.name}</h3>
                </div>
              </div>

              {/* テキスト部分 */}
              <div className="p-3 bg-white">
                <p className="text-sm text-gray-700 mb-1">
                  {therapist.age}歳 / {therapist.height}cm
                </p>
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                  {therapist.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {therapist.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-yellow-500 text-white text-xs px-3 py-1 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodayTherapists;
