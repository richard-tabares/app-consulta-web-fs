import { useState } from 'react'
import { Message } from '../components/Message'
import { useForm } from '../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { getData } from '../helpers/getData'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { ReCaptcha } from '../components/ReCaptcha'

export const PageFormSearch = () => {

    const [message, setMessage] = useState()
    const [messageState, setMessageState] = useState(true)
    const recaptchaToken = import.meta.env.VITE_RECAPTCHA
    const [captchaActive, setCaptchaActive] = useState(false)
    const navigate = useNavigate()
    
    const initialQuery = {
        query: ''
    }

    const { onInputChange, query } = useForm(initialQuery)

    const onSubmit = (e) => {
        e.preventDefault()
        onQuery()
    }

    const onQuery = async () => {

        if (query.length == 21) {

            const data = await getData(query)
            const hasData = data?.DatosRespuesta?.RegistroNumero

            if (captchaActive) {

                if (hasData) {

                    setMessageState(false)
                    navigate('/consulta', { state: { query } })

                } else {

                    setMessageState(true)
                    setMessage('Número de la denuncia no existe, revisa el número de caso')

                }

            } else {

                setMessageState(true)
                setMessage('Debes validar el reCAPTCHA')

            }

        } else {

            setMessageState(true)
            setMessage('Número de la denuncia debe ser de 21 caracteres')

        }

    }

    return (


        <section className="content-main w-min-[324px]">

            <form onSubmit={onSubmit}>

                <h1 className="title mb-6">Consulta de casos registrados en la base de datos del Sistema Penal Oral Acusatorio - SPOA</h1>

                <p className="title-table mb-2">Número de denuncia <b className="text-red-600 text-sm">*</b></p>


                <section className="grid mb-2">

                    <input
                        type="search"
                        name="query"
                        value={query}
                        placeholder="Digite su número de denuncia"
                        className="input-search mb-2"
                        onChange={onInputChange}

                    />
                    <p className="important font-thin text-sm justify-self-end mb-4">Número de 21 digitos</p>

                    <GoogleReCaptchaProvider reCaptchaKey={recaptchaToken}>
                        <ReCaptcha setCaptchaActive={ setCaptchaActive } />
                    </GoogleReCaptchaProvider>

                </section>

                {
                    messageState && <Message message={message} />
                }

                <input
                    type="button"
                    value="Buscar"
                    className={`btn-send mt-6`}
                    onClick={onQuery}
                />


            </form>

        </section>

    )
}
