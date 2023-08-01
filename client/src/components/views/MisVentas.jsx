import ProductCard from "@/components/cards/ProductCard";

const MisVentas = () => {
    return (
        <div className="container mx-auto mt-6">
            <h2 className="text-center font-medium text-2xl mb-8">Mis Ventas</h2>
            <div className="mx-6 lg:mx-16 mt-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <ProductCard />
            </div>
        </div>
    )
}

export default MisVentas