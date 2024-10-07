import { useEffect, useState } from "react"
import SectionTitle from "../Shared/SectionTitle"
import ArrowRight from "../Svg/ArrowRight"
import RichText from "../Shared/RichText"

const Employment = ({
    employmentsTitle,
}) => {

    const [employmentData, setEmploymentData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
        fetch('https://api.codenavid.ir/api/employments')
            .then(res => res.json())
            .then(data => {
                setEmploymentData(data.data)
                setLoading(false)
                setError(null)
            }).catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }, [])

    return <>
        <SectionTitle content={employmentsTitle} />

        <div className="flex flex-col gap-8 mt-8">
            {employmentData && employmentData.map(item => {
                return <section key={item.id}>
                    <div className="bg-custom-color13 p-2">
                        <div className="flex gap-2">
                            <ArrowRight width={30} height={30} fill={"fill-custom-color31"} />
                            <div>
                                <h2 className="text-lg text-custom-color3 font-dmsans-bold sm:text-xl lg:text-2xl xl:text-3xl transition-all">{item.attributes.jobTitle}</h2>
                                <a
                                    href={item.attributes.companyLink}
                                    className="font-dmsans-bold text-sm md:text-base lg:text-lg"
                                >
                                    {item.attributes.companyName}
                                </a>
                                <div className="flex divide-x-2 divide-custom-color3 text-sm">
                                    <p className="pe-2">{monthNames[new Date(item.attributes.startDate).getMonth()]} {new Date(item.attributes.startDate).getFullYear()}</p>
                                    <p className="ps-2">{item.attributes.present ? (
                                        item.attributes.presentText
                                    ) : (
                                        <>
                                            {monthNames[new Date(item.attributes.endDate).getMonth()]} {new Date(item.attributes.endDate).getFullYear()}
                                        </>
                                    )}</p>
                                </div>
                                <RichText content={item.attributes.summary} />
                            </div>
                        </div>
                    </div>
                </section>
            })}
        </div>
    </>
}

export default Employment