import {
    useEffect,
    useState,
} from "react"

import { Link, NavLink } from "react-router-dom"

const Navbar = ({

}) => {

    const [menu, setMenu] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://api.codenavid.ir/api/headers')
            .then(res => res.json())
            .then(data => {
                setMenu(data.data);
                setError(null);
            }).catch(err => {
                setError(err.message);
            })
    }, [])

    const activeStyle = "font-dmsans-regular text-xl border-b border-custom-color3 hover:text-custom-color3 transition duration-700 text-custom-color3"
    const notActiveStyle = "font-dmsans-regular text-xl border-b border-custom-color3 hover:text-custom-color3 transition duration-700"

    return <>
        <section>
            {error && <div>{error}</div>}

            <div className="flex flex-row-reverse gap-8">
                {menu && menu.map(item => {
                    return <section key={item.id}>
                        <ul>
                            <li>
                                <NavLink to={item.attributes.link} className={(navData) => navData.isActive ? `${activeStyle}` : `${notActiveStyle}`}>{item.attributes.title}</NavLink>
                            </li>
                        </ul>
                    </section>
                })}
            </div>
        </section>
    </>
}

export default Navbar