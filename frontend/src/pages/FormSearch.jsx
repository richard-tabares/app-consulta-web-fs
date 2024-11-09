import { useState } from 'react'
import { Message } from '../components/Message'
import { useForm } from '../Hooks/useForm'
import { useNavigate } from 'react-router-dom'

export const FormSearch = () => {

    const [message, setMessage] = useState()
    const [messageState, setMessageState] = useState(true)
    const navigate = useNavigate()

    const initialQuery = {
        query: ''
    }

    const { onInputChange, query } = useForm(initialQuery)




    const onSubmit = (e) => {
        e.preventDefault()
    }

    const onQuery = () => {

        if (query.length > 0) {

            setMessageState(false)
            navigate('/consulta', { state: {query} })
            
        } else {
            
            setMessageState(true)
            setMessage('Número de la denuncia debe ser de 21 caracteres')

        }

    }

    return (


        <section className="content-main">

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
                    <p className="important font-thin text-sm justify-self-end">Número de 21 digitos</p>

                </section>

                {
                    messageState && <Message message={message} />
                }

                <input
                    type="button"
                    value="Buscar"
                    className="btn-send mt-6"
                    onClick={onQuery}
                />
            </form>

        </section>


    )
}
