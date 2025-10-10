import React from 'react';
import { Box, Grid } from '@mui/material';
import { SectionType, Title, Text, CustomButton } from '../../../components/globalComponents/globalcomponents';
import './homeComponents.css';

const COLOR_PRIMARY = '#B58017';
const COLOR_DARK = '#20491A';
const COLOR_BG = '#0B300D';

export default function HistoriaSection() {
	return (
		<Box
			sx={{
				bgcolor: COLOR_BG,
				width: '100vw',
				py: { xs: 4 },
				overflowX: 'hidden',
			}}
		>
			<Box
				id="HistoriaSection"
				sx={{
					px: { xs: 1, sm: 2, md: 4, lg: 8, xl: 20 },
					mx: 'auto',
				}}

			>
				<Grid container alignItems="center" justifyContent="center" sx={{ display: 'flex', width: '80vw', alignItems: { xs: 'center', md: 'flex-start' } }}>
					{/* Imagem/Futuro slider */}
					<Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<Box sx={{ border: `4px solid ${COLOR_PRIMARY}`, height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'transparent', width: { xs: '80%', md: '100%' } }}>
							<Box sx={{ width: '90%', height: '90%', bgcolor: '#bdbdbd' }} />
						</Box>
					</Grid>
					{/* Texto */}
					<Grid item xs={12} md={6}>
						<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, gap: 2, height: '100%' }}>
							<SectionType color={COLOR_PRIMARY} fontFamily="inherit" fontSize="1rem">
								HISTÓRIA
							</SectionType>
							<Title color="#fff" fontFamily="inherit" fontSize="2.5rem">
								UMA HISTÓRIA CENTENÁRIA
							</Title>
							<Text color="#fff" fontFamily="inherit" fontSize="1rem">
								O São Francisco Golf Club foi fundado na década de 1930 pelo <span style={{ color: COLOR_PRIMARY }}>Conde Luiz Eduardo Matarazzo</span>, que desejava expandir o golfe em São Paulo. Inicialmente, ele praticava em um pequeno percurso de três buracos, onde hoje está o Shopping Iguatemi. Em 1937, foram concluídos os primeiros nove buracos do clube, junto à sua sede, projetada pelo próprio Conde.<br />
								Desde então, o clube se tornou referência no golfe brasileiro, sendo palco de grandes competições e berço de talentos do esporte. Com um campo desafiador e uma tradição centenária, o São Francisco Golf Club segue promovendo o golfe com excelência.
							</Text>
							<Text color="#fff" fontFamily="inherit" fontSize="1rem" style={{ fontWeight: 700, color: '#fff', textDecoration: 'underline' }}>
								Veja a história completa do clube e imagens históricas
							</Text>
							<CustomButton
								backgroundColor={COLOR_PRIMARY}
								fontFamily="inherit"
								fontSize="1rem"
								padding="10px 24px"
								sx={{ color: '#fff', width: 'fit-content', borderRadius: 0, mt: 1, fontWeight: 700, boxShadow: 'none', '&:hover': { backgroundColor: '#a06e13' } }}
							>
								DESCUBRA A HISTÓRIA&nbsp;{'>'}
							</CustomButton>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
