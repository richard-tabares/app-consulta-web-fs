import {useForm} from '../Hooks/useForm'
export const FormSearch = () => {

    const initialQuery = {
        query: ''
    }

    const { onInputChange, query, state } = useForm(initialQuery)
    



    const onSubmit = (e) => {
        e.preventDefault()
    }

    const onQuery = () => {
        console.log(query)
    }

    return (
      

      <section className="content-main">
          
          <form onSubmit={onSubmit}>
              
                <h1 className="title mb-6">Consulta de casos registrados en la base de datos del Sistema Penas Oral Acusatorio - SPOA</h1>

              <p className="title-table mb-2">Número de denuncia <b className="text-red-600 text-sm">*</b></p>
              

              <section className="grid mb-6">
                  
                    <input
                        type="search"
                        name="query"
                        value={query}
                        placeholder="Digite su número de denuncia"
                        className="input-search"
                        onChange={onInputChange}
                        
                    />
                  <p className="important font-thin important! justify-self-end">Número de 21 digitos</p>

              </section>

                <input
                    type="button"
                    value="Buscar"
                    className="btn-send"
                    onClick={onQuery}
                />
          </form>
      
        </section>
        

  )
}
