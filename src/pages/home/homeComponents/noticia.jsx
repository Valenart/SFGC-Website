import React from 'react';
import { Box, Grid, Card } from '@mui/material';
import bgNoticia from '../../../assets/home/noticias/backgroundNoticias.jpg';
import { SectionType, Title, Text, CustomButton, CustomCard } from '../../../components/globalComponents/globalComponents';
import './homeComponents.css';
import { MAX_CONTENT_WIDTH } from '/src/styles/layout.js';

/** SWIPER **/
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const COLOR_PRIMARY = '#fff';
const COLOR_BG = '#263126';

export default function NoticiaSection() {
    return (
        <Box id="NoticiaSection"

            sx={{
                width: '100vw',
                backgroundImage: `url(${bgNoticia})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                py: { xs: 4, md: 8 },
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: MAX_CONTENT_WIDTH, alignItems: 'center', mx: 'auto', gap: 2 }}>
                <Box sx={{ display: 'flex', textAlign: 'center', flexDirection: 'column', width: '100%', gap: 2 }}>
                    <SectionType color={COLOR_PRIMARY} fontFamily="inherit" fontSize="1rem">
                        NOTÍCIAS
                    </SectionType>
                    <Title color="#fff" fontFamily="inherit" fontSize="2.2rem">
                        TORNEIOS E ATUALIZAÇÕES
                    </Title>
                    <Text color="#fff" fontFamily="inherit">
                        Confira as novidades e os eventos recentes do clube. Fique atento às atualizações.
                    </Text>
                </Box>

                <Box sx={{ display: 'flex', width: '100%', maxWidth: MAX_CONTENT_WIDTH, mx: 0, '--swiper-theme-color': '#B58017', '--swiper-navigation-color': '#B58017', '--swiper-pagination-color': '#B58017' }}>
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        pagination={{ clickable: true }}
                        navigation={{ clickable: true }}
                        loop={true}
                        autoplay={{ delay: 4200, disableOnInteraction: true, pauseOnMouseEnter: true }}
                        breakpoints={{
                            0: { slidesPerView: 1, centeredSlides: false },
                            800: { slidesPerView: 2, centeredSlides: false },
                            1200: { slidesPerView: 3, centeredSlides: false },
                        }}
                    >
                        {[1, 2, 3].map((i) => (
                            <SwiperSlide key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Box sx={{ paddingInline: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Box sx={{ width: '280px' }}>
                                        <CustomCard
                                            photo={bgNoticia}
                                            descriptionImage={`noticia-${i}`}
                                            title={`Titulo da Notícia ${i}`.toUpperCase()}
                                            datePost={'September 17, 2020'}
                                            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.'}
                                        />
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box >
            </Box >
        </Box >
    );
}
