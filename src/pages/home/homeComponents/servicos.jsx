import React from 'react';
import { Box, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { SectionType, Title, Text, CustomButton } from '../../../components/globalComponents/globalcomponents';
import { MAX_CONTENT_WIDTH } from '/src/styles/layout.js';
import AulasImg from '/src/assets/Home/Servicos/Aulas.jpg';
import GolfBagImg from '/src/assets/Home/Servicos/GolfBag.jpg';
import GolfCartImg from '/src/assets/Home/Servicos/GolfCart.jpg';
import './homeComponents.css';

// Paleta de cores centralizada
const COLOR_PRIMARY = '#B58017';
const COLOR_DARK = '#20491A';
const COLOR_BG = '#f8f6ec';

export default function ServicosSection() {
    return (

        <Box id="ServicosSection" sx={{ py: { xs: 4, md: 8 }, px: 0 }}>
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

                        <Box sx={{ marginBottom: 1 }}>
                            <CustomButton
                                backgroundColor={COLOR_PRIMARY}
                                fontFamily="inherit"
                                fontSize="1rem"
                                padding="10px 24px"
                                sx={{ color: '#fff', width: 'fit-content', borderRadius: 0, fontWeight: 700, boxShadow: 'none', '&:hover': { backgroundColor: '#a06e13' } }}
                            >
                                MAIS INFORMAÇÕES
                            </CustomButton>
                        </Box>
                    </Box>
                </Grid>

                {/* Imagens/Slider */}
                <Grid item xs={12} md={5}>
                    <Box sx={{ height: 'auto' }}>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={16}
                            slidesPerView={2}
                            pagination={{ clickable: true }}
                            onNavigationShow={true}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                650: { slidesPerView: 2 },
                            }}
                        >
                            {[AulasImg, GolfBagImg, GolfCartImg].map((src, i) => (
                                <SwiperSlide key={i}>
                                    <Box sx={{ padding: "6px" }}>
                                        <Box
                                            component="img"
                                            src={src}
                                            alt={`Serviço ${i + 1}`}
                                            sx={{ width: '100%', height: 300, objectFit: 'cover', display: 'block', border: `4px solid ${COLOR_PRIMARY}` }}
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
