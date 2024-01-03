import Link from 'next/link';
import Image from 'next/image';
import { Star } from '@phosphor-icons/react/dist/ssr';

const RecommendedAnime = ({ api }) => {
  // console.log(api.data)
  return (
    <div className="flex justify-center flex-col">
      {api.data?.map((anime, index) => {
        return (
          <Link href={`anime/${anime.mal_id}`} className="relative flex flex-col mb-8" key={index}>
            <Image src={anime.images.webp.large_image_url} width={250} height={250} className="h-60 w-full object-cover rounded-xl hover:brightness-50 mr-4" />
            <h1 className="absolute text-lg w-full font-bold text-cyan-950 bg-cyan-50 text-center bottom-4 py-1 px-4">{anime.title}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default RecommendedAnime;
