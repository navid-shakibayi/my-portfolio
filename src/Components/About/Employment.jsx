import { useEffect, useState } from "react"
import SectionTitle from "../Shared/SectionTitle"
import ArrowRight from "../Svg/ArrowRight"

const Employment = ({
    employmentsTitle,
}) => {

    const [employmentData, setEmploymentData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://my-portfolio.chbk.run/api/employments')
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
                                <h2 className="text-2xl text-custom-color3 font-dmsans-bold">{item.attributes.jobTitle}</h2>
                                <a href={item.attributes.companyLink}>{item.attributes.companyName}</a>
                                <p>{item.attributes.startDate}</p>
                                <p>{item.attributes.presentText}</p>
                            </div>
                        </div>
                    </div>
                </section>
            })}
        </div>
    </>
}

export default Employment