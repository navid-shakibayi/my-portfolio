import { useState } from "react"
import AboutMe from "./AboutMe"
import { useEffect } from "react"
import Employment from "./Employment"
import Education from "./Education"
import MyInfo from "./MyInfo"

const About = ({

}) => {

    const [aboutData, setAboutData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://my-portfolio.chabk.ir/api/about')
            .then(res => res.json())
            .then(data => {
                setAboutData(data.data)
                setLoading(false)
                setError(null)
            }).catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }, [])

    return <>
        <section>
            {
                aboutData && <>
                    <section className="max-w-6xl mx-auto px-6">
                        <AboutMe
                            content={aboutData.attributes.sectionTitle}
                            aboutText={aboutData.attributes.aboutMeText}
                        />

                        <MyInfo />

                        <Employment employmentsTitle={aboutData.attributes.employmentsTitle} />

                        <Education educationTitle={aboutData.attributes.educationTitle} />
                    </section>
                </>
            }
        </section>
    </>
}

export default About