import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Linkコンポーネントをインポート
import { therapistsData } from '../data/therapistsData'; // therapistsDataをインポート

const TherapistList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {therapistsData.map((therapist) => (
        <Link
          key={therapist.id}
          href={`/profile/${therapist.id}`}
          className="bg-second shadow-md rounded-lg overflow-hidden block transform transition-transform hover:scale-105 hover:shadow-xl"
        >
          {/* 画像部分 */}
          <div className="relative w-full pb-[140%]">
            <Image
              src={`/images/therapists/${therapist.id}/${therapist.id}1.jpg`}
              alt={therapist.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            {/* 名前を画像に重ねて中央揃え */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2">
              <h3 className="text-center font-bold text-lg">{therapist.name}</h3>
            </div>
          </div>

          {/* テキスト部分 */}
          <div className="p-4">
            <p className="text-sm text-gray-700 mb-1">
              {therapist.age}歳 / {therapist.height}cm
            </p>
            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
              {therapist.description}
            </p>

            {/* タグ部分 */}
            <div className="mt-2 flex flex-wrap gap-2">
              {therapist.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-main text-white text-xs px-3 py-1 rounded-full shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TherapistList;
