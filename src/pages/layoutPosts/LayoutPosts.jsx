/*
import React, { useState } from 'react';
import {
  Dialog, DialogContent, DialogTitle, Box, TextField, Button, Select, MenuItem,
  InputLabel, FormControl, IconButton, Typography, Stack
} from '@mui/material';
import { Title, Text } from '../../components/globalComponents/globalComponents';
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