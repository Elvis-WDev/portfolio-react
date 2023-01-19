import { Button, Grid, Link, ThemeProvider, Typography } from "@mui/material"
import { WhatsApp, LinkedIn, GitHub, Download, RocketLaunch, ElectricBolt, Call, PermIdentitySharp, DensitySmallSharp, HomeOutlined } from '@mui/icons-material';
import { useDispatch } from "react-redux";
import { loading } from "../store/slice/PortfolioSlice";
import { useEffect } from "react";
import { GlobalTheme } from "./config/style_config";

export const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(loading(false));
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (

        <section id="section-home">
            <ThemeProvider theme={GlobalTheme}>
                <Grid container sx={{
                    backgroundColor: '#1A2027',
                    width: '100%',
                    height: '100%',
                }}>
                    <Grid className="animate__animated animate__fadeIn animate__delay-2s" sx={{
                        display: 'flex',
                        flexFlow: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: { xs: 5, sm: 5, md: '80px 50px 50px 50px', lg: 1, xl: 1 },
                    }} item xs={12} sm={12} md={6} lg={4} xl={4}>
                        <div>
                            <Typography xs={{ color: '#fffff' }} variant='hi_home' component="h1">
                                &#9995; Hello, I'm
                            </Typography>
                            <Typography xs={{ color: '#fffff' }} variant='name_home' component="h1">
                                <font color="#fffff">Elvis<br />Macas</font>
                                <font color="#5CCFEE">.</font>
                            </Typography>
                            <div className="home-dash"></div>
                            <ul className="home-links">
                                <li>
                                    <a href="https://api.whatsapp.com/send/?phone=593983987321&text=%C2%A1Hola+Elvis!.+Me+gustar%C3%ADa+que+trabajaramos+juntos...&app_absent=0" target='_blank'>
                                        <WhatsApp sx={{ fontSize: 30 }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/elvis-macas-058780230/" target='_blank'>
                                        <LinkedIn sx={{ fontSize: 30 }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/Elvis-WDev" target='_blank'>
                                        <GitHub sx={{ fontSize: 30 }} />
                                    </a>
                                </li>
                            </ul>
                            <div className="neon-button">
                                <a style={{ textDecoration: 'none', fontFamily: 'CustomFont_description' }} href="../../public/documents/ElvisMacas-CV.pdf" target='_blank' className="btn btn-neon btn-slow" download="ElvisMacas-CV">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <Download sx={{ marginBottom: '-5px' }} />
                                    &nbsp;
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </Grid>
                    <Grid className="animate__animated animate__zoomIn animate__delay-2s" sx={{
                        display: 'flex',
                        flexFlow: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} item xs={12} sm={12} md={6} lg={4} xl={4}>

                        <div className="neon-block">
                            <div className="block home-img-elvis">
                                <span className="rainbow"></span>
                            </div>
                        </div>

                    </Grid>
                    <Grid className="animate__animated animate__fadeIn animate__delay-2s" sx=
                        {{
                            display: 'flex',
                            flexFlow: 'column',
                            justifyContent: 'center',
                            alignItems: 'start',
                            padding: '50px',
                        }} item xs={12} sm={12} md={12} lg={4} xl={4}>

                        <Typography variant='intro_home' component="h1">
                            INTRODUCTION
                            <div className="home-dash"></div>
                        </Typography>
                        <Typography variant='intro_home_title' component="h1">
                            Software <font color="#5CCFEE">Developer</font>
                        </Typography>
                        <Typography sx={{ marginTop: '20px' }} variant='descrp_intro_home' component="h1">
                            Hola, Mi nombre es Elvis Macas, soy de Ecuador y actualmente tengo 21 años. Tengo poca experiencia como desarrollador de software, aunque estoy estudiando una carrera, también lo complemento y disfruto más estudiar de manera autonoma.
                        </Typography>
                        <div style={{ marginTop: '25px' }}>
                            <Button sx={{ margin: '5px' }} color="dark" variant="contained" size="small">
                                <Link href="/all" underline="none" sx={{ color: '#5CCFEE' }}>
                                    <DensitySmallSharp sx={{ fontSize: '16px', marginBottom: '-4px' }} />
                                    &nbsp;
                                    All Page
                                </Link>
                            </Button>
                            <Button sx={{ margin: '5px' }} color="dark" variant="contained" size="small">
                                <Link href="/home" underline="none" sx={{ color: '#5CCFEE' }}>
                                    <HomeOutlined sx={{ fontSize: '16px', marginBottom: '-4px' }} />
                                    &nbsp;
                                    Home
                                </Link>
                            </Button>
                            <Button sx={{ margin: '5px' }} color="dark" variant="contained" size="small">
                                <Link href="/skills" underline="none" sx={{ color: '#5CCFEE' }}>
                                    <PermIdentitySharp sx={{ fontSize: '16px', marginBottom: '-4px' }} />
                                    &nbsp;
                                    About Me
                                </Link>
                            </Button>
                            <Button sx={{ margin: '5px' }} color="dark" variant="contained" size="small">
                                <Link href="/skills" underline="none" sx={{ color: '#5CCFEE' }}>
                                    <ElectricBolt sx={{ fontSize: '16px', marginBottom: '-4px' }} />
                                    &nbsp;
                                    Skills
                                </Link>
                            </Button>
                            <Button sx={{ margin: '5px' }} color="dark" variant="contained" size="small">
                                <Link href="/projects" underline="none" sx={{ color: '#5CCFEE' }}>
                                    <RocketLaunch sx={{ fontSize: '16px', marginBottom: '-4px' }} />
                                    &nbsp;
                                    Projects
                                </Link>
                            </Button>
                            <Button sx={{ margin: '5px' }} color="dark" variant="contained" size="small">
                                <Link href="/contact" underline="none" sx={{ color: '#5CCFEE' }}>
                                    <Call sx={{ fontSize: '16px', marginBottom: '-4px' }} />
                                    &nbsp;
                                    Contact
                                </Link>
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </section >

    )
}
