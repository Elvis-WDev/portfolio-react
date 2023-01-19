
import { Grid } from "@mui/material"

export const ReactCardsProjects = () => {
    return (
        <>

            <Grid container spacing={1}>
                <Grid className="animate__animated animate__bounceIn" sx={{ height: 'max-content' }} item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <a href="https://astrobirth.elvismacas.me/space/home" target="_blank" className='portfolio-img_projects'>
                        <div style={{ position: 'absolute', padding: '5px', backgroundColor: '#00BCD4', color: '#fff' }}>
                            Astrobirth App
                        </div>
                        <img loading="lazy" src='./img/projects/proj_astrobirth.png' alt="project.jpg" />
                    </a>
                </Grid>
                <Grid className="animate__animated animate__bounceIn" item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <a href="https://accounts.elvismacas.me/auth/login" target="_blank" className='portfolio-img_projects'>
                        <div style={{ position: 'absolute', padding: '5px', backgroundColor: '#00BCD4', color: '#fff' }}>
                            Accounts Manager App
                        </div>
                        <img loading="lazy" src="./img/projects/proj_accounts.png" alt="project.jpg" />
                    </a>
                </Grid>
                <Grid className="animate__animated animate__bounceIn" item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <a href="https://calendar.elvismacas.me/auth/login" target="_blank" className='portfolio-img_projects'>
                        <div style={{ position: 'absolute', padding: '5px', backgroundColor: '#00BCD4', color: '#fff' }}>
                            Calendar App
                        </div>
                        <img loading="lazy" src="./img/projects/proj_calendar.png" alt="project.jpg" />
                    </a>
                </Grid>
            </Grid>

        </>
    )
}
