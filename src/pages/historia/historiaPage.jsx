import React from 'react'
import { Box, Grid } from '@mui/material'
import { SectionType, Title, Text } from '../../components/globalComponents/globalComponents.jsx'
import { MAX_CONTENT_WIDTH } from '@/styles/layout.js'

import historiaImage from '@/assets/Home/Historia/SociosFoto.jpg';

export default function HistoriaPage() {
    return (
        <Box id="HistoriaPage" sx={{ py: { xs: 4, md: 8 }, px: 2, bgcolor: '#f8f6ec' }}>
            <Box sx={{ maxWidth: MAX_CONTENT_WIDTH, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 3 }}>
                <SectionType color="#B58017" fontSize="1rem">HISTÓRIA</SectionType>
                <Title color="#20491A" fontSize="2.2rem">HISTÓRIA DO SÃO FRANCISCO GOLF CLUB</Title>

                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={7} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Text color="#20491A">
                            Apaixonado por esportes e fascinado pelo golfe, o Conde Luiz Eduardo Matarazzo, o caçula dos 13 filhos do fundador das Indústrias Reunidas F. Matarazzo, costumava, em 1935, dar algumas tacadas em um pequeno percurso de três buracos localizado em um sítio nos arredores de São Paulo, onde passava os fins de semana. Esse sítio ficava onde hoje se encontra a Avenida Faria Lima, exatamente na área ocupada pelo Shopping Iguatemi.
                        </Text>

                        <Text color="#20491A">
                            Frequentemente, acompanhavam o Conde o mais renomado profissional da época no Brasil, José Maria Gonzalez — responsável pelo desenho daquele pequeno campo — e seu filho de pouco mais de dez anos, um garoto talentoso que mais tarde se tornaria o grande campeão internacional Mário Gonzalez.
                        </Text>

                        <Text color="#20491A">
                            Determinando-se a oferecer a São Paulo um verdadeiro campo de golfe, o Conde decidiu construir um campo de 18 buracos. Em uma de suas fazendas, situada além do Rio Pinheiros, ele confiou novamente a José Maria Gonzalez a execução dos primeiros nove buracos, concluídos em 1937, juntamente com a construção da Club House — ainda preservada até hoje — projetada pelo próprio Conde Matarazzo.
                        </Text>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <Box
                            component="img"
                            src='https://acervo-portinari.s3.sa-east-1.amazonaws.com/8682d0b3560f29627d117d21a2eb30c4.jpeg'
                            alt='Foto Conde Luiz Eduardo Matarazzo'
                            sx={{ width: { xs: '100%', sm: 300, md: 320 }, maxWidth: 350, borderRadius: 2, boxShadow: 2 }}
                        />
                        <Text sx={{ filter: 'opacity(0.8)', fontStyle: 'italic', fontSize: '0.95rem', textAlign: 'center' }}>
                            Retrato de Luiz Eduardo Matarazzo, Conde e fundador do São Francisco Golf Club, pintado por Candido Portinari em 1941. A obra reflete a personalidade marcante e o espírito visionário do Conde, eternizando sua importância para a história do golfe paulista e brasileiro.
                        </Text>
                    </Grid>
                </Grid>


                <Grid container spacing={3} alignItems="center" sx={{ mt: 2 }}>
                    <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <Box
                            component='img'
                            src={historiaImage}
                            alt='Sócios do São Francisco Golf Club'
                            sx={{ width: { xs: '100%', sm: 300, md: 320 }, maxWidth: 350, borderRadius: 2, boxShadow: 2 }}
                        />
                        <Text sx={{ filter: 'opacity(0.8)', fontStyle: 'italic', fontSize: '0.95rem', textAlign: 'center' }}>
                            Registro dos sócios do São Francisco Golf Club em um dos tradicionais encontros do clube. A imagem representa o espírito de união, amizade e paixão pelo golfe que atravessa gerações, perpetuando o legado iniciado por Luiz Eduardo Matarazzo.
                        </Text>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Text color="#20491A">
                            O clube, entretanto, só passou a funcionar regularmente alguns anos depois. Após a Segunda Guerra Mundial, em 1944, foi contratado o profissional argentino Armando Rossi (pai de Ricardo Rossi, que por muito tempo foi o número 1 entre os amadores brasileiros). Armando, que defendia a técnica de jogar golfe utilizando apenas o braço esquerdo — resultado de uma paralisia infantil — costumava contar que se inspirou ao ver, pela primeira vez, Mário Gonzalez jogar. Como dizia Rossi: “era um chico flaco, de aparência frágil, mas, che, batia mais longe que Roberto De Vicenzo.”
                        </Text>

                        <Text color="#20491A">
                            Rossi permaneceu no São Francisco até 1958. Desde 1944, porém, a história do São Francisco Golf Club (SFGC) se entrelaça com a do golfe paulista e brasileiro. Muitos dos grandes amadores do país deram suas primeiras tacadas ali, antes que um grupo de sócios se separasse para fundar o São Fernando Golf Club. Entre os nomes formados no SFGC estão José Joaquim Barbosa, Sérgio Nogueira e tantos outros.
                        </Text>

                        <Text color="#20491A">
                            Em 1966, o campo recebeu um presente inusitado, que o tornaria famoso: oito jacarés trazidos do Mato Grosso passaram a habitar a lagoa do desafiante buraco 18 — distraindo os jogadores até hoje.
                        </Text>

                        <Text color="#20491A">
                            Em junho de 1970, graças à intervenção pessoal de Mário Gonzalez, o clube sediou pela primeira vez uma competição com grandes nomes do golfe latino-americano e europeu. O torneio foi vencido por Florentino Molina, enfrentando adversários de peso como Roberto De Vicenzo, F. De Luca, L. Rapisarda, C. Fernandez, além dos ingleses M. Gregson e D. Thomaz, e os melhores brasileiros da época.
                        </Text>

                        <Text color="#20491A">
                            Em agosto de 1972, o argentino Alberto Serra reformulou grande parte do percurso. Três anos depois, em 1975, foi feita uma grande reforma interna na sede, reinaugurada em 5 de julho de 1975.
                        </Text>

                        <Text color="#20491A">
                            Atualmente, sob a presidência de uma das filhas do fundador, o clube conta com cerca de 100 sócios. Filiado desde sua origem à Associação Brasileira de Golfe, o SFGC é também associado à Federação Paulista de Golfe.
                        </Text>

                        <Text color="#20491A">
                            Em 1977, o clube realizou o 1º Aberto Misto de Amadores e Profissionais, disputado em 72 buracos. O vencedor foi o jovem profissional Antônio Lourenço (Ferrugem), seguido de perto pelo grande amigo do São Francisco e maior nome do golfe brasileiro de todos os tempos: o professor Mário Gonzalez, que — ainda em novembro de 2001 — continuava jogando maravilhosamente abaixo do par em seu belo Gávea Golf Club, no Rio de Janeiro.
                        </Text>
                    </Grid>
                </Grid>

            </Box>
        </Box>
    )
}