import { useEffect, useState } from "react"

export const useSplitDelitos = (stringData) => {

    const [arraySplit, setArraySplit] = useState([])

    useEffect(() => {

        const resArray = stringData.split('|').map(item => {

            const [delito, grado, estado, referente] = item.split('#')

            return { delito, grado, estado, referente }
        })
        setArraySplit(resArray)

    },[stringData])
    
        
    return arraySplit

}