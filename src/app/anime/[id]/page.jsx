'use client';
import { Star, Heart, FilmSlate, CaretDown, CaretUp } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getResponseAnime } from '../../libs/api-libs';

const Page = async ({ params: { id } }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [page, setPage] = useState(0);

  const handlePage = () => {
    setPage((plusState) => plusState + 1);
  };

  const anime = await getResponseAnime(`anime/${id}`);
  let animeEpisode = await getResponseAnime(`anime/${id}/episodes`);
  // console.log(animeEpisodes.data);

  const handleEpisode = (event) => {
    if (event.key == 'Enter' || event.type === 'click') {
      // const keyword = searchRef.current.value;

      event.preventDefault();
      router.push(`${id}/episodes`);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex md:flex-row flex-col md:w-[90%] w-full mt-6 text-cyan-950 md:items-start items-center">
        <div className="md:pr-4 p-0 relative">
          <Image src={anime.data.images.webp.large_image_url} width={300} height={250} className="rounded-xl" />
          <div className="absolute flex py-1 px-2 bg-cyan-400 text-cyan-100 top-2 left-2 rounded-sm justify-center items-center">
            <Star size={19} />
            <h3 className="pl-1 text-sm font-bold">{anime.data.score}</h3>
          </div>
        </div>
        <div className="md:w-[80%] w-[90%] md:pl-3 pl-0">
          <h1 className="text-3xl md:mt-0 mt-4 md:text-start text-center font-bold">{anime.data.title}</h1>
          <div className="flex py-2 md:justify-start justify-center">
            <h1 className="md:pr-0 pr-2">{anime.data.title_english}</h1>
            <h1 className="">{anime.data.title_japanese}</h1>
          </div>
          <p className="text-lg text-justify">{anime.data.synopsis}</p>
          {/* <p className="mt-10 italic text-lg">Catatan: Sinopsis diterjemahkan secara otomatis oleh Google Translate.</p> */}

          <div className="flex md:flex-row sm:flex-row flex-col justify-between">
            <div className="flex justify-between mt-3 md:w-[30%] w-full">
              <div className="pr-10 grid gap-2">
                <h1>Type: </h1>
                <h1>Total Eps: </h1>
                <h1>Status: </h1>
                <h1>Source: </h1>
                <h1>Duration: </h1>
                <h1>Aired: </h1>
                <h1>Score: </h1>
                <h1>Year: </h1>
                <h1>Studios: </h1>
              </div>
              <div className="grid gap-2 font-bold md:mr-[5%] sm:mr-[34%] mr-[30%]">
                {anime.data.type == null ? '?' : <h1>{anime.data.type}</h1>}
                {anime.data.episodes == null ? '?' : <h1>{anime.data.episodes}</h1>}
                {anime.data.status == null ? '?' : <h1>{anime.data.status}</h1>}
                {anime.data.source == null ? '?' : <h1>{anime.data.source}</h1>}
                <h1>{anime.data.duration}</h1>
                {anime.data.string == null ? '?' : <h1>{anime.data.string}</h1>}
                {anime.data.score == null ? '?' : <h1>{anime.data.score}</h1>}
                {anime.data.year == null ? '?' : <h1>{anime.data.year}</h1>}
                {anime.data.studios[0].name == null ? '?' : <h1>{anime.data.studios[0].name}</h1>}
              </div>
            </div>
            <div className="flex md:mt-3 mt-6">
              <div className="pr-10 grid gap-2">
                <h1>Genres: </h1>
                <h1>Members: </h1>
                <h1>Theme: </h1>
                <h1>Demographic: </h1>
                <h1>Popularity: </h1>
                <h1>Favorites: </h1>
                <h1>Rating: </h1>
                <h1>Season: </h1>
                <h1>Rank: </h1>
              </div>
              <div className="grid gap-2 font-bold ">
                <div className="flex ">
                  {anime.data.genres[0] == null ? '?' : <h1 className="pr-1">{anime.data.genres[0].name},</h1>}
                  {anime.data.genres[1] == null ? null : <h1 className="pr-1">{anime.data.genres[1].name},</h1>}
                  {anime.data.genres[2] == null ? null : <h1>{anime.data.genres[2].name}</h1>}
                </div>
                {anime.data.members == null ? '?' : <h1>{anime.data.members}</h1>}
                <div className="flex">
                  {anime.data.themes[0] == null ? '?' : <h1 className="">{anime.data.themes[0].name}</h1>}
                  {anime.data.themes[1] == null ? null : <h1 className="pr-1">, {anime.data.themes[1].name},</h1>}
                  {anime.data.themes[2] == null ? null : <h1>{anime.data.themes[2].name}</h1>}
                </div>
                <div className="flex">
                  {anime.data.demographics[0] == null ? '?' : <h1 className="pr-1">{anime.data.demographics[0].name}</h1>}
                  {anime.data.demographics[1] == null ? null : <h1 className="pr-1">{anime.data.demographics[1].name}</h1>}
                  {anime.data.demographics[2] == null ? null : <h1>{anime.data.demographics[2].name}</h1>}
                </div>
                {anime.data.popularity == null ? '?' : <h1>{anime.data.popularity}</h1>}
                <h1>{anime.data.favorites}</h1>
                {anime.data.rating == null ? '?' : <h1>{anime.data.rating}</h1>}
                {anime.data.season == null ? '?' : <h1>{anime.data.season}</h1>}
                {anime.data.rank == null ? '?' : <h1>{anime.data.rank}</h1>}
              </div>
            </div>
          </div>
          <div className="mt-8 flex ">
            <button className="flex items-center justify-center bg-cyan-500 text-cyan-50 px-2 py-1 text-lg rounded hover:brightness-90 mr-4 font-bold" onClick={handlePage}>
              <Heart size={24} className="pr-1" /> IKUTI {`( ${page} )`}
            </button>
            <div className="relative flex justify-between items-center transition w-[44%] ease-in-out">
              <button className="flex items-center justify-center hover:brightness-90 bg-cyan-500 text-cyan-50 px-2 py-1 text-lg rounded font-bold" onClick={() => setIsOpen((prev) => !prev)}>
                <FilmSlate size={24} className="pr-1" />
                <h1 className="px-2">EPISODE LIST</h1>
                {!isOpen ? <CaretDown className="h-8" /> : <CaretUp className="h-8" />}
              </button>
              {isOpen && (
                <div className="absolute start-48 flex flex-col items-center rounded p-2 bg-cyan-400">
                  {/* {animeEpisode.data.map((anime, i) => ( */}
                  <div className=" items-start grid grid-cols-3 gap-3">
                    <button className="bg-cyan-950 hover:bg-cyan-100 rounded hover:text-cyan-950 transition ease-in-out font-bold text-cyan-50 px-2 w-12 py-1">1</button>
                    <button className="bg-cyan-950 hover:bg-cyan-100 rounded hover:text-cyan-950 transition ease-in-out font-bold text-cyan-50 px-2 w-12 py-1">2</button>
                    <button className="bg-cyan-950 hover:bg-cyan-100 rounded hover:text-cyan-950 transition ease-in-out font-bold text-cyan-50 px-2 w-12 py-1">3</button>
                    <button className="bg-cyan-950 hover:bg-cyan-100 rounded hover:text-cyan-950 transition ease-in-out font-bold text-cyan-50 px-2 w-12 py-1">4</button>
                    <button className="bg-cyan-950 hover:bg-cyan-100 rounded hover:text-cyan-950 transition ease-in-out font-bold text-cyan-50 px-2 w-12 py-1">5</button>
                    <button className="bg-cyan-950 hover:bg-cyan-100 rounded hover:text-cyan-950 transition ease-in-out font-bold text-cyan-50 px-2 w-12 py-1">6</button>
                  </div>
                  {/* ))} */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
