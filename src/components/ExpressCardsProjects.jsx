import { Grid } from "@mui/material"


export const ExpressCardsProjects = () => {
    return (
        <Grid container spacing={1}>
            <Grid className="animate__animated animate__bounceIn" sx={{ height: 'max-content' }} item xs={12} sm={12} md={6} lg={4} xl={4}>
                <a href="https://app-celendar-api.herokuapp.com/api/events/get" target="_blank" className='portfolio-img_projects'>
                    <div style={{ position: 'absolute', padding: '5px', backgroundColor: '#00BCD4', color: '#fff' }}>
                        Api Calendar
                    </div>
                    <img loading="lazy" src="./img/projects/proj_api_calendar.png" alt="project.jpg" />
                </a>
            </Grid>
        </Grid>

    )
}
