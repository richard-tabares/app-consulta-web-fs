import { xml2json } from 'xml-js';

export const getData = async (query) => {

    const response = await fetch(`http://localhost:3000/data/${query}`)
    // const response = await fetch(`http://localhost:3000/data/${query}`)
    const data = await response.text();

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "text/xml");

    const result = xmlDoc.getElementsByTagName("return")[0].textContent;

    const resultXml = xml2json(result, { compact: true, spaces: 2 });
    const jsonData = JSON.parse(resultXml)

    const xml = Object.values(jsonData);

    return xml;

}
