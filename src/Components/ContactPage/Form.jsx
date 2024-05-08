import { useEffect, useState } from "react"
import Loading from "../Shared/Loading"

const Form = ({
    formName,
    formEmail,
    formBody,
    ctaText,
}) => {

    const labelStyle = "text-sm font-dmsans-bold underline decoration-custom-color3 underline-offset-4 md:text-base lg:text-lg"
    const inputStyle = "mt-3  text-base font-dmsans-bold px-2 py-0.5 rounded-sm focus:outline-none border border-custom-color31 border-2 focus:border-custom-color3 bg-custom-color13 md:text-lg"

    return <>

        <div>
            <form action="" className="flex flex-col mt-8">
                <label htmlFor="name" className={labelStyle}>{formName}</label>
                <input type="text" name="name" id="name" className={inputStyle} />

                <label htmlFor="email" className={`mt-6 ${labelStyle}`}>{formEmail}</label>
                <input type="email" name="email" id="email" className={inputStyle} />

                <label htmlFor="message" className={`mt-6 ${labelStyle}`}>{formBody}</label>
                <textarea name="message" id="message" className={`h-64 ${inputStyle}`}></textarea>
            </form>
            <button type="submit" className="bg-custom-color31 text-sm w-full mt-6 font-dmsans-bold py-1 hover:bg-custom-color3 transition-all duration-500 rounded-sm md:text-base lg:text-lg">{ctaText}</button>
        </div>
    </>
}

export default Form