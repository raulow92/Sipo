import SearchIcon from "@/components/icons/SearchIcon"
import CategoriesIcon from "@/components/icons/CategoriesIcon"
import DownIcon from "@/components/icons/DownIcon"
import LocationIcon from "@/components/icons/LocationIcon"

const Tienda = () => {
    return (
        <div className="container mx-auto mt-6">
            <div className="flex justify-center bg-white mx-auto w-fit p-6 rounded-xl shadow-md">
                <div className="flex items-center mr-4">
                    <SearchIcon className="absolute w-5 ml-5 pointer-events-none" color="#38bdf8" />
                    <input type="text" placeholder="Estoy buscando..." className="border border-gray-300 rounded-xl pl-14 h-12 pr-20"/>
                </div>
                <div className="relative flex items-center mr-4">
                    <CategoriesIcon className="absolute w-5 ml-5 pointer-events-none"/>
                    <select name="category" id="category" className="appearance-none border border-gray-300 rounded-xl pl-14 text-gray-600 h-12 pr-20">
                        <option value="" defaultChecked hidden>Categoría</option>
                        <option value="tecnologia">Tecnología</option>
                        <option value="tecnologia">Hogar</option>
                        <option value="tecnologia">Deportes</option>
                        <option value="tecnologia">Libros</option>
                        <option value="tecnologia">Mascotas</option>
                        <option value="tecnologia">Automotriz</option>
                        <option value="tecnologia">Juguetes</option>
                    </select>
                    <DownIcon className="absolute w-5 pointer-events-none right-0 mr-5"/>
                </div>
                <div className="relative flex items-center mr-4">
                    <LocationIcon className="absolute w-4 ml-5 pointer-events-none"/>
                    <select name="region" id="region" className="appearance-none border border-gray-300 rounded-xl pl-14 text-gray-600 h-12 pr-20">
                        <option value="chile">Todo Chile</option>
                        <option value="metropolitana">Metropolitana</option>
                        <option value="arica">Arica y Parinacota</option>
                        <option value="tarapaca">Tarapacá</option>
                        <option value="antofagasta">Antofagasta</option>
                        <option value="atacama">Atacama</option>
                        <option value="coquimbo">Coquimbo</option>
                        <option value="valparaiso">Valparaíso</option>
                        <option value="ohiggins">O&apos;Higgins</option>
                        <option value="maule">Maule</option>
                        <option value="nuble">Ñuble</option>
                        <option value="biobio">Biobío</option>
                        <option value="araucania">Araucanía</option>
                        <option value="losrios">Los Ríos</option>
                        <option value="loslagos">Los Lagos</option>
                        <option value="aysen">Aysén</option>
                        <option value="magallanes">Magallanes y Antártica</option>
                    </select>
                    <DownIcon className="absolute w-5 pointer-events-none right-0 mr-5"/>
                </div>
                <div className="relative flex items-center mr-4">
                    <SearchIcon color="white" className="absolute w-5 ml-6 pointer-events-none"/>
                    <button className="bg-sky-400 hover:bg-sky-500 text-white font-medium px-5 py-3 rounded-xl pl-14 pr-8">
                    Buscar
                    </button>
                </div>
            </div>
        
        
        </div>
    )
}

export default Tienda
