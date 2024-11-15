import { useLocation } from 'react-router-dom'
import { getData } from '../helpers/getData';
import { useEffect, useState } from 'react';
import { InfoCases } from '../components/InfoCases';

export const PageResults = () => {

  const location = useLocation();
  const query = location.state?.query || ''

  const [jsonData, setJsonData] = useState([])

  useEffect(() => {

    const fetchData = async () => {

      setJsonData(await getData(query))

    }

    fetchData()

  }, [query])

  return (

    <InfoCases jsonData={jsonData} />

  )
}
