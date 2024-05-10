import { useEffect, useState } from "react"
import Loading from "../Shared/Loading"
import Swal from "sweetalert2"

const Form = ({
    formName,
    formEmail,
    formBody,
    ctaText,
    formPhone,
}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const submitHandler = (e) => {

        e.preventDefault()

        setLoading(true)
        fetch('https://my-portfolio.chbk.run/api/contact-requests', {
            method: 'POST',
            body: JSON.stringify({
                "data": {
                    "name": name,
                    "email": email,
                    "phone": phone,
                    "message": message
                }
            }),
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setError(null)
                Swal.fire({
                    icon: "success",
                    title: "Thanks!",
                    text: "Your message has been sent.",
                    confirmButtonText: "Ok"
                });
            }).catch(err => {
                setError(err.message)
            })
    }

    const labelStyle = "text-sm font-dmsans-bold underline decoration-custom-color3 underline-offset-4 md:text-base lg:text-lg"
    const inputStyle = "mt-3  text-base font-dmsans-bold px-2 py-0.5 rounded-sm focus:outline-none border border-custom-color31 border-2 focus:border-custom-color3 bg-custom-color13 md:text-lg"

    return <>

        <div>
            <form
                onSubmit={(e) => submitHandler(e)}
                autoComplete="on"
                className="flex flex-col mt-8"
            >
                <label
                    htmlFor="name"
                    className={labelStyle}
                >
                    {formName}
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className={inputStyle}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <label
                    htmlFor="email"
                    className={`mt-6 ${labelStyle}`}
                >
                    {formEmail}
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className={inputStyle}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <label
                    htmlFor="phone"
                    className={`mt-6 ${labelStyle}`}
                >
                    {formPhone}
                </label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    className={inputStyle}
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />

                <label
                    htmlFor="message"
                    className={`mt-6 ${labelStyle}`}
                >
                    {formBody}
                </label>
                <textarea
                    name="message"
                    id="message"
                    className={`h-64 ${inputStyle}`}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                >

                </textarea>
            </form>
            <button
                type="submit"
                className="bg-custom-color31 text-sm w-full mt-6 font-dmsans-bold py-1 hover:bg-custom-color3 transition-all duration-500 rounded-sm md:text-base lg:text-lg"
                onClick={submitHandler}
                disabled={name === '' || email === '' || phone === '' || message === ''}
            >
                {loading && <Loading />}
                {ctaText}
            </button>
        </div>
    </>
}

export default Form