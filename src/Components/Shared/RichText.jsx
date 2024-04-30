import { useEffect, useState } from "react"
import Loading from "./Loading"

const RichText = ({

}) => {

    const [content, setContent] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://my-portfolio.chbk.run/api/hero?populate=*')
            .then(res => res.json())
            .then(data => {
                setContent(data.data.attributes.summary)
                setLoading(false)
                setError(null)
            }).catch(err => {
                setError(err.message)
                setLoading(false)
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
                content && content.map(item => {
                    return <section>
                        <h1>{item.children.title}</h1>
                    </section>
                })
            }
        </section>
    </>
}

export default RichText