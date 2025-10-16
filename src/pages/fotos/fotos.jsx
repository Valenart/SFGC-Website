import { Title, SectionType } from '@/components/globalComponents/globalComponents.jsx';
import { Grid } from '@mui/material';

export default function Fotos() {
    return (
        <Grid sx={{ width: '80vw', margin: '0 auto', padding: '2rem 0' }}>
            <SectionType color='#B58017' paddingBlock={1}>FOTOS</SectionType>
            <Title color='primary'>FOTOS</Title>


        </Grid>
    )
}