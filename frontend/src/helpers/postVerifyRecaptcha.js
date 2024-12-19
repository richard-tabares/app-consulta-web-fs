
export const postVerifyRecaptcha = async ( token ) => {

    const url = import.meta.env.VITE_URL_RECAPTCHA

    const response = await fetch(`${ url }${token}`)

    return response.json()

}
