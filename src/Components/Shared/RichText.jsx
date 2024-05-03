import { BlocksRenderer } from '@strapi/blocks-react-renderer';

const RichText = ({
    content,
}) => {

    return <>
        <section className="mt-8">
            {
                content && <section>
                    <BlocksRenderer
                        content={content}
                        blocks={{
                            paragraph: ({ children }) => <p className="text-lg lg:text-xl text-justify">{children}</p>,
                            list: ({ children }) => <ul className='list-disc text-lg lg:text-xl'>{children}</ul>,
                        }}
                        modifiers={{
                            bold: ({ children }) => <strong>{children}</strong>,
                        }}
                    />
                </section>
            }
        </section>
    </>
}

export default RichText