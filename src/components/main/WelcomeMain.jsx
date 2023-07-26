import LogoSipo from "@/assets/img/logo.svg";
import HeroImage from "@/assets/img/hero.svg";

const WelcomeMain = () => {
    return (
        <main className="flex container mx-auto bg-slate-600 h-screen">
            <section className="flex flex-col">
                <img src={LogoSipo} alt="Logo Sipo" className="w-72"/>
                <h2>
                    Sipo te ayuda a encontrar ese producto que necesitas y a
                    vender eso que ya no utilizas.
                </h2>
            </section>
            <section>
                <img src={HeroImage} alt="Hero image" className="w-1/2" />
            </section>
        </main>
    );
};

export default WelcomeMain;