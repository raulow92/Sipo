import LogoSipo from "@/assets/img/logo.svg";
import HeroImage from "@/assets/img/hero.svg";

const WelcomeMain = () => {
    return (
        <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:items-center px-12 py-6 md:px-24 md:py-20">
            <section className="flex flex-col mx-auto md:pl-12">
                <img src={LogoSipo} alt="Logo Sipo" className="mx-auto w-52 md:w-72 md:mx-0"/>
                <h2 className="md:text-lg font-medium text-center pt-4 pb-4 md:text-left">
                    Sipo te ayuda a encontrar ese producto que necesitas y a vender eso que ya no utilizas.
                </h2>
            </section>
            <section>
                <img src={HeroImage} alt="Hero image" className="md:w-4/5 mx-auto" />
            </section>
        </main>
    );
};

export default WelcomeMain;