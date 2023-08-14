const Footer = () => {
    return (
        <div className="w-full bg-gray-600 mt-40 p-20 absolute bottom-0">
            <div className="container mx-auto text-center text-white gap-3">
                <p className="text-xl">Síguenos en redes sociales:</p>
                <div className="flex text-3xl gap-4 my-3 justify-center" >
                    <i className="fa-brands fa-facebook hover:text-sky-300 hover:cursor-pointer hover:scale-[1.05] ease-in-out duration-300"></i>
                    <i className="fa-brands fa-instagram hover:text-sky-300 hover:cursor-pointer hover:scale-[1.05] ease-in-out duration-300"></i>
                    <i className="fa-brands fa-x-twitter hover:text-sky-300 hover:cursor-pointer hover:scale-[1.05] ease-in-out duration-300"></i>
                    <i className="fa-brands fa-linkedin hover:text-sky-300 hover:cursor-pointer hover:scale-[1.05] ease-in-out duration-300"></i>
                    <i className="fa-brands fa-youtube hover:text-sky-300 hover:cursor-pointer hover:scale-[1.05] ease-in-out duration-300"></i>
                </div>
                <p className="text-sm mt-12">©2023 Sipo.cl</p>
            </div>
        </div>
    )
}

export default Footer