import { useNavigate } from 'react-router-dom'

const AddedProduct = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/vender')
    }

    return (
        <div className="container p-8 mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 my-6 text-center w-full">
                <h2 className="font-bold text-2xl text-sky-400">Artículo publicado con éxito</h2>
            </div>
            <div className="flex justify-center">
                <button onClick={handleClick} className="font-medium bg-green-400 px-6 py-3 rounded-lg text-white">Publicar otro producto</button>
            </div>
        </div>
    )
}

export default AddedProduct