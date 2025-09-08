import { useState } from "react"

const useForm = (initial = {}) => {
    const [data, setData] = useState(initial)

    const handleChange = (e) => {
        const {value, name} = e.target

        setData({
            ...data, 
            [name]: value
        })

    }

    const reset = () => {
        setData(initial)
    }

    return {data, handleChange, reset}
}

export default useForm