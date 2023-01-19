
import { faHtml5, faPhp, faLaravel, faJava } from "@fortawesome/free-brands-svg-icons";
import { Box, Grid, Slider, Typography } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { PrettoSlider } from "./config/style_config";

export const BackEndSkills = () => {
    return (
        <>
            <Box sx={{
                width: '100%'
            }} >
                <Typography sx={{ display: 'flex', flexFlow: 'row wrap' }} variant='skills_skill' component="h1">
                    <div className="dash-pages"></div>
                    Backend skills
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, marginTop: '15px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <FontAwesomeIcon style={{ color: '#7175AA', fontSize: '25px' }} icon={faPhp} />
                        &nbsp;
                        <Typography gutterBottom variant='skills_lbl_sliders'>PHP</Typography>
                        <PrettoSlider
                            valueLabelDisplay="on"
                            aria-label="pretto slider"
                            defaultValue={70}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <FontAwesomeIcon style={{ color: '#D84924', fontSize: '25px' }} icon={faLaravel} />
                        &nbsp;
                        <Typography gutterBottom variant='skills_lbl_sliders'>LARAVEL</Typography>
                        <PrettoSlider
                            valueLabelDisplay="on"
                            aria-label="pretto slider"
                            defaultValue={40}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '100%', marginTop: '15px' }}>
                <Box sx={{ m: 3 }} />
                &nbsp;
                <Typography gutterBottom variant='skills_lbl_sliders'>EXPRESSJS</Typography>
                <PrettoSlider
                    valueLabelDisplay="on"
                    aria-label="pretto slider"
                    defaultValue={30}
                />
            </Box>
            <Box sx={{ width: '100%', marginTop: '15px' }}>
                <Box sx={{ m: 3 }} />
                <FontAwesomeIcon style={{ color: '#EB901C', fontSize: '25px' }} icon={faJava} />
                &nbsp;
                <Typography gutterBottom variant='skills_lbl_sliders'>JAVA</Typography>
                <PrettoSlider
                    valueLabelDisplay="on"
                    aria-label="pretto slider"
                    defaultValue={50}
                />
            </Box>
            <Box sx={{ flexGrow: 1, marginTop: '15px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        &nbsp;
                        <Typography gutterBottom variant='skills_lbl_sliders'>MYSQL</Typography>
                        <PrettoSlider
                            valueLabelDisplay="on"
                            aria-label="pretto slider"
                            defaultValue={70}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        &nbsp;
                        <Typography gutterBottom variant='skills_lbl_sliders'>POSTGRESQL</Typography>
                        <PrettoSlider
                            valueLabelDisplay="on"
                            aria-label="pretto slider"
                            defaultValue={65}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '100%', marginTop: '15px' }}>
                <Box sx={{ m: 3 }} />
                &nbsp;
                <Typography gutterBottom variant='skills_lbl_sliders'>MONGODB</Typography>
                <PrettoSlider
                    valueLabelDisplay="on"
                    aria-label="pretto slider"
                    defaultValue={50}
                />
            </Box>

        </>
    )
}
