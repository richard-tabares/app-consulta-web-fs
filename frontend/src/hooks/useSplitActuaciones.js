import { useEffect, useState } from "react"

export const useSplitActuaciones = (stringData) => {

    const [arraySplit, setArraySplit] = useState([])

    useEffect(() => {

        const resArray = stringData.split('|').map(item => {

            const [fecha, actuacion] = item.split('#')

            return { fecha, actuacion }
        })
        setArraySplit(resArray)

    },[stringData])
    
        
    return arraySplit

}