import { useEffect, useState } from "react"
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
    },[])

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
            <h1>{hero.attributes.title}</h1>
            <section>
                <div>
                    <img src={hero.attributes.image.data.attributes.url} alt="" />
                    <a href={hero.attributes.image.data.attributes.url}>click</a>
                </div>
            </section>
            </>
        }
    </section>
    </>
}

export default Hero