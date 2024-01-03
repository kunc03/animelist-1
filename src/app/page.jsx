import AnimeList from './components/AnimeList';
import Header from './components/AnimeList/Header';
import NowAnime from './components/AnimeSeason';
import RecommendedAnime from './components/RecommendedAnime';
// import AnimeTopReview from './AnimeTopReview';
import HeaderSeason from './components/AnimeSeason/Header';
import { getResponseAnime, getNestedResponseAnime, reproduce } from './libs/api-libs';

const Page = async () => {
  const topAnime = await getResponseAnime('top/anime', 'limit=5');
  const nowAnime = await getResponseAnime('seasons/now', 'limit=6');
  let recommendAnime = await getNestedResponseAnime('recommendations/anime', 'entry');
  recommendAnime = reproduce(recommendAnime, 5);
  let animeTopReview = await getNestedResponseAnime('reviews/anime', 'entry');
  animeTopReview = { data: animeTopReview.slice(0, 6) };

  return (
    <>
      <section className="flex justify-center">
        <div className="w-[95%] ">
          <Header title="Populer" linkHref="/populer" linkTitle="Lihat Semua" />
          <AnimeList api={topAnime} />
        </div>
      </section>

      <section className="flex justify-center">
        <div className="w-[95%] flex md:flex-row flex-col justify-between mt-10">
          <div className="md:w-[60%] w-full">
            {/* Sedang Tayang */}
            <HeaderSeason title="Sedang Tayang" linkHref="/seasons" linkTitle="Lihat Semua" />
            <NowAnime api={nowAnime} />

            {/* Paling banyak ditonton */}
            <div className="mt-8">
              <HeaderSeason title="Paling Banyak Ditonton" linkHref="/AnimeTopReview" linkTitle="Lihat Semua" />
              <NowAnime api={animeTopReview} />
            </div>
          </div>

          <div className="md:w-[37%] w-full mb-4 ">
            {/* Recommendation */}
            <HeaderSeason title="Recommendations" linkHref="/recommendations" linkTitle="Lihat Semua" />
            <RecommendedAnime api={recommendAnime} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
