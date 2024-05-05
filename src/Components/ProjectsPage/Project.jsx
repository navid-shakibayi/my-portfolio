const Project = ({
    projectName,
    src,
}) => {

    return <>
        <div className="flex flex-col gap-8">
            <div className="relative  overflow-hidden   w-[900px] h-[300px]">
                <img
                    src={`https://my-portfolio.chbk.run${src}`}
                    alt={projectName}
                    className="absolute top-0 object-cover hover:transform hover:-translate-y-full transition duration-[10000ms]"
                />
            </div>
            <h2>{projectName}</h2>
        </div>
    </>
}

export default Project