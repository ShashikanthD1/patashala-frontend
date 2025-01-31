import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Typography, Button, Container } from '@mui/material';
import banners from '../../assets/school_finder.jpg';
import Location from '../location/Location';

function Banner() {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', py: 6 }}>
            <Container>
                <Grid container alignItems="center" spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box component="img" src={banners} alt="School Finder Banner" sx={{ width: '100%', borderRadius: 2 }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography variant="h4" component="h2" gutterBottom>
                                Finding the best school for your kid is now just a{' '}
                                <Link to="#" style={{ textDecoration: 'none', color: '#1976d2' }}>
                                
                                <Location/>
                                
                                click away!</Link>
                            </Typography>
                            <Box sx={{ mt: 3 }}>
                                <Typography variant="subtitle1" gutterBottom>
                                    Find Schools Near Me
                                </Typography>
                                <Button variant="contained" color="primary" size="large">
                                    Search
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Banner;
