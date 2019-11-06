import {useEffect} from "react"
import {useLocalStorage} from "./useLocalStorage"

export const useDarkMode = ()=> {
    const [useDark, setUseDark] = useLocalStorage(false)

    useEffect(()=> {
        const body = document.querySelector('body')
        useDark ?  body.classList.add('dark-mode') : body.classList.remove('dark-mode')
    }, [useDark])

    return [useDark, setUseDark]
}