import { useEffect, useState } from "react"
import Loading from "../Shared/Loading"

const Form = ({

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
        <section>
            {
                loading && <>
                    <Loading />
                </>
            }

            {
                contactData && <>
                    <form action="">
                        <label htmlFor="name">{contactData.attributes.formTitle}</label>
                    </form>
                </>
            }
        </section>
    </>
}

export default Form