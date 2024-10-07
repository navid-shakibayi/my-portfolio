import { useEffect, useState } from "react"

const Skills = ({

}) => {

    const [skillsData, setSkillsData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://api.codenavid.ir/api/skills?populate=*')
            .then(res => res.json())
            .then(data => {
                setSkillsData(data.data)
                setLoading(false)
                setError(null)
            }).catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }, [])

    return <>
        <div className="grid grid-cols-2 gap-4 justify-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {
                skillsData && skillsData.map(item => {
                    return <section
                        key={item.id}
                        className="flex flex-col gap-4 items-center justify-center mt-8 bg-custom-color13 p-4 w-fit aspect-square"
                    >
                        <img
                            src={`https://api.codenavid.ir${item.attributes.image.data.attributes.url}`}
                            alt={item.attributes.title}
                            className="w-20"
                        />
                        <p className="font-dmsans-bold text-sm md:text-base lg:text-lg text-custom-color31">{item.attributes.title}</p>
                    </section>
                })
            }
        </div>
    </>
}

export default Skills