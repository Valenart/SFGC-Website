/** LIBS **/
import React from 'react';

/** MUI **/
import { Box, Grid } from '@mui/material';

/** ICONS **/
import StarIcon from '@mui/icons-material/Star';

/** SWIPER **/
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

/** CUSTOM COMPONENTS **/
import { SectionType, Title, Text, CustomCard } from '../../../components/globalComponents/globalComponents';

/** TOKENS **/
import { MAX_CONTENT_WIDTH } from '/src/styles/layout.js';

/** ASSETS **/
import AulasImg from '/src/assets/home/servicos/aulas.jpg';
import GolfBagImg from '/src/assets/home/servicos/golfBag.jpg';
import GolfCartImg from '/src/assets/home/servicos/golfCart.jpg';
import GolfBag from '/src/assets/home/servicos/golfBag.svg';

/** STYLES **/
import './homeComponents.css';

// Paleta de cores centralizada
const COLOR_PRIMARY = '#B58017';
const COLOR_DARK = '#20491A';
const COLOR_BG = '#f8f6ec';

const SLIDES = [
    { src: AulasImg, title: 'Aulas', desc: 'Acompanhamento de profissionais para todos os níveis.' },
    { src: GolfBagImg, title: 'Aluguel de Tacos', desc: 'Tacos de alta qualidade disponíveis para empréstimo.' },
    { src: GolfCartImg, title: 'Carrinhos', desc: 'Carrinhos elétricos para maior conforto no campo.' },
];

export default function ServicosSection() {
    return (

        <Box id="ServicosSection" sx={{ py: { xs: 4, md: 16 }, px: 0 }}>
            <Grid container sx={{ display: "flex", alignItems: { xs: "center", md: "flex-start" }, justifyContent: "center", maxWidth: MAX_CONTENT_WIDTH, mx: 'auto', gap: 8 }}>
                <Grid item xs={12} md={5}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: { xs: 'center', md: 'flex-start' }, flexDirection: 'column', gap: 2 }}>

                        <SectionType color={COLOR_PRIMARY} fontFamily="inherit" fontSize="1rem">
                            SERVIÇOS
                        </SectionType>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                            <Title color={COLOR_DARK} fontFamily="inherit"  >
                                SERVIÇOS PARA SUA<br />MELHOR EXPERIÊNCIA
                            </Title>
                        </Box>
                        <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem">
                            Oferecemos aluguel de <span style={{ color: COLOR_PRIMARY }}>tacos</span>, <span style={{ color: COLOR_PRIMARY }}>carrinhos</span> e acessórios de <span style={{ color: COLOR_PRIMARY }}>alta qualidade</span> para a sua comodidade. Para quem deseja aprimorar as suas habilidades, contamos com aulas ministradas por profissionais experientes e um driving Range dedicado à prática.
                        </Text>
                        <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem">
                            Após a partida, <span style={{ color: COLOR_PRIMARY }}>aproveite nossa lanchonete e restaurante</span>, que disponibilizam um selecionado em horários programados, proporcionando mais conforto e praticidade durante sua estadia no campo.
                        </Text>
                    </Box>
                </Grid>

                {/* Imagens/Slider */}
                <Grid item xs={12} md={5}>
                    <Box sx={{ height: 'auto', '--swiper-theme-color': COLOR_PRIMARY, '--swiper-navigation-color': COLOR_PRIMARY, '--swiper-pagination-color': COLOR_PRIMARY }}>
                        <Swiper
                            modules={[Pagination, Autoplay, Navigation]}
                            spaceBetween={16}
                            pagination={{ clickable: true }}
                            navigation={true}
                            keyboard={{ enabled: true }}
                            loop={true}
                            autoplay={{ delay: 3500, disableOnInteraction: true, pauseOnMouseEnter: true }}
                            // small screens: use 'auto' + centeredSlides so single slide appears centered and sized
                            breakpoints={{
                                0: { slidesPerView: 1, centeredSlides: false },
                                650: { slidesPerView: 2, centeredSlides: false },
                                900: { slidesPerView: 1, centeredSlides: false },
                                1300: { slidesPerView: 2, centeredSlides: false },
                            }}
                        >
                            {SLIDES.map((slide, i) => (
                                <SwiperSlide key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ padding: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: 360, sm: 360, md: 360 } }}>
                                        <CustomCard height={'340px'}
                                            photo={slide.src}
                                            title={slide.title.toUpperCase()}
                                            text={slide.desc}
                                        />
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
