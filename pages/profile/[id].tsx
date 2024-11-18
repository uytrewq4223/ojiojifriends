import { useRouter } from 'next/router';
import TherapistProfile from '../../components/TherapistProfile';
import { therapistsData } from '../../data/therapistsData'; // データをインポート
import Layout from '../../components/Layout'; // Layoutをインポート
import HeroSection from '../../components/HeroSection'; // HeroSectionをインポート
import React from 'react';

const ProfilePage = () => {
  const router = useRouter();
  const { id } = router.query;

  // URLのidに基づいてセラピストのデータを取得
  const therapist = therapistsData.find((therapist) => therapist.id === id);

  // 該当するセラピストが見つからない場合の処理
  if (!therapist) {
    return <p>該当するセラピストが見つかりません。</p>;
  }

  return (
    <Layout>
      {/* コンテンツ部分 */}
      <div className="container mx-auto py-8 px-4">
        <TherapistProfile therapist={therapist} />
      </div>
    </Layout>
  );
};

export default ProfilePage;
