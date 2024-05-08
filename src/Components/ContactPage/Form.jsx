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

    const labelStyle = "text-sm font-dmsans-bold underline decoration-custom-color3 underline-offset-4 md:text-base lg:text-lg"
    const inputStyle = "mt-3  text-base font-dmsans-bold px-2 py-0.5 rounded-sm focus:outline-none border border-custom-color31 border-2 focus:border-custom-color3 bg-custom-color13 md:text-lg"

    return <>
        <section>
            {
                loading && <>
                    <Loading />
                </>
            }

            {
                contactData && <>
                    <div>
                        {/* <h2>{contactData.attributes.formTitle}</h2> */}
                        <form action="" className="flex flex-col mt-8">
                            <label htmlFor="name" className={labelStyle}>{contactData.attributes.formName}</label>
                            <input type="text" name="name" id="name" className={inputStyle} />

                            <label htmlFor="email" className={`mt-6 ${labelStyle}`}>{contactData.attributes.formEmail}</label>
                            <input type="email" name="email" id="email" className={inputStyle} />

                            <label htmlFor="message" className={`mt-6 ${labelStyle}`}>{contactData.attributes.formBody}</label>
                            <textarea name="message" id="message" className={`h-64 ${inputStyle}`}></textarea>
                        </form>
                        <button type="submit" className="bg-custom-color31 text-sm w-full mt-6 font-dmsans-bold py-1 hover:bg-custom-color3 transition-all duration-500 rounded-sm md:text-base lg:text-lg">{contactData.attributes.ctaText}</button>
                    </div>
                </>
            }
        </section>
    </>
}

export default Form