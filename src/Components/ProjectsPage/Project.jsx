const Project = ({
    projectName,
    src,
    link,
    framework,
    logoSrc,
}) => {

    return <>
        <div className="bg-custom-color13 flex flex-col mt-8 items-center p-4">
            <a
                href={link}
                className="relative overflow-hidden w-full h-[150px] lg:h-[300px] rounded"
            >
                <img
                    src={`https://my-portfolio.chbk.run${src}`}
                    alt={projectName}
                    className="absolute top-0 object-cover hover:transform hover:-translate-y-full transition duration-[10000ms]"
                />
            </a>
            <div className="w-full">
                <h2 className="text-lg text-custom-color3 font-dmsans-bold sm:text-xl lg:text-2xl xl:text-3xl transition-all mt-2">{projectName}</h2>
                <div className="flex gap-2 mt-1">
                    <img
                        src={`https://my-portfolio.chbk.run${logoSrc}`}
                        alt={framework}
                        className="w-5 lg:w-6 xl:w-7"
                    />
                    <p className="font-dmsans-bold text-sm md:text-base lg:text-lg">{framework}</p>
                </div>
            </div>
        </div>
    </>
}

export default Project