import { useEffect, useState } from "react"
import SectionTitle from "../Shared/SectionTitle"
import School from "../Svg/School"

const Education = ({
    educationTitle,
}) => {

    const [educationData, setEducationData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://api.codenavid.ir/api/educations')
            .then(res => res.json())
            .then(data => {
                setEducationData(data.data)
                setLoading(false)
                setError(null)
            }).catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }, [])

    return <>
        <SectionTitle content={educationTitle} />

        <div className="flex flex-col gap-8 mt-8">
            {educationData && educationData.map(item => {
                return <section
                    key={item.id}
                    className="bg-custom-color13 p-2"
                >
                    <div className="flex gap-2">
                        <School width={30} height={30} fill={"fill-custom-color31"} />
                        <div>
                            <h2 className="text-lg text-custom-color3 font-dmsans-bold sm:text-xl lg:text-2xl xl:text-3xl transition-all">{item.attributes.degree}</h2>
                            <p className="font-dmsans-bold text-sm md:text-base lg:text-lg">
                                {item.attributes.universityName}
                            </p>
                            <div className="flex divide-x-2 divide-custom-color3 text-sm">
                                <p className="pe-2">{item.attributes.startYear}</p>
                                <p className="ps-2">{item.attributes.endYear}</p>
                            </div>
                        </div>
                    </div>
                </section>
            })}
        </div>
    </>
}

export default Education