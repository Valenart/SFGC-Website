import React from 'react';
import axios from 'axios';
import { Box, Grid, Card } from '@mui/material';
import bgNoticia from '../../../assets/Home/Noticias/BackgroundNoticias.jpg';
import { SectionType, Title, Text, CustomButton, CustomCard } from '../../../components/globalComponents/globalComponents.jsx';
import './homeComponents.css';
import { MAX_CONTENT_WIDTH } from '@/styles/layout.js';

/** REACT **/
import { useState, useEffect } from 'react';

const COLOR_PRIMARY = '#fff';
const COLOR_BG = '#263126';

export default function NoticiaSection() {

    const [posts, setposts] = useState([]);

    const getPosts = async () => {
        try {
            const response = await axios.get('https://sfgc-website-api.onrender.com/posts');
            const data = response.data.posts

            setposts(data);
        } catch (error) {
            console.error('Houve um erro ao trazer as postagens:', error);
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
                <Box container sx={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
                    {posts
                        .slice()
                        .sort((a, b) => b.id - a.id)
                        .slice(0, 3)
                        .map((post) => (
                            <Box item xs={12} md={4} key={post.id} sx={{ width: '400px' }}>
                                <CustomCard
                                    height={'400px'}
                                    photo={post.image_url}
                                    title={post.title}
                                    datePost={post.data_postagem}
                                    text={post.description}
                                    useChip={true}
                                    chipLabel={(post.user_id) == 1 ? 'Administrador SFGC' : ''}
                                ></CustomCard>
                            </Box>
                        ))}
                </Box>
            </Box >
        </Box >
    );
}
