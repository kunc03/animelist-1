import Link from "next/link"
import Image from 'next/image';
import RecommendedAnime from '../components/RecommendedAnime';
import { getNestedResponseAnime, reproduce } from '../libs/api-libs';
import HeaderSeason from '../components/AnimeSeason/Header';

const Sidebar = async () => {

    let recommendAnime = await getNestedResponseAnime('recommendations/anime', 'entry')
    recommendAnime = reproduce(recommendAnime, 8)

    return (
            <div>
          {/* Recommendation */}
                <HeaderSeason title="Recommendations" linkHref="/recommendations" linkTitle="Lihat Semua" />
                <RecommendedAnime api={recommendAnime} />
            </div>
    )
}

export default Sidebar