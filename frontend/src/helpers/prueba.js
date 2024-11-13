const convert = require('xml-js');
const xmlData = `
<book>
    <title>The Great Gatsby</title>
    <author>F. Scott Fitzgerald</author>
    <genre>Fiction</genre>
</book>
`;

const jsonResult = convert.xml2json(xmlData, {
    compact: true,
    spaces: 2
});
console.log(jsonResult);