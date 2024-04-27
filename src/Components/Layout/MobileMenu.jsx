import {
    useEffect,
    useState,
} from "react"

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
        <section className="absolute bg-gray-700 end-6 top-16">
            {error && <div>{error}</div>}
            {menu && menu.map(item => {
                return <section key={item.id}>
                    <h1 className="text-2xl">{item.attributes.title}</h1>
                </section>
            })}
        </section>
    </>
}

export default MobileMenu