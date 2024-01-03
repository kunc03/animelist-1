'use client';

import { useEffect, useState } from 'react';
import NowAnime from '../components/AnimeSeason';
import Pagination from '../populer/Pagination';
import { getResponseAnime } from '../libs/api-libs';
import HeaderSeason from '../components/AnimeSeason/Header';
import Sidebar from '../Sidebar';

const Page = () => {
  const [page, setPage] = useState(1);
  const [nowAnime, setNowAnime] = useState([]);

  const fetchData = async () => {
    const seasonAnime = await getResponseAnime('seasons/now', `page=${page}`);
    setNowAnime(seasonAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="flex justify-center ">
      <div className="w-[95%] flex md:flex-row flex-col justify-between mt-10">
        <div className="md:w-[60%] w-full">
          <HeaderSeason title="Sedang Tayang" />
          <NowAnime api={nowAnime} />
          <Pagination page={page} setPage={setPage} />
        </div>
        <div className="md:w-[37%] w-full mb-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Page;
