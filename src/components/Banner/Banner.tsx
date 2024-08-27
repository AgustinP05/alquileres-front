import { FloatedSearch } from "../FloatedSearch";

export function Banner() {
    return (
        <div className="container relative mx-auto">
            <div className="pt-20 md:pt-0 min-h-[80vh] bg-banner bg-no-repeat bg-cover bg-center rounded-3xl relative flex flex-col items-center md:justify-center">
                <div className="max-w-3xl text-center text-white">
                    <h2 className="text-5xl font-semibold">Las vacaciones ideales en las cabañas mas bonitas</h2>
                    <p className="mt-2 text-xl md:mt-8">Con mas de 10 cabañas para que puedas elegir a lo largo de Buenos Aires</p>
                </div>
                <FloatedSearch></FloatedSearch>
            </div>
        </div>
    )
}
