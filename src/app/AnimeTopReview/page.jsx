'use client';

import { useEffect, useState } from 'react';
import TopReview from '../components/TopReview';
import { getResponseAnime, getNestedResponseAnime } from '../libs/api-libs';
import Pagination from './Pagination';
import Sidebar from '../Sidebar';
import HeaderSeason from '../components/AnimeSeason/Header';

const Page = () => {
  const [page, setPage] = useState(1);
  const [topReview, setTopReview] = useState([]);

  const fetchData = async () => {
    const dataAnime = await getResponseAnime('schedules', `page=${page}`);
    setTopReview(dataAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="flex justify-center ">
      <div className="w-[95%] flex md:flex-row flex-col justify-between mt-10">
        <div className="md:w-[60%] w-full">
          <HeaderSeason title="Paling Banyak Ditonton" />
          <TopReview api={topReview} />
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
