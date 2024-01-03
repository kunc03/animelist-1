// import { useEffect, useState } from 'react';
// import NowAnime from '../components/AnimeSeason';
import { getResponseAnime, getNestedResponseAnime, reproduce } from '../libs/api-libs';
import HeaderSeason from '../components/AnimeSeason/Header';
import Sidebar from '../Sidebar';
import RecommendAnime from '.';
// import Pagination from './Pagination';

const Page = async () => {
  let recommendedAnime = await getNestedResponseAnime('recommendations/anime', 'entry');
  recommendedAnime = { data: recommendedAnime.slice(0, 18) };

  return (
    <div className="flex justify-center ">
      <div className="w-[95%] flex md:flex-row flex-col justify-between mt-10">
        <div className="md:w-[60%] w-full">
          <HeaderSeason title="Recommendations" />
          <RecommendAnime api={recommendedAnime} />
          {/* <NowAnime api={recommendedAnime} /> */}
        </div>
        <div className="md:w-[37%] w-full mb-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Page;
