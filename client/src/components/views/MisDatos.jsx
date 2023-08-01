const MisDatos = () => {
    return (
        <div className="container mx-auto">
            <form className="bg-white mx-6 my-8 p-8 xl:w-1/2 xl:mx-auto rounded-xl md:drop-shadow-md">
                <div className="flex flex-col">
                    <h2 className="text-center text-lg mb-6 font-medium">Mis Datos</h2>
                    <div className="flex flex-col xl:flex-row items-center justify-between mb-6">
                        <label htmlFor="name" className="hidden xl:block">Nombre</label>
                        <input type="text" id="name" placeholder="Nombre" className="border border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6" />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <label htmlFor="surname" className="hidden xl:block">Apellidos</label>
                        <input type="text" id="surname" placeholder="Apellidos" className="border border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6" />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <label htmlFor="email" className="hidden xl:block">Correo</label>
                        <input type="email" id="email" placeholder="Correo" className="border border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6" />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <label htmlFor="email" className="hidden xl:block mr-[-33px]">Nueva <br/> Contraseña</label>
                        <input type="password" id="email" placeholder="Nueva Contraseña" className="border border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6" />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <label htmlFor="image" className="hidden xl:block">Imagen</label>
                        <input type="text" id="image" placeholder="URL imagen" className="border border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6" />
                    </div>
                    <input type="submit" value="Guardar cambios" className="hover:cursor-pointer bg-green-400 hover:bg-green-600 font-medium rounded-xl text-white p-4"></input>
                </div>
            </form>
        </div>
    )
}

export default MisDatos