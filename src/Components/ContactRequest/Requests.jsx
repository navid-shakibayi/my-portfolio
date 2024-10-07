import { useEffect, useState } from "react"
import Loading from "../Shared/Loading"

const Requests = ({

}) => {

    const [requestsData, setRequestsData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://api.codenavid.ir/api/contact-requests')
            .then(res => res.json())
            .then(data => {
                setRequestsData(data.data)
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
            loading && <Loading />
        }

        {
            requestsData&& <>
            <div>
                {
                    requestsData?.toReversed().map(item => {
                        return <div key={item.id} className="mt-8">
                            <p className="text-lg text-custom-color3 font-dmsans-bold sm:text-xl lg:text-2xl xl:text-3xl transition-all mt-2">{item.attributes.name}</p>
                            <div className="p-4 border border-custom-color31 border-2 focus:border-custom-color3 bg-custom-color13">
                            <p className="font-dmsans-bold text-sm md:text-base lg:text-lg underline decoration-custom-color3 underline-offset-4">{item.attributes.email}</p>
                            <p className="mt-4 font-dmsans-bold text-sm md:text-base lg:text-lg underline decoration-custom-color3 underline-offset-4">{item.attributes.phone}</p>
                            <p className="mt-6 text-base font-dmsans-bold md:text-lg lg:text-xl">{item.attributes.message}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            </>
        }
    </section>
    </>
}

export default Requests