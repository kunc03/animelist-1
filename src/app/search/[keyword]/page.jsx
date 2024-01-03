import AnimeList from "@/app/components/AnimeList"
import Header from "@/app/components/AnimeList/Header"
import { getResponseAnime } from "@/app/libs/api-libs"


const Page = async ({ params }) => {
    const { keyword } = params
    const spaceKeyword = decodeURI(keyword)

    const searchAnime = await getResponseAnime("anime", `q=${spaceKeyword}`)
    

    return (
        <div className="flex justify-center items-center">
            <div className="w-[95%]">
                <Header title={`Pencarian Untuk ${spaceKeyword}`} />
                <AnimeList api={searchAnime} />
            </div>
        </div>
    )
}

export default Page
