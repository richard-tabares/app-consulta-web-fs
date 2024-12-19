import { useCallback } from "react"
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { postVerifyRecaptcha } from "../helpers/postVerifyRecaptcha"

export const ReCaptcha = ({ setCaptchaActive }) => {
    
    const { executeRecaptcha } = useGoogleReCaptcha()

    const verifyReCaptcha = useCallback(async () => {

        if (!executeRecaptcha) {

            console.log('ReCaptcha no disponible')
            return

        }

        const token = await executeRecaptcha()
        const verifyToken = await postVerifyRecaptcha(token)
        verifyToken.success && setCaptchaActive(!!token)

    }, [executeRecaptcha, setCaptchaActive])

    const verifyHtml =
        <section className='bg-gray-200 border border-gray-300 w-fit p-4 grid items-center grid-flow-col place-content-start'>
            <input type='checkbox' id='captcha' className='mr-4 h-8 w-8' onClick={verifyReCaptcha} />
            <label className='text-gray-600'>Verificar reCaptcha</label>
        </section>

    return verifyHtml

}