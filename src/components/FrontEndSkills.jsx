
import { faHtml5, faCss3, faSass, faSquareJs, faBootstrap, faReact } from "@fortawesome/free-brands-svg-icons";
import { Box, Grid, Typography } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PrettoSlider } from "./config/style_config";

export const FrontEndSkills = () => {

    return (
        <>
            <Box sx={{
                width: '100%'
            }} >
                <Typography sx={{ display: 'flex', flexFlow: 'row wrap' }} variant='skills_skill' component="h1">
                    <div className="dash-pages"></div>
                    Frontend skills
                </Typography>
            </Box>
            <Box sx={{ width: '100%', marginTop: '15px' }}>
                <FontAwesomeIcon style={{ color: '#D84924', fontSize: '25px' }} icon={faHtml5} />
                &nbsp;
                <Typography gutterBottom variant='skills_lbl_sliders'>HTML</Typography>

                <PrettoSlider
                    valueLabelDisplay="on"
                    aria-label="pretto slider"
                    defaultValue={75}
                />
            </Box>

            <Box sx={{ flexGrow: 1, marginTop: '15px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <FontAwesomeIcon style={{ color: '#2449D8', fontSize: '25px' }} icon={faCss3} />
                        &nbsp;
                        <Typography gutterBottom variant='skills_lbl_sliders'>CSS</Typography>
                        <PrettoSlider
                            valueLabelDisplay="on"
                            aria-label="pretto slider"
                            defaultValue={75}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <FontAwesomeIcon style={{ color: '#BB5E8C', fontSize: '25px' }} icon={faSass} />
                        &nbsp;
                        <Typography gutterBottom variant='skills_lbl_sliders'>SASS</Typography>
                        <PrettoSlider
                            valueLabelDisplay="on"
                            aria-label="pretto slider"
                            defaultValue={50}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <FontAwesomeIcon style={{ color: '#7F10F0', fontSize: '25px' }} icon={faBootstrap} />
                        &nbsp;
                        <Typography gutterBottom variant='skills_lbl_sliders'>BOOTSTRAP</Typography>
                        <PrettoSlider
                            valueLabelDisplay="on"
                            aria-label="pretto slider"
                            defaultValue={70}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, marginTop: '15px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <FontAwesomeIcon style={{ color: '#EAD41C', fontSize: '25px' }} icon={faSquareJs} />
                        &nbsp;
                        <Typography gutterBottom variant='skills_lbl_sliders'>JAVASCRIPT</Typography>
                        <PrettoSlider
                            valueLabelDisplay="on"
                            aria-label="pretto slider"
                            defaultValue={80}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <FontAwesomeIcon style={{ color: '#5CCFEE', fontSize: '25px' }} icon={faReact} />
                        &nbsp;
                        <Typography gutterBottom variant='skills_lbl_sliders'>REACT</Typography>
                        <PrettoSlider
                            valueLabelDisplay="on"
                            aria-label="pretto slider"
                            defaultValue={60}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Typography gutterBottom variant='skills_lbl_sliders'>JQUERY</Typography>
                        <PrettoSlider
                            valueLabelDisplay="on"
                            aria-label="pretto slider"
                            defaultValue={60}
                        />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ width: '100%', marginTop: '15px' }}>
                <Typography gutterBottom variant='skills_lbl_sliders'>MUI</Typography>
                <PrettoSlider
                    valueLabelDisplay="on"
                    aria-label="pretto slider"
                    defaultValue={50}
                />
            </Box>

        </>
    )
}
