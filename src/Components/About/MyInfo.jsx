import { useEffect, useState } from "react"

const MyInfo = ({

}) => {

    const [myInfoData, setMyInfoData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://api.codenavid.ir/api/my-infos?populate=*')
            .then(res => res.json())
            .then(data => {
                setMyInfoData(data.data)
                setLoading(false)
                setError(null)
            }).catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }, [])

    return <>
        <div className="flex flex-col gap-8 md:gap-0 mt-8 md:flex-row justify-between flex-wrap">
            {
                myInfoData && myInfoData.map(item => {
                    return <section
                        key={item.id}
                        className="bg-custom-color13 p-2 flex flex-col justify-center items-center md:w-48 lg:w-56 xl:w-60 md:aspect-square group transition-all duration-700"
                    >
                        <img
                            src={`https://api.codenavid.ir${item.attributes.svg.data.attributes.url}`}
                            alt={item.attributes.title}
                            className="w-10 group-hover:w-12 transition-all duration-700"
                        />
                        <p className="font-dmsans-bold text-sm md:text-base lg:text-lg group-hover:text-xl transition-all duration-700">{item.attributes.title}</p>
                        <p className="text-sm group-hover:text-base transition-all duration-700">{item.attributes.subTitle}</p>
                    </section>
                })
            }
        </div>
    </>
}

export default MyInfo