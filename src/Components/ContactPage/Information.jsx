const Information = ({
    githubTitle,
    github,
    emailTitle,
    email,
    phoneTitle,
    phone,
    websiteTitle,
    website,
}) => {

    const cardStyle = "bg-custom-color13 text-center px-2 py-8 flex flex-col items-center justify-center"
    const titleStyle = "text-lg text-custom-color3 font-dmsans-bold sm:text-xl lg:text-2xl xl:text-3xl transition-all"
    const subtitleStyle = "font-dmsans-bold text-sm md:text-base lg:text-lg"

    return <>
        <section className="mt-8 flex flex-col sm:grid grid-cols-2 gap-4">
            <div className={cardStyle}>
                <p className={titleStyle}>{emailTitle}</p>
                <p className={subtitleStyle}>{email}</p>
            </div>

            <div className={cardStyle}>
                <p className={titleStyle}>{phoneTitle}</p>
                <p className={subtitleStyle}>{phone}</p>
            </div>

            <div className={cardStyle}>
                <p className={titleStyle}>{githubTitle}</p>
                <p className={subtitleStyle}>{github}</p>
            </div>

            <div className={cardStyle}>
                <p className={titleStyle}>{websiteTitle}</p>
                <p className={subtitleStyle}>{website}</p>
            </div>
        </section>
    </>
}

export default Information