import { useEffect } from "react"
import { useState } from "react"
import Loading from "../Shared/Loading"
import SectionTitle from "../Shared/SectionTitle"
import Skills from "./Skills"

const SkillPage = ({

}) => {

    const [skillPageData, setSkillPageData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://my-portfolio.chbk.run/api/skill-page')
            .then(res => res.json())
            .then(data => {
                setSkillPageData(data.data)
                setLoading(false)
                setError(null)
            }).catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }, [])

    return <>
        <section className="max-w-6xl mx-auto px-6">
            {
                loading && <>
                    <Loading />
                </>
            }

            {
                skillPageData && <>
                    <SectionTitle content={skillPageData.attributes.sectionTitle} />
                    <Skills />
                </>
            }
        </section>
    </>
}

export default SkillPage