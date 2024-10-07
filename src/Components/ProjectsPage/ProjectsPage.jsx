import { useEffect } from "react"
import { useState } from "react"
import Loading from "../Shared/Loading"
import SectionTitle from "../Shared/SectionTitle"
import Project from "./Project"


const ProjectsPage = ({

}) => {

    const [projectsPageData, setProjectsPageData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://my-portfolio.chabk.ir/api/projects-page')
            .then(res => res.json())
            .then(data => {
                setProjectsPageData(data.data)
                setLoading(false)
                setError(null)
            }).catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }, [])

    return <>
        <section className="max-w-6xl mx-auto px-6">
            {loading && <><Loading /></>}

            {projectsPageData && <>
                <SectionTitle content={projectsPageData.attributes.sectionTitle} />
            </>}

            <Project />
        </section>
    </>
}

export default ProjectsPage