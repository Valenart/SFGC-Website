import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, Button, Grid } from '@mui/material';

export default function LayoutPosts() {
    const [form, setForm] = useState({
        title: '',
        description: '',
        images: []
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setForm({ ...form, images: Array.from(e.target.files) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para salvar post futuramente
        alert('Post salvo!');
    };

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
            <Paper elevation={3} sx={{ p: 4, width: 500 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Novo Post
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Título"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                        fullWidth
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
                    />
                    <Button
                        variant="contained"
                        component="label"
                        color="primary"
                    >
                        Adicionar Fotos
                        <input
                            type="file"
                            name="images"
                            accept="image/*"
                            multiple
                            hidden
                            onChange={handleImageChange}
                        />
                    </Button>
                    <Grid container spacing={1} sx={{ mt: 1 }}>
                        {form.images && form.images.map((file, idx) => (
                            <Grid item key={idx}>
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={`preview-${idx}`}
                                    style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 4 }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Button type="submit" variant="contained" color="success" fullWidth>
                        Criar Post
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}
