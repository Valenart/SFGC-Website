import HistoriaSection from "./homeComponents/historia.jsx";
import LocationSection from "./homeComponents/location.jsx";
import ServicosSection from "./homeComponents/servicos.jsx";

export default function Home() {
    return (
        <>
            <LocationSection />
            <ServicosSection />
            <HistoriaSection />
        </>
    )
}
