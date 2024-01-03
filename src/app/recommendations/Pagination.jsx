// 'use client';

import { CaretLeft, CaretRight } from '@phosphor-icons/react';
// import { useState } from 'react';

const Pagination = ({ api }) => {
  //   const [page, setPage] = useState(1);

  //   const handlePage2 = () => {
  //     api = { data: api.slice(0, 18) };
  //   };

  return (
    <div className="flex justify-center p-4 text-cyan-100 text-xl mt-6 mb-10 rounded-t-xl">
      <div className="flex justify-center items-center">
        {page <= 1 ? null : (
          <button onClick={handlePage2} className="hover:scale-105 pl-1 w-14 h-14 ">
            <CaretLeft size={24} />
          </button>
        )}

        <div className="flex justify-center items-center text-sm">
          {page <= 2 ? null : (
            <button className="w-12 h-12" onClick={handlePage2}>
              {page - 2}
            </button>
          )}
          {page <= 1 ? null : (
            <button className="w-12 h-12" onClick={handlePage2}>
              {page - 1}
            </button>
          )}
          <button className="border-2 border-cyan-400 w-12 h-12 rounded-full text-cyan-400">{page}</button>
          <button className="w-12 h-12" onClick={handlePage2}>
            {page + 1}
          </button>
          <button className="w-12 h-12" onClick={handlePage2}>
            {page + 2}
          </button>
          <button className="w-12 h-12"> ... </button>
        </div>

        <button onClick={handlePage2} className="w-14 h-14 pl-6">
          <CaretRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
