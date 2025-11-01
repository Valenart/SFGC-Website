import React from 'react';
import axios from 'axios';
import { Box, Dialog } from '@mui/material';
import bgNoticia from '../../../assets/Home/Noticias/BackgroundNoticias.jpg';
import { SectionType, Title, Text, CustomCard } from '../../../components/globalComponents/globalComponents.jsx';
import './homeComponents.css';
import CircularProgress from '@mui/material/CircularProgress';
import { MAX_CONTENT_WIDTH } from '@/styles/layout.js';

/** REACT **/
import { useState, useEffect } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const COLOR_PRIMARY = '#fff';

export default function NoticiaSection() {

    const [posts, setposts] = useState([]);
    const [isData, setIsData] = useState(true);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [NumberPostid, setNumberPostid] = useState(0);

    const getPosts = async () => {
        try {
            const response = await axios.get('https://sfgc-website-api.onrender.com/posts');
            const data = response.data.posts
            setposts(data);
        } catch (error) {
            console.error('Houve um erro ao trazer as postagens:', error);
            setposts([]);
            setIsData(false);
            return [];
        }
    }

    const formatarTempo = (tempo) => {
        const date = new Date(tempo);
        if (isNaN(date.getTime())) return '';
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });
    }

    const handlePostsClick = (postId) => {
        const index = posts.findIndex(p => p.id === postId);
        if (index === -1) {
            console.error("Post não encontrado para o ID:", postId);
            return;
        }
        setNumberPostid(index);
        setDialogOpen(true);
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
                {posts && posts.length > 0 ? (
                    <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth maxWidth="md">
                        <Box sx={{ width: '100%', p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CustomCard
                                height={"auto"}
                                photo={posts[NumberPostid].image_url}
                                descriptionImage={posts[NumberPostid].image_alt ?? ""}
                                title={(posts[NumberPostid].title).toUpperCase()}
                                datePost={formatarTempo(posts[NumberPostid].data_postagem)}
                                text={posts[NumberPostid].description}
                                textSx={{
                                    whiteSpace: 'pre-line',
                                    wordBreak: 'break-word',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.6,
                                    maxHeight: 'none',
                                    WebkitLineClamp: 'unset',
                                    display: 'block',
                                }}
                                cardSx={{ width: '100%', maxWidth: 600, minHeight: 300, boxShadow: 3, background: '#fff' }}
                            />
                        </Box>
                    </Dialog>
                ) : ''}

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: MAX_CONTENT_WIDTH, mx: 0, '--swiper-theme-color': '#B58017', '--swiper-navigation-color': '#B58017', '--swiper-pagination-color': '#B58017' }}>
                    {isData ? (<Swiper
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
                        {posts && posts.length > 0 ? posts
                            .slice()
                            .sort((a, b) => b.id - a.id)
                            .slice(0, 3)
                            .map((post, id) => (
                                <SwiperSlide key={post.id ?? id} style={{ display: 'flex', justifyContent: 'center', }} onClick={() => handlePostsClick(post.id)}>
                                    <Box sx={{ paddingInline: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Box sx={{ width: '280px', height: '400px', overflow: 'hidden', cursor: 'pointer', }}>
                                            <CustomCard
                                                photo={post.image_url}
                                                descriptionImage={post.image_alt ?? ""}
                                                title={(post.title || '').toUpperCase()}
                                                datePost={formatarTempo(post.data_postagem)}
                                                text={post.description}
                                                textSx={{
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 5,
                                                    WebkitBoxOrient: 'vertical',
                                                    whiteSpace: 'normal',
                                                    minHeight: '3.6em'
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            )) : (
                            <Box sx={{ display: 'flex', paddingBlock: 4 }}>
                                <CircularProgress />
                            </Box>
                        )}
                    </Swiper>) : (<SectionType color={'#fff'} paddingBlock={'10px'}>NENHUMA NOTÍCIA ENCONTRADA</SectionType>)}
                </Box >
            </Box >
        </Box >
    );
}
