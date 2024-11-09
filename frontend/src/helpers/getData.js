
export const getData = async (query) => {
    console.log(query)

    const response = await fetch(`http://localhost:5173/data/${query}`)
    const data = await response.text();
    console.log(data)
    return data;

}
