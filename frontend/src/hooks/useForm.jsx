import { useState } from "react"

export const useForm = (initialQuery = {}) => {

    const [state, setState] = useState(initialQuery)

    const onInputChange = ({ target }) => {

        const { name, value } = target
        setState({
            ...state,
            [name]: value
        })
    }

    const onResetForm = () => {
        
        setState(initialQuery)
    }
    return {
        ...state,
        state,
        onInputChange,
        onResetForm
    }
}
