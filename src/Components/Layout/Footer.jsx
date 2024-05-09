const Footer = ({

}) => {

    const currentYear = new Date().getFullYear()

    return <>
        <p className="py-8 text-center text-custom-color12">&copy;{currentYear}</p>
    </>
}

export default Footer