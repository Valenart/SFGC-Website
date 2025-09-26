import React, { useState } from 'react';
import { Box, Button, TextField, Paper, InputAdornment, IconButton, Checkbox, FormControlLabel, Grid, Snackbar, Alert } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Title, Text, CustomButton, Logo } from '../../components/globalComponents/globalcomponents';
import { useTheme } from '@mui/material/styles';
import bgLogin from '../../../public/GolfField1.jpg'
import useMediaQuery from '@mui/material/useMediaQuery';

const COLOR_PRIMARY = '#B58017';

export default function Login() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: '', password: '', keepConnected: false });

  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  // snackbar and submission state
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbar((s) => ({ ...s, open: false }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (e) => {
    e.preventDefault();

    // validação simples
    if (!form.username || !form.password) {
      setSnackbar({ open: true, message: 'Preencha usuário e senha.', severity: 'warning' });
      return;
    }

    setIsSubmitting(true);

    // Simula requisição de autenticação (substitua por fetch/axios real)
    setTimeout(() => {
      setIsSubmitting(false);
      setSnackbar({ open: true, message: 'Login enviado com sucesso!', severity: 'success' });
      // aqui você pode redirecionar ou limpar o formulário
    }, 900);
  };

  return (
    <Box sx={{ minHeight: '100vh', width: '100vw' }}>
      <Grid container sx={{
        minHeight: '100vh', flexWrap: { md: 'nowrap' }, backgroundImage: `url(${bgLogin})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}>
        {/* Imagem à esquerda */}
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'relative',
            minWidth: 0,
            flexGrow: 1,
          }}
        >
          <Box sx={{ position: 'absolute', left: 0, bottom: 40, px: 6, display: { xs: 'none', lg: 'block' } }}>
            <Title color="#fff" fontFamily="inherit" fontSize="4rem">
              ONDE A TRADIÇÃO<br />ENCONTRA A NATUREZA.
            </Title>
            <Text color="#fff" fontFamily="inherit" fontSize="1rem" >
              © 2025 São Francisco Golf Club. Todos os direitos reservados.
            </Text>
          </Box>
        </Grid>

        {/* Formulário à direita */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            bgcolor: { xs: '#0B300D99', md: '#0B300DDD' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: { md: '500px' },
            minHeight: '100vh',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 400,
              px: { xs: 3, md: 0 },
              py: { xs: 6, md: 0 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Logo color="#fff" fontFamily="inherit" fontSize="2rem">
              São Francisco Golf Club
            </Logo>
            <Text
              fontFamily="inherit"
              fontSize="1rem"
              fontWeight="600"
              padding='15px'
            >
              ÁREA EXCLUSIVA PARA FUNCIONÁRIOS
            </Text>
            <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label={isMdUp ? "Email ou Usuário" : ''}
                  placeholder='Email ou Usuário'
                  name="username"
                  type="text"
                  value={form.username}
                  onChange={handleChange}
                  required
                  onInvalid={(e) => e.target.setCustomValidity('Por favor informe seu email ou usuário')}
                  onInput={(e) => e.target.setCustomValidity('')}
                  fullWidth
                  InputLabelProps={{
                    sx: {
                      color: '#fff',
                      '&.Mui-focused': { color: '#fff' },
                    },
                  }}
                  InputProps={{
                    sx: {
                      color: '#fff',
                      bgcolor: 'transparent',
                      '& .MuiOutlinedInput-notchedOutline': { borderColor: '#FFFFFF88' },
                      '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#FFF' },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#FFF' },
                    },
                  }}
                />

                <TextField
                  label={isMdUp ? "Senha" : ''}
                  placeholder='Senha'
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={handleChange}
                  required
                  onInvalid={(e) => e.target.setCustomValidity('Por favor informe sua senha')}
                  onInput={(e) => e.target.setCustomValidity('')}
                  fullWidth
                  InputLabelProps={{
                    sx: {
                      color: '#fff',
                      '&.Mui-focused': { color: '#fff' },
                    },
                  }}
                  InputProps={{
                    sx: {
                      color: '#fff',
                      bgcolor: 'transparent',
                      '& .MuiOutlinedInput-notchedOutline': { borderColor: '#FFFFFF88' },
                      '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#FFF' },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#FFF' },
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword} edge="end" sx={{ color: '#fff' }}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={form.keepConnected}
                    onChange={handleChange}
                    name="keepConnected"
                    sx={{
                      color: '#fff',
                      '&.Mui-checked': { color: theme.palette.primary.main },
                    }}
                  />
                }
                label={
                  <Text color="#fff" fontFamily="inherit" fontSize="0.95rem">
                    Manter-me conectado
                  </Text>
                }
                sx={{ alignItems: 'center' }}
              />
              <CustomButton
                type="submit"
                backgroundColor={COLOR_PRIMARY}
                fontFamily="inherit"
                fontSize="1rem"
                padding="10px 24px"
                disabled={isSubmitting}
                sx={{ color: '#fff', borderRadius: 0, mt: 1, fontWeight: 700, boxShadow: 'none', '&:hover': { backgroundColor: '#a87618ff' } }}
              >
                {isSubmitting ? 'ENVIANDO...' : 'ENTRAR'}
              </CustomButton>
            </Box>
          </Box>
        </Grid>
        <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Grid>
    </Box>
  );
}


/*
import React, { useState } from 'react';
import {
  Dialog, DialogContent, DialogTitle, Box, TextField, Button, Select, MenuItem,
  InputLabel, FormControl, IconButton, Typography, Stack
} from '@mui/material';
import { Title, Text } from '../../components/globalComponents/globalcomponents';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useTheme } from '@mui/material/styles';

export function CreatePostDialog({ open, onClose, employees = [] }) {
  const theme = useTheme();
  const [form, setForm] = useState({
    title: '',
    description: '',
    employee: '',
    images: [],
    eventDate: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    setForm({ ...form, images: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para criar post
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: 'rgba(11,48,13,0.97)',
          borderRadius: 2,
          p: 0,
        }
      }}
    >
      <DialogTitle sx={{ bgcolor: theme.palette.primary.main, color: '#fff', textAlign: 'center', py: 2 }}>
        <Title color="#fff" fontFamily="inherit" fontSize="1.4rem" sx={{ mb: 0 }}>
          Criar Novo Post
        </Title>
      </DialogTitle>
      <DialogContent sx={{ py: 4, px: 4 }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Título"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            fullWidth
            InputLabelProps={{
              sx: { color: '#fff', '&.Mui-focused': { color: '#fff' } }
            }}
            InputProps={{
              sx: {
                color: '#fff',
                bgcolor: 'transparent',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main },
              }
            }}
          />
          <TextField
            label="Descrição"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            fullWidth
            multiline
            minRows={3}
            InputLabelProps={{
              sx: { color: '#fff', '&.Mui-focused': { color: '#fff' } }
            }}
            InputProps={{
              sx: {
                color: '#fff',
                bgcolor: 'transparent',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main },
              }
            }}
          />
          <FormControl fullWidth required>
            <InputLabel sx={{ color: '#fff', '&.Mui-focused': { color: '#fff' } }}>Funcionário</InputLabel>
            <Select
              name="employee"
              value={form.employee}
              onChange={handleChange}
              label="Funcionário"
              sx={{
                color: '#fff',
                bgcolor: 'transparent',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main },
              }}
              MenuProps={{
                PaperProps: {
                  sx: { bgcolor: theme.palette.background.default, color: '#fff' }
                }
              }}
            >
              {employees.map((emp) => (
                <MenuItem key={emp.id} value={emp.id}>{emp.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button
              variant="contained"
              component="label"
              color="primary"
              startIcon={<PhotoCamera />}
              sx={{
                borderRadius: 0,
                fontFamily: 'inherit',
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: 1,
                color: '#fff'
              }}
            >
              Adicionar Imagens
              <input
                type="file"
                accept="image/*"
                multiple
                hidden
                onChange={handleImageChange}
              />
            </Button>
            <Typography sx={{ color: '#fff', fontSize: '0.95rem' }}>
              {form.images.length > 0 ? `${form.images.length} imagem(ns) selecionada(s)` : 'Nenhuma imagem'}
            </Typography>
          </Stack>
          <TextField
            label="Data do Evento (opcional)"
            name="eventDate"
            type="date"
            value={form.eventDate}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
              sx: { color: '#fff', '&.Mui-focused': { color: '#fff' } }
            }}
            InputProps={{
              sx: {
                color: '#fff',
                bgcolor: 'transparent',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main },
              }
            }}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              borderRadius: 0,
              py: 1.5,
              fontWeight: 700,
              fontFamily: 'inherit',
              fontSize: '1rem',
              letterSpacing: 1,
              mt: 2
            }}
            fullWidth
          >
            Publicar Post
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
*/