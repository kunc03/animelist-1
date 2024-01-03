import Image from 'next/image';
// import { getResponseAnime } from '../libs/api-libs';
import Link from 'next/link';

const RecommendAnime = async ({ api }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
      {api.data.map((anime, index) => {
        // console.log(anime.entry[0].title);
        return (
          <Link href={`anime/${anime.mal_id}`} key={index} className="card flex-col">
            <Image src={anime.images.webp.large_image_url} width={300} height={250} className="w-full h-[85%] object-cover rounded-t-2xl hover:brightness-50" />
            {/* <button className="rounded-full w-8 bg-slate-400 hover:text-cyan-400 text-cyan-50 text-xs mt-2 ml-4 mb-1 hover:bg-slate-500">{nowAnime.type}</button> */}
            <h1 className="truncate text-cyan-50 hover:text-cyan-400 px-4 text-start mb-7 pt-1">{anime.title}</h1>

            {/* <div className="absolute flex m-2 top-0 bg-cyan-500 items-center px-2 py-1 rounded">
                    <h1 className="text-cyan-50 ml-1 text-start text-sm">Ep {nowAnime.episodes}</h1>
                  </div> */}
          </Link>
        );
      })}
    </div>
  );
};

export default RecommendAnime;
