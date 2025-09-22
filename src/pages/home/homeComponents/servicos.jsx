import React from 'react';
import { Box, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { SectionType, Title, Text, CustomButton } from '../../../components/globalComponents/globalcomponents';

// Paleta de cores centralizada
const COLOR_PRIMARY = '#B58017';
const COLOR_DARK = '#20491A';
const COLOR_BG = '#f8f6ec';

export default function ServicosSection() {
    return (

        <Box sx={{ py: { xs: 4, md: 8 }, px: { xs: 0, md: 0 } }}>
            <Grid container spacing={4} alignItems="flex-start" justifyContent="center" sx={{ maxWidth: 1400, mx: 'auto' }}>
                {/* Texto */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
                        <SectionType color={COLOR_PRIMARY} fontFamily="inherit" fontSize="1rem">
                            SERVIÇOS
                        </SectionType>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                            <Title color={COLOR_DARK} fontFamily="inherit" fontSize="2.2rem">
                                SERVIÇOS PARA SUA<br />MELHOR EXPERIÊNCIA
                            </Title>
                            {/* <Stack direction="row" spacing={0.5} sx={{ mb: 1 }}>
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <StarIcon key={i} sx={{ color: i <= 4 ? COLOR_PRIMARY : '#e5d7b3', fontSize: 32 }} />
                                ))}
                            </Stack> */}
                        </Box>
                        <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem">
                            Oferecemos aluguel de <span style={{ color: COLOR_PRIMARY, fontWeight: 600 }}>tacos</span>, <span style={{ color: COLOR_PRIMARY, fontWeight: 600 }}>carrinhos</span> e acessórios de <span style={{ color: COLOR_PRIMARY, fontWeight: 600 }}>alta qualidade</span> para a sua comodidade. Para quem deseja aprimorar as suas habilidades, contamos com aulas ministradas por profissionais experientes e um driving Range dedicado à prática.
                        </Text>
                        <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem">
                            Após a partida, <span style={{ color: COLOR_PRIMARY, fontWeight: 600 }}>aproveite nossa lanchonete e restaurante</span>, que disponibilizam um selecionado em horários programados, proporcionando mais conforto e praticidade durante sua estadia no campo.
                        </Text>
                        <CustomButton
                            backgroundColor={COLOR_PRIMARY}
                            fontFamily="inherit"
                            fontSize="1rem"
                            padding="10px 24px"
                            sx={{ color: '#fff', width: 'fit-content', borderRadius: 0, mt: 1, fontWeight: 700, boxShadow: 'none', '&:hover': { backgroundColor: '#a06e13' } }}
                        >
                            MAIS INFORMAÇÕES
                        </CustomButton>
                    </Box>
                </Grid>

                {/* Imagens/Slider */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ height: 220 }}>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={16}
                            slidesPerView={2}
                            pagination={{ clickable: true }}
                            style={{ height: 180 }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                600: { slidesPerView: 2 },
                            }}
                        >
                            {[1, 2, 3].map((i) => (
                                <SwiperSlide key={i}>
                                    <Box sx={{ height: 180, bgcolor: '#bdbdbd', border: `4px solid ${COLOR_PRIMARY}` }} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
