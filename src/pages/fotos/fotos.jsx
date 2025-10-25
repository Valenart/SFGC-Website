import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Title, SectionType } from '@/components/globalComponents/globalComponents.jsx';
import { Grid } from '@mui/material';
import { ImageList, ImageListItem } from '@mui/material';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function Fotos() {

    const COLOR_DARK = '#20491A';

    const [photos, setPhotos] = useState([]);
    const [isData, setIsData] = useState(true);

    const getPhotos = async () => {
        try {
            const response = await axios.get('https://sfgc-website-api.onrender.com/photos');
            const data = response.data;
            console.log(data);
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
        <Grid sx={{ width: '80vw', margin: '0 auto', padding: '2rem 0' }}>
            <SectionType color='#B58017' paddingBlock={1}>FOTOS</SectionType>
            <Title color='primary'>FOTOS</Title>

            {isData ? <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {photos ? photos.map(photo => (
                    <ImageListItem key={photo.id}>
                        <Box
                            component="img"
                            src={photo.img}
                            alt=''
                        />
                    </ImageListItem>
                )) : (
                    (<Box sx={{ display: 'flex', paddingBlock: 4 }}>
                        <CircularProgress />
                    </Box>)
                )}
            </ImageList> :
                (<SectionType color={COLOR_DARK} paddingBlock={'10px'}>NENHUMA FOTO ENCONTRADA</SectionType>)
            }
        </Grid>
    )
}