/** CUSTOM COMPONENTS **/
import ContatoSection from "./homeComponents/contato.jsx";
import HistoriaSection from "./homeComponents/historia.jsx";
import LocationSection from "./homeComponents/location.jsx";
import ServicosSection from "./homeComponents/servicos.jsx";
import NoticiaSection from "./homeComponents/noticia.jsx";
import BackgroundDivider from "./homeComponents/backgroundDivider.jsx";

/** MUI **/
import { Grid } from "@mui/material";

export default function Home() {
    return (
        < Grid sx={{ width: '100%', margin: '0 auto', padding: '0', overflow: 'hidden' }} >
            <LocationSection />
            <BackgroundDivider />
            <ServicosSection />
            <HistoriaSection />
            <NoticiaSection />
            <ContatoSection />
        </Grid>
    )
}
