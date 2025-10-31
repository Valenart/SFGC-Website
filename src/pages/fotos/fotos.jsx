import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Title, SectionType, Text } from '@/components/globalComponents/globalComponents.jsx';
import { Grid } from '@mui/material';
import { ImageList, ImageListItem } from '@mui/material';
import { Box } from '@mui/material';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import CircularProgress from '@mui/material/CircularProgress';

export default function Fotos() {
    const COLOR_PRIMARY = '#B58017';
    const COLOR_DARK = '#20491A';

    const [photos, setPhotos] = useState([]);
    const [isData, setIsData] = useState(true);

    const getPhotos = async () => {
        try {
            const response = await axios.get('https://sfgc-website-api.onrender.com/photos');
            const data = response.data.photos;
            setPhotos(data);
        } catch (erros) {
            setIsData(false);
            console.error('Houve um erro ao trazer as fotos:', erros);
        }
    }

    useEffect(() => {
        getPhotos();
    }, [])


    return (
        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '80vw', margin: '0 auto', padding: '2rem 0' }}>
            <SectionType color='#B58017' paddingBlock={1}>FOTOS</SectionType>
            <Title color='primary'>GALERIA DE FOTOS DO CLUBE</Title>
            <Text color="#20491A" fontSize="1.1rem" fontWeight={400} padding={1} textAlign={'center'}>
                Explore nossa galeria de fotos e confira registros especiais do São Francisco Golf Club. Clique em qualquer imagem para ampliar e visualizar em detalhes.
            </Text>

            {isData ? (
                <PhotoProvider>
                    <ImageList cols={3} >
                        {photos ? photos.map(photo => (
                            <ImageListItem key={photo.id} >
                                <PhotoView src={photo.image_url}>
                                    <Box
                                        component="img"
                                        src={photo.image_url}
                                        alt={`${photo.id}, Foto do São Francisco Golf Club`}
                                        sx={{
                                            width: { xs: '100%', sm: 220, md: 300, lg: 400 },
                                            height: { xs: 120, sm: 160, md: 200, lg: 260 },
                                            maxWidth: '100%',
                                            maxHeight: 300,
                                            objectFit: 'cover',
                                            borderRadius: 2,
                                            boxShadow: 2,
                                            display: 'block',
                                            margin: '0 auto',
                                        }}
                                    />
                                </PhotoView>
                            </ImageListItem>
                        )) : (
                            (<Box sx={{ display: 'flex', paddingBlock: 4 }}>
                                <CircularProgress color={COLOR_PRIMARY} />
                            </Box>)
                        )}
                    </ImageList>
                </PhotoProvider>
            ) :
                (<SectionType color={COLOR_DARK} paddingBlock={'10px'}>NENHUMA FOTO ENCONTRADA</SectionType>)
            }
        </Grid>
    )
}