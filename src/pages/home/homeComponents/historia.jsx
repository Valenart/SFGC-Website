
import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

const COLOR_PRIMARY = '#B58017';
const COLOR_DARK = '#20491A';
const COLOR_BG = '#0B300D';

export default function HistoriaSection() {
	return (
		<Box sx={{ bgcolor: COLOR_BG, py: { xs: 4, md: 8 }, px: { xs: 0, md: 0 } }}>
			<Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ maxWidth: 1400, mx: 'auto' }}>
				{/* Imagem/Futuro slider */}
				<Grid item xs={12} md={6}>
					<Box sx={{ border: `4px solid ${COLOR_PRIMARY}`, height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'transparent', mx: { xs: 0, md: 4 } }}>
						<Box sx={{ width: '90%', height: '90%', bgcolor: '#bdbdbd' }} />
					</Box>
				</Grid>
				{/* Texto */}
				<Grid item xs={12} md={6}>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
						<Typography variant="subtitle2" sx={{ color: COLOR_PRIMARY, fontWeight: 700, letterSpacing: 1, mb: 1 }}>
							— HISTÓRIA
						</Typography>
						<Typography variant="h4" sx={{ color: '#fff', fontWeight: 700, mb: 1, lineHeight: 1.1 }}>
							UMA HISTÓRIA<br />CENTENÁRIA
						</Typography>
						<Typography variant="body1" sx={{ color: '#fff', maxWidth: 500 }}>
							O São Francisco Golf Club foi fundado na década de 1930 pelo <span style={{ color: COLOR_PRIMARY, fontWeight: 600 }}>Conde Luiz Eduardo Matarazzo</span>, que desejava expandir o golfe em São Paulo. Inicialmente, ele praticava em um pequeno percurso de três buracos, onde hoje está o Shopping Iguatemi. Em 1937, foram concluídos os primeiros nove buracos do clube, junto à sua sede, projetada pelo próprio Conde.<br />
							Desde então, o clube se tornou referência no golfe brasileiro, sendo palco de grandes competições e berço de talentos do esporte. Com um campo desafiador e uma tradição centenária, o São Francisco Golf Club segue promovendo o golfe com excelência.
						</Typography>
						<Typography variant="body1" sx={{ color: '#fff', maxWidth: 500, fontWeight: 700, mt: 1 }}>
							<a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>
								Veja a história completa do clube e imagens históricas
							</a>
						</Typography>
						<Button variant="contained" sx={{ backgroundColor: COLOR_PRIMARY, color: '#fff', width: 'fit-content', borderRadius: 0, px: 3, py: 1.2, mt: 1, fontWeight: 700, boxShadow: 'none', '&:hover': { backgroundColor: '#a06e13' } }}>
							DESCRUBRA A HISTÓRIA&nbsp;&nbsp;{'>'}
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}
