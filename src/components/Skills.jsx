// import { Box, Grid, ThemeProvider, Typography } from "@mui/material"
// import Particles from "react-tsparticles"
// import { loadFull } from "tsparticles"
// import { useCallback, useEffect, useState } from "react"
// import { ParticlesConfig } from "./config/ParticlesConfig"
// import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import { GlobalTheme, CustomTabs, CustomTab, A11yProps, TabPanel } from "./config/style_config"
import { Box, Grid, ThemeProvider, Typography } from "@mui/material"
import { ParticlesConfig } from "./config/ParticlesConfig"
import { FrontEndSkills } from "./FrontEndSkills"
import { BackEndSkills } from "./BackendSkills"
import { loading } from "../store/slice/PortfolioSlice"
import { ViewQuilt, Storage } from '@mui/icons-material';
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const Skills = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(loading(false));
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
    }, []);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section id="section-skills">

            <Grid container sx={{
                width: '100%',
                height: '100%',
            }}
            >
                <ThemeProvider theme={GlobalTheme}>

                    <Grid className="animate__animated animate__fadeIn animate__delay-2s" sx={{
                        display: 'flex',
                        flexFlow: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                    }} item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <Particles
                            id="tsparticles"
                            init={particlesInit}
                            loaded={particlesLoaded}
                            options={ParticlesConfig}
                        />
                        <Box sx={{
                            position: 'absolute',
                            width: { xs: '100%', sm: '90%', md: '70%', lg: '45%', xl: '45%' },
                            padding: '40px'
                        }} >
                            <Typography sx={{ display: 'flex', flexFlow: 'row wrap' }} variant='skills_title_pages' component="h1">
                                <div className="dash-pages"></div>About me
                            </Typography>
                            <Typography variant='skills_title_about' component="h1">
                                Estudiante de ingeniería de software<font color="#5CCFEE">.</font>
                            </Typography>
                            <div className="dash-pages"></div>
                            <Typography sx={{ marginTop: '40px' }} variant='skills_title_aboutDesc' component="h1">
                                Estudiante de 1° semestre  de ingeniería de software que disfruta de aprender las nuevas tecnologías que mueven al mundo y comprender cómo funcionan de manera técnica.
                                Emezando a estudiar de manera constante desde los 17 años, tratando de practicar todos los días, realizando proyectos personales y aprendiendo conceptos sobre informática en general.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid className="animate__animated animate__fadeIn animate__delay-2s" sx={{
                        backgroundColor: '#262B32',
                        display: 'flex',
                        flexFlow: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: { xs: '5px', sm: '20px', md: '40px', lg: '40px', xl: '40px' },
                    }} item xs={12} sm={12} md={12} lg={6} xl={6} >

                        <CustomTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <CustomTab icon={<ViewQuilt />} iconPosition="start" label="Front-end" {...A11yProps(0)} />
                            <CustomTab icon={<Storage />} iconPosition="start" label="Back-end" {...A11yProps(1)} />
                        </CustomTabs>

                        <Box sx={{
                            width: '100%',
                        }} >
                            <TabPanel value={value} index={0}>
                                <FrontEndSkills />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <BackEndSkills />
                            </TabPanel>
                        </Box>

                    </Grid>
                </ThemeProvider>
            </Grid >

        </section >
    )
}
