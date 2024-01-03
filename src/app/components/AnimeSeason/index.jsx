import { Star } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';

const NowAnime = ({ api }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
      {api.data?.map((nowAnime, index) => {
        return (
          <Link href={`anime/${nowAnime.mal_id}`} key={index} className="card flex-col">
            <Image src={nowAnime.images.webp.large_image_url} width={300} height={250} className="w-full h-[80%] object-cover rounded-t-2xl hover:brightness-50" />
            <button className="rounded-full w-8 bg-slate-400 hover:text-cyan-400 text-cyan-50 text-xs mt-2 ml-4 mb-1 hover:bg-slate-500">{nowAnime.type}</button>
            <h1 className="truncate ext-cyan-950 hover:text-cyan-600 px-4 text-start mb-4">{nowAnime.title}</h1>

            {nowAnime.episodes ? (
              <div className="absolute flex m-2 top-0 bg-cyan-500 items-center px-2 py-1 rounded">
                <h1 className="text-cyan-50 ml-1 text-start text-sm">Ep {nowAnime.episodes}</h1>
              </div>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
};

export default NowAnime;
