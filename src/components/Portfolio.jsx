import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { Grid, Typography } from "@mui/material"
import { PhpCardsProjects } from "./PhpCardsProjects";
import { ReactCardsProjects } from "./ReactCardsProjects";
import { ExpressCardsProjects } from "./ExpressCardsProjects";
import { loading } from "../store/slice/PortfolioSlice";
import { GlobalTheme, CustomTabs, CustomTab, A11yProps, TabPanel } from "./config/style_config"

export const Portfolio = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(loading(false));
        }, 2000);
        return () => clearTimeout(timer);
    }, []);


    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <section id="section-portfolio">
                <Grid container sx={{
                    width: '100%',
                    height: '100%',
                }}
                // spacing={2}
                >
                    <ThemeProvider theme={GlobalTheme}>
                        <Grid className="animate__animated animate__fadeIn animate__delay-2s" sx={{
                            display: 'flex',
                            flexFlow: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                            backgroundColor: '#1A2027',
                        }} item xs={3} sm={3} md={2} lg={2} xl={2} >
                            <Typography sx={{ transform: 'rotate(270deg)' }} variant='portfolio_title' component="h1">
                                PORTFOLIO
                            </Typography>
                        </Grid>
                        <Grid className="animate__animated animate__fadeIn animate__delay-2s" sx={{
                            display: 'flex',
                            flexFlow: 'column',
                            overflow: 'hidden',
                            backgroundColor: '#1A2027',
                        }} item xs={9} sm={9} md={10} lg={10} xl={10} >
                            <div style={{ padding: '30px' }}>
                                <CustomTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <CustomTab iconPosition="start" label="PHP"
                                        {...A11yProps(0)}
                                    />
                                    <CustomTab iconPosition="start" label="REACT"
                                        {...A11yProps(1)}
                                    />
                                    <CustomTab iconPosition="start" label="EXPRESS"
                                        {...A11yProps(2)}
                                    />
                                </CustomTabs>
                            </div>
                            <div style={{ height: '100%' }}>
                                <TabPanel value={value} index={0}>
                                    <PhpCardsProjects />
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <ReactCardsProjects />
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <ExpressCardsProjects />
                                </TabPanel>

                            </div>
                        </Grid>
                    </ThemeProvider>
                </Grid>
            </section >
        </>
    )
}
