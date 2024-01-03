'use client';

import { useEffect, useState } from 'react';
import AnimeList from '../components/AnimeList';
import { getResponseAnime } from '../libs/api-libs';
import HeaderMenu from './HeaderMenu';
import Pagination from './Pagination';

const Page = async () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const animeData = await getResponseAnime('top/anime', `page=${page}`);
    setTopAnime(animeData);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="flex justify-center ">
      <div className="w-[95%]">
        <HeaderMenu title="Anime Populer" />
        <AnimeList api={topAnime} />
        <Pagination page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Page;
