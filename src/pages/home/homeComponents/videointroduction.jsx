import { Box } from "@mui/material";
import { Title } from "../../../components/globalComponents/globalComponents.jsx";
import videoIntro from "../../../assets/home/videoIntroduction/videoTitlestIntro.mp4";

export default function VideoIntroduction() {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100vw",
                height: "60vw",
                maxHeight: "800px",
                overflow: "hidden",
            }}
        >
            <Box
                component="video"
                src={videoIntro}
                autoPlay
                loop
                muted
                playsInline
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    zIndex: 0,
                    filter: "brightness(0.5)",
                }}
            />

            {/* overlay: cobre exatamente o contêiner do vídeo */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0, // top:0; right:0; bottom:0; left:0
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1,
                    color: 'white',
                    textAlign: 'center',
                    pointerEvents: 'none'
                }}
            >
                <Box sx={{ width: '80vw', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', pointerEvents: 'auto' }}>
                    <Title fontSize='4rem'>
                        VIVA A TRANQUILIDADE DE JOGAR GOLF EM SÃO PAULO
                    </Title>
                </Box>
            </Box>
        </Box>
    );
}
