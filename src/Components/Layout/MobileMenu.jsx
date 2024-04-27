import {
    useEffect,
    useState,
} from "react"
import { Link } from "react-router-dom"

const MobileMenu = ({

}) => {

    const [menu, setMenu] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://my-portfolio.chbk.run/api/headers')
            .then(res => res.json())
            .then(data => {
                setMenu(data.data);
                setError(null);
            }).catch(err => {
                setError(err.message);
            })
    }, [])

    return <>
        <section className="absolute bg-custom-color3 bg-opacity-10	 end-6 top-16 h-dvh">
            {error && <div>{error}</div>}

            <ul className="flex flex-col-reverse items-center gap-4 px-24 py-4">
                {menu && menu.map(item => {
                    return <li key={item.id}>
                        <Link
                            to={item.attributes.link}
                            className="font-dmsans-regular text-xl border-b border-custom-color3 hover:text-custom-color3 transition duration-700"
                        >
                            {item.attributes.title}
                        </Link>
                    </li>
                })}
            </ul>
        </section>
    </>
}

export default MobileMenu