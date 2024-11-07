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
      <section className='grid gap-4 mb-2'>

        <section className='grid grid-flow-col grid-cols-5 mb-4'>

          <section className='border-r-gray-500 border-r col-span-4'>

            <p className='label'>Número de la Noticia Criminal</p>
            <p className='important'>110016108112202400359</p>

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

      {/* INICIO DESPACHO ASIGNADO */}
      <section className='border border-line rounded-md divide-y'>

        <h2 className='bg-lable-gray title-table border-none rounded-t-md important!'>Despacho asignado</h2>

        <section className='p-2'>
          <p className='label'>Seccional</p>
          <p className='important'>Dirección seccion de Bogota</p>
        </section>
        <section className='p-2'>
          <p className='label'>Unidad</p>
          <p className='important'>EDA -  Priorización</p>
        </section>
        <section className='p-2'>
          <p className='label'>Despacho</p>
          <p className='important'>375 FISCALIA 375</p>
        </section>
        <section className='p-2'>
          <p className='label'>Fecha asignación</p>
          <p className='important'>05 agosto 2024 - 22:44 am</p>
        </section>

        <h2 className='bg-lable-gray title-table rounded-none border-none'>Ubicación del despacho</h2>

        <section className='p-2'>
          <p className='label'>Departamento</p>
          <p className='important'>Bogota D.C</p>
        </section>
        <section className='p-2'>
          <p className='label'>Municiio</p>
          <p className='important'>Cundinamarca</p>
        </section>
        <section className='p-2'>
          <p className='label'>Dirección</p>
          <p className='important'>Cr 28 # 18-61. Piso 2</p>
        </section>
        <section className='p-2'>
          <p className='label'>Correo electrónico</p>
          <p className='important'>nombres@fiscalia.gov.co</p>
        </section>
        <section className='p-2'>
          <p className='label'>Teléfonos</p>
          <p className='important'>604123456</p>
        </section>


      </section>
      {/* FIN DESPACHO ASIGNADO */}

      {/* INICIO DELITO */}
      <section className='bg-background rounded-md px-3 py-1 border border-line grid gap-3 justify-between items-center divide-y divide-slate-300'>

        <section className='py-2'>
          <p className='label'>Delito</p>
          <p className='important pb-4'>Hurto. Art 239 C.P. Agravado cuando lo hurtado son medio motorizados o lo que estos transporten ART. 241 C.P.N.6</p>
          <span className='label block'>Grado del delito <span className='important'>Ninguno</span></span>
          <span className='label block'>Estado <span className='important'>Activo</span></span>
          <span className='label'>Referente? <span className='important'>Si</span></span>
        </section>
        <section className='py-2'>
          <p className='label'>Delito</p>
          <p className='important pb-4'>Hurto. Art 239 C.P. Agravado cuando lo hurtado son medio motorizados o lo que estos transporten ART. 241 C.P.N.6</p>
          <span className='label block'>Grado del delito <span className='important'>Ninguno</span></span>
          <span className='label block'>Estado <span className='important'>Activo</span></span>
          <span className='label'>Referente? <span className='important'>Si</span></span>
        </section>

      </section>
      {/* FIN DELITO */}

      {/* INICIO ACTUACIONES */}
      <section className='rounded-md border border-line divide-y divide-slate-300'>

        <h2 className='bg-lable-gray title-table rounded-none border-none'>Actuaciones del caso - No reservadas</h2>
        <section className='grid grid-flow-col grid-cols-3 items-center'>
          <p className='col-span-1 text-right p-2 important'>Fecha actuación</p>
          <p className='col-span-2 p-2 important'>Nombre actuación</p>
        </section>
        <section className='grid grid-flow-col grid-cols-3 items-center'>
          <p className='col-span-1 text-right p-2 important'>10/Ene/2024 - 08:30 PM</p>
          <p className='col-span-2 p-2 data'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
        </section>
        <section className='grid grid-flow-col grid-cols-3 items-center'>
          <p className='col-span-1 text-right p-2 important'>10/Ene/2024 - 08:30 PM</p>
          <p className='col-span-2 p-2 data'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
        </section>
        <section className='grid grid-flow-col grid-cols-3 items-center'>
          <p className='col-span-1 text-right p-2 important'>10/Ene/2024 - 08:30 PM</p>
          <p className='col-span-2 p-2 data'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
        </section>
        <section className='grid grid-flow-col grid-cols-3 items-center'>
          <p className='col-span-1 text-right p-2 important'>10/Ene/2024 - 08:30 PM</p>
          <p className='col-span-2 p-2 data'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
        </section>


      </section>
      {/* FIN ACTUACIONES */}

      {/* INICIO FECHA DE CONSULTA */}
      <section className='bg-blue text-white grid grid-flow-col items-center place-content-between px-3 py-1 mb-4'>

        <section className='col-span-3 '>Fecha de consulta</section>
        <section className='col-span-3 text-right'>01/22/2024 - 14:37 PM</section>

      </section>
      {/* FIN FECHA DE CONSULTA */}

      <section className='grid grid-flow-col place-content-between'>
        <button type="button" className='btn-send'>Volver</button>
        <button type="button" className='btn-send'>Imprimir</button>
      </section>


    </section>

  )
}
