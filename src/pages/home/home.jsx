import ContatoSection from "./homeComponents/contato.jsx";
import HistoriaSection from "./homeComponents/historia.jsx";
import LocationSection from "./homeComponents/location.jsx";
import ServicosSection from "./homeComponents/servicos.jsx";
import NoticiaSection from "./homeComponents/noticia.jsx";
import BackgroundDivider from "./homeComponents/backgroundDivider.jsx";

import { Box } from "@mui/material";

export default function Home() {
    return (
        <>

            <LocationSection />
            <BackgroundDivider />
            <ServicosSection />
            <HistoriaSection />
            <NoticiaSection />
            <ContatoSection />
        </>
    )
}
