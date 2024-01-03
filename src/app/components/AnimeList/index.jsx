import Image from 'next/image';
import Link from 'next/link';
import { Star } from '@phosphor-icons/react/dist/ssr';

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4">
      {api.data?.map((anime, index) => {
        return (
          <Link href={`anime/${anime.mal_id}`} key={index} className="card flex-col">
            <Image src={anime.images.webp.large_image_url} width={300} height={250} className="w-full h-[80%] object-cover rounded-t-2xl hover:brightness-50" />
            <h1 className="rounded-full max-w-max py-1 px-1.5 bg-slate-400 hover:text-cyan-400 text-cyan-50 text-xs mt-2 ml-4 mb-1 hover:bg-slate-500">{anime.type}</h1>
            <h1 className="truncate text-cyan-950 hover:text-cyan-600 px-4 text-start mb-4">{anime.title}</h1>

            <div className="absolute flex m-2 top-0 bg-cyan-500 items-center px-2 py-1 rounded">
              <Star size={18} className="icon object-cover text-cyan-50" />
              <h1 className="truncate text-cyan-50 ml-1 text-start text-sm"> {anime.score}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
