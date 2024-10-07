import {
    useEffect,
    useState,
} from "react"

const Logo = ({

}) => {

    const [logo, setLogo] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://api.codenavid.ir/api/branding')
            .then(res => res.json())
            .then(data => {
                setLogo(data)
                setError(null)
            }).catch(err => {
                setError(err.message)
            })
    }, [])

    return <>
        {
            logo && <div>
                <p className="text-2xl md:text-3xl xl:text-4xl font-dmsans-bold text-custom-color3 ">{logo.data.attributes.logoText}</p>
            </div>
        }
    </>
}

export default Logo