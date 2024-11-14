import { useLocation, useNavigate } from 'react-router-dom'
import { getData } from '../helpers/getData';
import { useEffect, useState } from 'react';
import { useSplitActuaciones } from '../Hooks/useSplitActuaciones';
import { useSplitDelitos } from '../Hooks/useSplitDelitos';

export const Results = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const query = location.state?.query || ''

  const [jsonData, setJsonData] = useState([])

  useEffect(() => {

    const fetchData = async () => {

      setJsonData(await getData(query))

    }

    fetchData()

  }, [query])

    
  const stringActuaciones = String(jsonData?.DatosRespuesta?.RegistroNumero?.ACTUACIONES?._text)
  const stringDelitos = String(jsonData?.DatosRespuesta?.RegistroNumero?.DELITOS?._text)

  const dataActuaciones = useSplitActuaciones(stringActuaciones)
  const dataDelitos = useSplitDelitos(stringDelitos)

  // console.log(jsonData)

  const onPrint = () => {
    window.print()
  }
  const onBack = () => {
    navigate(-1)
  }

  return (

    <section className='p-2 grid gap-4'>

      <header className='title bg-label text-white p-4'>

        Consulta de casos registrados en la base de datos del Sistema Penas Oral Acusatorio - SPOA

      </header>

      {/* INICIO DE INFORMAICON GENERAL */}
      <section className='grid gap-4 mb-2'>

        <section className='grid grid-flow-col grid-cols-5 mb-4'>

          <section className='border-r-slate-300 border-r col-span-3'>

            <p className='label'>Número de la Noticia Criminal</p>

            <p className='important'>
              {
                jsonData?.DatosRespuesta?.RegistroNumero?.CASO_NOTICIA?._text
                  ? jsonData.DatosRespuesta.RegistroNumero.CASO_NOTICIA._text
                  : 'Ninguno'
              }
            </p>

          </section>
          <section className='col-span-2 justify-center grid pl-2'>

            <p className='label'>Estado</p>
            <p className='important'>
              {
                jsonData?.DatosRespuesta?.RegistroNumero?.CASO_ESTADO?._text
                  ? jsonData.DatosRespuesta.RegistroNumero.CASO_ESTADO._text
                  : 'Ninguno'
              }
            </p>

          </section>

        </section>

        <section className='bg-lable-gray'>

          <p className='label'>Etapa notcia criminal</p>
          <p className='important'>
            {
              jsonData?.DatosRespuesta?.RegistroNumero?.CASO_ETAPA?._text
                ? jsonData.DatosRespuesta.RegistroNumero.CASO_ETAPA._text
                : 'Ninguno'
            }
          </p>

        </section>
        <section className='bg-lable-gray'>

          <p className='label'>Departamentos hechos</p>
          <p className='important'>
            {
              jsonData?.DatosRespuesta?.RegistroNumero?.CASO_DEPA_HECHO?._text
                ? jsonData.DatosRespuesta.RegistroNumero.CASO_DEPA_HECHO._text
                : 'Ninguno'
            }
          </p>

        </section>
        <section className='bg-lable-gray'>

          <p className='label'>Municipios hechos</p>
          <p className='important'>
            {
              jsonData?.DatosRespuesta?.RegistroNumero?.CASO_MUNI_HECHO?._text
                ? jsonData.DatosRespuesta.RegistroNumero.CASO_MUNI_HECHO._text
                : 'Ninguno'
            }
          </p>

        </section>
        <section className='bg-lable-gray'>

          <p className='label'>Fechas hechos</p>
          <p className='important'>
            {
              jsonData?.DatosRespuesta?.RegistroNumero?.CASO_FECHA_HECHOS?._text
                ? jsonData.DatosRespuesta.RegistroNumero.CASO_FECHA_HECHOS._text
                : 'Ninguno'
            }
          </p>

        </section>
        <section className='bg-lable-gray'>

          <p className='label'>Ley de aplicabilidad</p>
          <p className='important'>
            {
              jsonData?.DatosRespuesta?.RegistroNumero?.CASO_LEY?._text
                ? jsonData.DatosRespuesta.RegistroNumero.CASO_LEY._text
                : 'Ninguno'
            }
          </p>

        </section>

      </section>
      {/* FIN DE INFORMAICON GENERAL  */}

      {/* INICIO DESPACHO ASIGNADO */}
      <section className='border border-line rounded-md divide-y'>

        <h2 className='bg-lable-gray title-table border-none rounded-t-md important!'>Despacho asignado</h2>

        <section className='p-2'>

          <p className='label'>Seccional</p>
          <p className='important'>
            {
              jsonData?.DatosRespuesta?.RegistroNumero?.UNID_SECCIONAL?._text
                ? jsonData.DatosRespuesta.RegistroNumero.UNID_SECCIONAL._text
                : 'Ninguno'
            }
          </p>

        </section>
        <section className='p-2'>

          <p className='label'>Unidad</p>
          <p className='important'>
            {
              jsonData?.DatosRespuesta?.RegistroNumero?.UNID_DESCRIPCION?._text
                ? jsonData.DatosRespuesta.RegistroNumero.UNID_DESCRIPCION._text
                : 'Ninguno'
            }
          </p>

        </section>
        <section className='p-2'>

          <p className='label'>Despacho</p>
          <p className='important'>
            {
              jsonData?.DatosRespuesta?.RegistroNumero?.DESPACHO?._text
                ? jsonData.DatosRespuesta.RegistroNumero.DESPACHO._text
                : 'Ninguno'
            }
          </p>

        </section>
        <section className='p-2'>

          <p className='label'>Fecha asignación</p>
          <p className='important'>
            {
              jsonData?.DatosRespuesta?.RegistroNumero?.FECHA_ASIGNACION?._text
                ? jsonData.DatosRespuesta.RegistroNumero.FECHA_ASIGNACION._text
                : 'Ninguno'
            }
          </p>

        </section>

        <h2 className='bg-lable-gray title-table rounded-none border-none'>Ubicación del despacho</h2>

        <section className='p-2'>

          <p className='label'>Departamento*</p>
          <p className='important'>Bogota D.C</p>

        </section>
        <section className='p-2'>

          <p className='label'>Municiio*</p>
          <p className='important'>Cundinamarca</p>

        </section>
        <section className='p-2'>

          <p className='label'>Dirección</p>
          <p className='important'>
            {
              jsonData?.DatosRespuesta?.RegistroNumero?.UNID_DIRECCION?._text
                ? jsonData.DatosRespuesta.RegistroNumero.UNID_DIRECCION._text
                : 'Ninguno'
            }
          </p>

        </section>
        <section className='p-2'>

          <p className='label'>Correo electrónico</p>
          <p className='important'>
            {
              jsonData?.DatosRespuesta?.RegistroNumero?.DESP_CORREO?._text
                ? jsonData.DatosRespuesta.RegistroNumero.DESP_CORREO._text
                : 'Ninguno'
            }
          </p>

        </section>
        <section className='p-2'>

          <p className='label'>Teléfonos</p>
          <p className='important'>
            {
              jsonData?.DatosRespuesta?.RegistroNumero?.UNID_TELEFONO?._text
                ? jsonData.DatosRespuesta.RegistroNumero.UNID_TELEFONO._text
                : 'Ninguno'
            }
          </p>

        </section>


      </section>
      {/* FIN DESPACHO ASIGNADO */}

      {/* INICIO DELITO */}
      <section className='bg-background rounded-md px-3 py-1 border border-line grid gap-3 justify-between items-center divide-y divide-slate-300'>

        {

          dataDelitos.map((item, index) => (

            <section className='py-2' key={index}>

              <p className='label'>Delito</p>
              <p className='important pb-4'>
                {item.delito}
              </p>
              <span className='label block'>Grado del delito* <span className='important'>{item.grado}</span></span>
              <span className='label block'>Estado* <span className='important'>{item.estado}</span></span>
              <span className='label'>Referente?* <span className='important'>{item.referente}</span></span>

            </section>

          ))
        }

      </section>
      {/* FIN DELITO */}

      {/* INICIO ACTUACIONES */}
      <section className='rounded-md border border-line divide-y divide-slate-300'>

        <h2 className='bg-lable-gray title-table rounded-none border-none'>Actuaciones del caso - No reservadas</h2>
        <section className='grid grid-flow-col grid-cols-3 items-center'>

          <p className='col-span-1 text-right p-2 important'>Fecha actuación</p>
          <p className='col-span-2 p-2 important'>Nombre actuación</p>

        </section>

        {

          dataActuaciones.map((item, index) => (
            <section className='grid grid-flow-col grid-cols-3 items-center' key={index}>

              <p className='col-span-1 text-right p-2 important'>
                {item.fecha}
              </p>

              <p className='col-span-2 p-2 data'>
                {item.actuacion}
              </p>

            </section>

          ))
        }

      </section>
      {/* FIN ACTUACIONES */}

      {/* INICIO FECHA DE CONSULTA */}
      <section className='bg-blue label text-white grid grid-flow-col items-center place-content-between px-3 py-1 mb-4'>

        <section className='col-span-3 '>Fecha de consulta</section>
        <section className='col-span-3 text-right'>
          {
            jsonData?.EncabezadoRespuesta?.FechaRespuesta?._text
              ? jsonData?.EncabezadoRespuesta.FechaRespuesta._text
              : 'Ninguno'
          }
        </section>

      </section>
      {/* FIN FECHA DE CONSULTA */}

      <section className='grid grid-flow-col place-content-between'>

        <button type="button" className='btn-send' onClick={onBack}>Volver</button>
        <button type="button" className='btn-send' onClick={onPrint}>Imprimir</button>

      </section>


    </section>

  )
}
