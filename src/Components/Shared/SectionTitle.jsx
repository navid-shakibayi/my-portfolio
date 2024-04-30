import Hashtag from "../Svg/Hashtag"

const SectionTitle = ({
    content,
}) => {

    return <>
        <section className="flex justify-center mt-8">
            <div className="flex items-center border-b border-custom-color3">
                <Hashtag height={35} width={35} fill={'fill-custom-color31'} />
                <h1 className="text-2xl font-dmsans-bold sm:text-2xl lg:text-3xl xl:text-4xl transition-all">{content}</h1>
            </div>
        </section>
    </>
}

export default SectionTitle