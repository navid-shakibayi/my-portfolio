import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loading from "../Shared/Loading"

const Hero = ({

}) => {

    const [hero, setHero] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://my-portfolio.chbk.run/api/hero?populate=*')
            .then(res => res.json())
            .then(data => {
                setHero(data.data);
                setLoading(false)
                setError(null)
            }).catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }, [])

    const uploadurl = "https://my-portfolio.chbk.run"

    return <>
        <section className="max-w-7xl mx-auto px-6">
            {
                loading && <>
                    <Loading />
                </>
            }
            {
                hero && <>
                    <section className="flex flex-col items-center">
                        <div>
                            <img
                                src="https://my-portfolio.chbk.run/uploads/hero_image_8f53b9c819.jpg"
                                alt={hero.attributes.title}
                                className="rounded-full aspect-square object-cover w-44 ring-8 ring-custom-color11"
                            />
                        </div>

                        <div className="max-w-[187px]">
                            <h1 className="mt-8 text-2xl font-dmsans-bold text-center">{hero.attributes.firstTitle}</h1>
                            <h2 className=" text-2xl font-dmsans-bold text-center">{hero.attributes.secondTitle}</h2>
                            <p className="text-xs text-custom-color12 font-dmsans-bold text-justify">{hero.attributes.subTitle}</p>
                        </div>

                        <div className="flex gap-3 mt-4">
                            <a
                                href="https://my-portfolio.chbk.run/uploads/Jobinja_QW_8467715_b74f15f17d.pdf"
                                className="bg-custom-color3 px-4 py-2 text-xs font-dmsans-medium"
                            >
                                {hero.attributes.primeryCtaTitle}
                            </a>
                            <Link
                            to={hero.attributes.secondaryCtaLink}
                            className="border border-white px-4 py-2 text-xs font-dmsans-medium"
                            >
                                {hero.attributes.secondaryCtaTitle}
                                </Link>
                        </div>
                    </section>
                </>
            }
        </section>
    </>
}

export default Hero