import LogoSipo from "@/assets/img/logo.svg";

const WelcomeMain = () => {
    return (
        <main className="container mx-auto grid grid-cols-1 xl:grid-cols-2 md:items-center px-6 py-6 md:px-24 md:py-20">
            <section className="hidden xl:flex flex-col mx-auto md:pl-12">
                <img src={LogoSipo} alt="Logo Sipo" className="mx-auto w-52 md:w-72 md:mx-0"/>
                <h2 className="md:text-lg font-medium text-center pt-4 pb-4 md:text-left">
                    Sipo te ayuda a encontrar ese producto que necesitas y a vender eso que ya no utilizas.
                </h2>
            </section>
            <section className="xl:mx-full xl:ml-12 2xl:ml-24 2xl:mr-12">
                <form className="bg-white p-8 w-auto text-lg rounded-xl md:drop-shadow-md">
                    <div className="flex flex-col">
                        <input type="text" id="name" placeholder="Nombre" className="border border-gray-300 rounded-xl p-4 pl-6" />
                        <input type="text" id="last-name" placeholder="Apellidos" className="border border-gray-300 rounded-xl p-4 pl-6 mt-5" />
                        <input type="email" id="email" placeholder="Correo electrónico" className="border border-gray-300 rounded-xl p-4 pl-6 mt-5" />
                        <input type="password" id="password" placeholder="Contraseña nueva" className="border border-gray-300 rounded-xl p-4 pl-6 mt-5" />
                        <input type="submit" value="Regístrate" className="hover:cursor-pointer bg-green-400 font-medium rounded-xl text-white p-4 mt-5"></input>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default WelcomeMain;