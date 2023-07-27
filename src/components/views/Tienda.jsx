import SearchIcon from "@/components/icons/SearchIcon"
import CategoriesIcon from "@/components/icons/CategoriesIcon"

const Tienda = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center bg-white mx-auto w-fit p-6 rounded-xl shadow-md">
                <div className="flex items-center mr-4">
                    <SearchIcon className="absolute w-5 ml-5"/>
                    <input type="text" placeholder="Estoy buscando..." className="border border-gray-300 rounded-xl pl-14 h-12" />
                </div>
                <div className="flex items-center">
                    <CategoriesIcon className="absolute w-5 ml-5"/>
                    <select name="category" id="category" className="appearance-none border border-gray-300 rounded-xl pl-14 text-gray-600 h-12 pr-5">
                        <option value="" disabled selected hidden>Categoría</option>
                        <option value="tecnologia">Tecnología</option>
                        <option value="tecnologia">Hogar</option>
                        <option value="tecnologia">Deportes</option>
                        <option value="tecnologia">Libros</option>
                        <option value="tecnologia">Mascotas</option>
                        <option value="tecnologia">Automotriz</option>
                        <option value="tecnologia">Juguetes</option>
                    </select>
                </div>
                <select name="region" id="region">
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
                <button>
                    Buscar
                </button>
            </div>
        
        
        </div>
    )
}

export default Tienda
