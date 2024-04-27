import {
    useEffect,
    useState,
} from "react"

import { Link } from "react-router-dom"

const Navbar = ({

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
        <section>
            {error && <div>{error}</div>}

            <div className="flex gap-8">
                {menu && menu.map(item => {
                    return <section key={item.id}>
                        <ul>
                            <li className="font-dmsans-regular text-xl border-b border-custom-color3 hover:text-custom-color3 transition duration-700">
                                <Link to={item.attributes.link}>{item.attributes.title}</Link>
                            </li>
                        </ul>
                    </section>
                })}
            </div>
        </section>
    </>
}

export default Navbar