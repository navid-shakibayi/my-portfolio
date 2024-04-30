import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loading from "../Shared/Loading"
import RichText from "../Shared/RichText"

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
        <section className="max-w-6xl mx-auto px-6">
            {
                loading && <>
                    <Loading />
                </>
            }
            {
                hero && <>
                    <section className="flex flex-col items-center md:flex-row-reverse md:justify-between md:items-center transition-all">
                        <div className="flex justify-center md:contents">
                            <img
                                src="https://my-portfolio.chbk.run/uploads/hero_image_8f53b9c819.jpg"
                                alt={hero.attributes.title}
                                className="rounded-full aspect-square object-cover max-w-[60%] ring-8 ring-custom-color11 md:max-w-[45%] transition-all"
                            />
                        </div>

                        <div>
                            <div className="max-w-[187px] max-w-full">
                                <h1 className="mt-8 text-2xl font-dmsans-bold text-center sm:text-4xl md:text-start lg:text-5xl transition-all">{hero.attributes.firstTitle}</h1>
                                <h2 className=" text-2xl font-dmsans-bold text-center sm:text-4xl md:text-start lg:text-5xl lg:mt-3 transition-all">{hero.attributes.secondTitle}</h2>
                                <p className="ms-4 sm:ms-0 text-xs text-custom-color12 font-dmsans-bold sm:text-base lg:mt-2">{hero.attributes.subTitle}</p>
                            </div>

                            <div className="flex gap-3 mt-4">
                                <a
                                    href="https://my-portfolio.chbk.run/uploads/Jobinja_QW_8467715_b74f15f17d.pdf"
                                    className="bg-custom-color3 px-4 py-1 text-xs font-dmsans-medium sm:text-base lg:text-lg transition-all"
                                >
                                    {hero.attributes.primeryCtaTitle}
                                </a>
                                <Link
                                    to={hero.attributes.secondaryCtaLink}
                                    className="border border-white px-4 py-1 text-xs font-dmsans-medium sm:text-base lg:text-lg transition-all"
                                >
                                    {hero.attributes.secondaryCtaTitle}
                                </Link>
                            </div>
                        </div>

                        <div>
                            <RichText />
                        </div>
                        <h1>tesst</h1>
                    </section>
                </>
            }
        </section>
    </>
}

export default Hero