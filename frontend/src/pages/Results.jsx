import { useLocation } from 'react-router-dom'

export const Results = () => {

  const location = useLocation();
  const query = location.state?.query || ''

  return (

    <section className='p-2 grid gap-3'>

      <header className='title bg-label text-white p-4'>

        Consulta de casos registrados en la base de datos del Sistema Penas Oral Acusatorio - SPOA

      </header>

      {/* INICIO DE INFORMAICON GENERAL */}
      <section className='grid gap-4'>

        <section className='grid grid-flow-col grid-cols-5 mb-4'>

          <section className='border-r-gray-500 border-r col-span-4'>

            <p className='label'>Número de la Noticia Criminal</p>
            <p className='important'>1234567811234567921254</p>

          </section>
          <section className='col-span-1 justify-center grid'>

            <p className='label'>Estado</p>
            <p className='important'>Activo</p>

          </section>

        </section>

        <section className='bg-lable-gray'>

          <p className='label'>Etapa notcia criminal</p>
          <p className='important'>Indagación</p>

        </section>
        <section className='bg-lable-gray'>

          <p className='label'>Departamentos hechos</p>
          <p className='important'>Cundinamarca</p>

        </section>
        <section className='bg-lable-gray'>

          <p className='label'>Municipios hechos</p>
          <p className='important'>Cajicá</p>

        </section>
        <section className='bg-lable-gray'>

          <p className='label'>Fechas hechos</p>
          <p className='important'>12/Ago/2021 - 08:00</p>

        </section>
        <section className='bg-lable-gray'>

          <p className='label'>Ley de aplicabilidad</p>
          <p className='important'>Ley 90 - P. Abreviado</p>

        </section>

      </section>
      {/* FIN DE INFORMAICON GENERAL  */}


    </section>

  )
}
