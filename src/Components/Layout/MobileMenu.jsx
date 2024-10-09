import {
    useEffect,
    useState,
} from "react"
import { Link } from "react-router-dom"

const MobileMenu = ({
    clickHandler,
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

    return <>
        <section className="absolute bg-custom-color1 end-0 top-16 h-dvh z-20">
            {error && <div>{error}</div>}

            <ul className="flex flex-col-reverse items-end gap-4 px-16 py-4">
                {menu && menu?.toReversed().map(item => {
                    return <li key={item.id}>
                        <Link
                            to={item.attributes.link}
                            onClick={clickHandler}
                            className="font-dmsans-regular text-xl border-b border-custom-color3 hover:text-custom-color3 transition duration-700"
                        >
                            {item.attributes.title}
                        </Link>
                    </li>
                })}
            </ul>
        </section>
        <div onClick={clickHandler} className="bg-custom-color31 w-full h-dvh absolute left-0 z-10 bg-opacity-40"></div>
    </>
}

export default MobileMenu