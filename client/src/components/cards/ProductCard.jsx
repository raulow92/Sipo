import HeartIcon from "@/components/icons/HeartIcon"
import { useNavigate } from "react-router-dom"

const priceFormat = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
});

const ProductCard = ({id, img, titulo, descripcion, precio, filled}) => {
    const navigate = useNavigate()

    const handleClick = (e) => {
        navigate(`/product/${e.currentTarget.id}`)
    }

    return (
        <div className="flex flex-col justify-between bg-white h-90 p-3 rounded-xl relative hover:cursor-pointer shadow-md" id={id} onClick={handleClick}> 
            <div>
                <img className="rounded-xl xl:h-44 w-full" src={img} alt="img" />
                <HeartIcon className="w-6 absolute right-6 top-6" filled={filled} />
                <h3 className="text-lg font-medium my-2 mx-2">{titulo}</h3>
                <p className="text-sm mx-2 h-24">{descripcion}</p>
            </div>
            <div>
                <p className="text-xl font-extrabold mt-2 mx-2 bg-white text-sky-400">{priceFormat.format(precio)}</p>
            </div>
        </div>

    )
}

export default ProductCard