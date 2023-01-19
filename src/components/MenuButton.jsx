import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import { createTheme, Grid, Typography, ThemeProvider, Link } from '@mui/material';
import { GlobalTheme } from './config/style_config';


export const MenuButton = () => {

    const [IconState, setIconState] = useState(true);

    const handleChangeIcon = () => {

        setIconState(!IconState);

    }

    return (
        <>
            <ThemeProvider theme={GlobalTheme}>

                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{
                        position: 'fixed',
                        zIndex: '9992',
                    }}
                >
                    <IconButton aria-label="delete" size="large" onClick={handleChangeIcon}>
                        {IconState ?
                            <MenuIcon sx={{ color: '#5CCFEE' }} fontSize="inherit" />
                            :
                            <ClearIcon sx={{ color: '#5CCFEE' }} fontSize="inherit" />
                        }
                    </IconButton>
                </Stack>
                <Grid container sx={{
                    position: 'fixed',
                    display: IconState ? 'none' : 'flex',
                    flexFlow: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100vw',
                    height: '100vh',
                    zIndex: '9991',
                    backgroundColor: '#0000008a'
                }}
                // spacing={2}
                >
                    <Typography variant='menu_title' component="h1">
                        MENÚ
                        <div className="home-dash"></div>
                    </Typography>
                    <Link className='menu-links' href="/all" underline="none">
                        All Site
                    </Link>
                    <Link className='menu-links' href="/home" underline="none">
                        Home
                    </Link>
                    <Link className='menu-links' href="/skills" underline="none">
                        About Me
                    </Link>
                    <Link className='menu-links' href="/skills" underline="none">
                        Skills
                    </Link>
                    <Link className='menu-links' href="/projects" underline="none">
                        Projects
                    </Link>
                    <Link className='menu-links' href="/contact" underline="none">
                        Contact
                    </Link>
                </Grid>
            </ThemeProvider>
        </>
    )
}
