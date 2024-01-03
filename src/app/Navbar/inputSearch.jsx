'use client';

import { MagnifyingGlass, X } from '@phosphor-icons/react/dist/ssr';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    if (event.key == 'Enter' || event.type === 'click') {
      const keyword = searchRef.current.value;
      if (!keyword || keyword.trim() == '') {
        return;
      } else {
        event.preventDefault();
        router.push(`/search/${keyword}`);
      }
    }
  };

  return (
    <div className="flex items-center relative w-64">
      <button className="absolute text-sky-400 left-2" onClick={handleSearch}>
        <MagnifyingGlass size={25} />
      </button>
      <input placeholder="cari anime" className="rounded text-sky-100 py-2 pl-10 bg-sky-950" ref={searchRef} onKeyDown={handleSearch} />
      {/* <button className="absolute right-2 text-sky-900"><X size={20} /></button> */}
    </div>
  );
};

export default InputSearch;
