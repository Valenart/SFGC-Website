import React from 'react';
import axios from 'axios';
import { Box, Grid, Card } from '@mui/material';
import bgNoticia from '../../../assets/Home/Noticias/BackgroundNoticias.jpg';
import { SectionType, Title, Text, CustomButton, CustomCard } from '../../../components/globalComponents/globalComponents.jsx';
import './homeComponents.css';
import { MAX_CONTENT_WIDTH } from '@/styles/layout.js';

/*CONTROLLER*/
import { HomeController } from '../../../controller/home/home.js';

/** SWIPER **/
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

/** REACT **/
import { useState, useEffect } from 'react';

const COLOR_PRIMARY = '#fff';
const COLOR_BG = '#263126';

export default function NoticiaSection() {

    const [posts, setposts] = useState([]);


    const getPosts = async () => {
        try {
            const response = await axios.get('https://sfgc-website-api.onrender.com/posts');
            const data = response.data.posts;
            const dataArray = Object.entries(data);
            setposts(dataArray);
            return dataArray;
        } catch (error) {
            console.error('Failed to fetch posts:', error);
            setposts([]);
            return [];
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

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

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: MAX_CONTENT_WIDTH, mx: 0, '--swiper-theme-color': '#B58017', '--swiper-navigation-color': '#B58017', '--swiper-pagination-color': '#B58017' }}>
                    {posts ? (<Swiper
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
                        {posts && posts.length > 0 ? posts.map((post, id) => (
                            <SwiperSlide key={post.id ?? id} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Box sx={{ paddingInline: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Box sx={{ width: '280px' }}>
                                        <CustomCard
                                            photo={post.image_url}
                                            descriptionImage={post.image_alt ?? ""}
                                            title={(post.title || '').toUpperCase()}
                                            datePost={post.dataPostagem}
                                            text={post.description}
                                        />
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        )) : (
                            ''
                        )}
                    </Swiper>) : (<SectionType color={'#fff'} paddingBlock={'10px'}>NENHUMA NOTÍCIA ENCONTRADA</SectionType>)}
                </Box >
            </Box >
        </Box >
    );
}
