/** LIBS **/
import React from 'react';

/** MUI **/
import { Box, Grid } from '@mui/material';

/** CUSTOM COMPONENTS **/
import { SectionType, Title, Text, CustomButton } from '../../../components/globalComponents/globalComponents';

/** ASSETS **/
import historiaImage from '/src/assets/home/historia/sociosFoto.jpg';
import LogoSFGC from '/src/assets/baseComponents/footer/logoSFGC.svg';

/** STYLES / TOKENS **/
import './homeComponents.css';
import { MAX_CONTENT_WIDTH } from '../../../styles/layout';

const COLOR_PRIMARY = '#B58017';
const COLOR_DARK = '#20491A';
const COLOR_BG = '#0B300D';

export default function HistoriaSection() {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				bgcolor: COLOR_BG,
				width: '100vw',
				py: { xs: 4, md: 8 },

			}}
		>
			<Box
				id="HistoriaSection"
				sx={{
					display: 'flex',
					width: '80vw',
					mx: 0,
					maxWidth: MAX_CONTENT_WIDTH
				}}
			>
				<Grid container alignItems="center" justifyContent="center" sx={{ px: 0, gap: { xs: 4, md: 6, lg: 8 } }}>

					{/* Imagem/Futuro slider */}
					<Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

						<Box
							component={'img'}
							src={historiaImage}
							alt="Fotos histórica dos Sócios do São Francisco Golf Club"
							sx={{
								width: { xs: '90%', md: '100%' },
								maxWidth: { xs: 'calc(450px + 10%)', md: 'calc(500px + 20%)', lg: 'calc(500px + 20%)' },
								objectFit: 'cover',
								padding: { xs: '10px', md: '20px' },
								border: '4px solid #B58017'
							}}
						/>
					</Grid>

					{/* Texto */}
					<Grid item xs={12} md={5}>
						<Box sx={{
							position: 'relative', display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, gap: 2, height: '100%', justifyContent: 'center', '&::before': {
								content: '""',
								position: 'absolute',
								pointerEvents: 'none',
								zIndex: 0,
								backgroundImage: `url(${LogoSFGC})`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'contain',
								opacity: 0.12,
								top: { xs: -10, md: '-10%' },
								left: { xs: '50%', md: '100%' },
								transform: { xs: 'translateX(-50%)', md: 'translateX(-100%)' },
								width: { xs: 120, md: 220 },
								height: { xs: 120, md: 220 }
							}
						}}>
							<SectionType color={COLOR_PRIMARY} fontFamily="inherit" fontSize="1rem">
								HISTÓRIA
							</SectionType>
							<Title color="#fff" fontFamily="inherit" fontSize="2.5rem">
								UMA HISTÓRIA CENTENÁRIA
							</Title>
							<Text color="#fff" fontFamily="inherit" fontSize="1rem">
								O São Francisco Golf Club foi fundado na década de 1930 pelo <Box component='span' sx={{ color: COLOR_PRIMARY }}>Conde Luiz Eduardo Matarazzo</Box>, que desejava expandir o golfe em São Paulo. Inicialmente, ele praticava em um pequeno percurso de três buracos, onde hoje está o Shopping Iguatemi. Em 1937, foram concluídos os primeiros nove buracos do clube, junto à sua sede, projetada pelo próprio Conde.<br />
								<Box component='span' sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}>Desde então, o clube se tornou referência no golfe brasileiro, sendo palco de grandes competições e berço de talentos do esporte. Com um campo desafiador e uma tradição centenária, o São Francisco Golf Club segue promovendo o golfe com excelência.</Box>
							</Text>
							<Text color="#fff" fontFamily="inherit" fontSize="1rem" sx={{ fontWeight: 700, color: '#fff', textDecoration: 'underline' }}>
								Veja a história completa do clube e imagens históricas
							</Text>
							<CustomButton
								backgroundColor={COLOR_PRIMARY}
								fontFamily="inherit"
								fontSize="1rem"
								padding="10px 24px"
								sx={{ color: '#fff', width: 'fit-content', borderRadius: 0, mt: 1, fontWeight: 700, boxShadow: 'none', '&:hover': { backgroundColor: '#a06e13' } }}
							>
								DESCUBRA A HISTÓRIA
							</CustomButton>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
