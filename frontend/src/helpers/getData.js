import { xml2json } from 'xml-js';

export const getData = async ( query ) => {

    const url = import.meta.env.VITE_URL

    const response = await fetch(`${ url }${query}`)
    const data = await response.text();

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "text/xml");

    const result = xmlDoc.getElementsByTagName("return")[0].textContent;

    const resultXml = xml2json(result, { compact: true, spaces: 2 });
    const resultJson = JSON.parse(resultXml)
    const jsonData = resultJson.RespuestaConsulta

    return jsonData;

}
