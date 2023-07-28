import HeartIcon from "@/components/icons/HeartIcon"

const ProductCard = ({filled}) => {
    return (
        <div className="flex flex-col justify-between bg-white h-90 p-3 rounded-xl relative hover:cursor-pointer shadow-md">
            <div>
                <img className="rounded-xl xl:h-44 w-full" src="https://picsum.photos/seed/picsum/300/200" alt="img" />
                <HeartIcon className="w-6 absolute right-6 top-6" filled={filled} />
                <h3 className="text-lg font-medium my-2 mx-2">Nintendo Switch Oled</h3>
                <p className="text-sm mx-2 h-24">Nintendo Switch OLED + 4 juegos gratis elegibles + auriculares + mochila + 64 gb + 1 año de garantia.</p>
            </div>
            <div>
                <p className="text-xl font-extrabold mt-2 mx-2 bg-white text-sky-400">$179.990</p>
            </div>
        </div>

    )
}

export default ProductCard