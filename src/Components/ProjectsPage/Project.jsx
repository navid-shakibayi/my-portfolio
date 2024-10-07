import { useEffect, useState } from "react"

const Project = ({

}) => {

    const [projectData, setProjectData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://my-portfolio.chabk.ir/api/projects?populate=*')
            .then(res => res.json())
            .then(data => {
                setProjectData(data.data)
                setLoading(false)
                setError(null)
            }).catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }, [])

    return <>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projectData && projectData.map(item => {
                return <div
                    key={item.id}
                    className="bg-custom-color13 flex flex-col items-center p-4"
                >
                    <a
                        href={item.attributes.link}
                        className="relative overflow-hidden w-full h-[150px] lg:h-[300px] rounded"
                    >
                        <img
                            src={`https://my-portfolio.chabk.ir${item.attributes.image.data.attributes.url}`}
                            alt={item.attributes.projectName}
                            className="absolute top-0 object-cover hover:bottom-0 hover:-translate-y-full transition duration-[10000ms]"
                        />
                    </a>
                    <div className="w-full">
                        <a href={`https://my-portfolio.chabk.ir${item.attributes.image.data.attributes.url}`}>
                            <h2 className="text-lg text-custom-color3 font-dmsans-bold sm:text-xl lg:text-2xl xl:text-3xl transition-all mt-2">{item.attributes.projectName}</h2>
                        </a>
                        <p className="font-dmsans-bold text-base md:text-lg lg:text-xl underline decoration-custom-color3 underline-offset-4">{item.attributes.model}</p>
                        <div className="flex gap-2 mt-2">
                            <img
                                src={`https://my-portfolio.chabk.ir${item.attributes.icon.data.attributes.url}`}
                                alt={item.attributes.framework}
                                className="w-5 lg:w-6 xl:w-7"
                            />
                            <p className="font-dmsans-bold text-sm md:text-base lg:text-lg">{item.attributes.framework}</p>
                        </div>
                    </div>
                </div>
            })}
        </section>
    </>
}

export default Project