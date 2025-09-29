import ContatoSection from "./homeComponents/contato.jsx";
import HistoriaSection from "./homeComponents/historia.jsx";
import LocationSection from "./homeComponents/location.jsx";
import ServicosSection from "./homeComponents/servicos.jsx";
import NoticiaSection from "./homeComponents/noticia.jsx";

export default function Home() {
    return (
        <>
            <LocationSection />
            <ServicosSection />
            <HistoriaSection />
            <NoticiaSection />
            <ContatoSection />
        </>
    )
}
