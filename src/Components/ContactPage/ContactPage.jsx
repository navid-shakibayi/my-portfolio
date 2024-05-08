import { useEffect, useState } from "react"
import SectionTitle from '../Shared/SectionTitle'
import Loading from "../Shared/Loading"
import Form from "./Form"

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
                    <Form />
                </>
            }
        </section>
    </>
}

export default ContactPage