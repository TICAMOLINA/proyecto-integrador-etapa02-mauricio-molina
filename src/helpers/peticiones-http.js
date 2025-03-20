
export const peticionesHttp = async (URL, options) => {

    try {

        const res = await fetch(URL,options)
        if(!res.ok) throw new Error(`No se pudo realizar la petición. Código: ${res.status}` )
        const data = await res.json()
        return data

    } catch (error) {
        console.error('[peticionesHttp]', error.message)
    }

}