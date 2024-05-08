import { useEffect, useState } from "react"
import SectionTitle from '../Shared/SectionTitle'
import Loading from "../Shared/Loading"
import Form from "./Form"
import Information from "./Information"

const ContactPage = ({

}) => {

    const [contactData, setContactData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://my-portfolio.chbk.run/api/contact-page')
            .then(res => res.json())
            .then(data => {
                setContactData(data.data)
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
                contactData && <>
                    <SectionTitle content={contactData.attributes.sectionTitle} />
                    <p className="text-center mt-4 font-dmsans-bold text-sm md:text-base lg:text-lg">{contactData.attributes.summary}</p>
                    <div className="lg:grid grid-cols-2 gap-6">
                        <Information
                            githubTitle={contactData.attributes.githubTitle}
                            github={contactData.attributes.github}
                            emailTitle={contactData.attributes.emailTitle}
                            email={contactData.attributes.email}
                            phoneTitle={contactData.attributes.phoneTitle}
                            phone={contactData.attributes.phone}
                            websiteTitle={contactData.attributes.websiteTitle}
                            website={contactData.attributes.website}
                            githubLink={contactData.attributes.githubLink}
                        />
                        <Form
                            formName={contactData.attributes.formName}
                            formEmail={contactData.attributes.formEmail}
                            formBody={contactData.attributes.formBody}
                            ctaText={contactData.attributes.ctaText}
                        />
                    </div>
                </>
            }
        </section>
    </>
}

export default ContactPage