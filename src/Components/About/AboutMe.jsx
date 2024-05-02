import SectionTitle from'../Shared/SectionTitle'

const AboutMe = ({
    content,
    aboutText,
}) => {

    return <>
    <SectionTitle content={content} />
    <p className='mt-8 text-base text-justify sm:text-lg lg:text-xl'>{aboutText}</p>
    </>
}

export default AboutMe