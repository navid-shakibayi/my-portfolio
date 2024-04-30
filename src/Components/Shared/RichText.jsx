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
                            // You can use the default components to set class names...
                            paragraph: ({ children }) => <p className="text-lg lg:text-xl text-justify">{children}</p>,
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