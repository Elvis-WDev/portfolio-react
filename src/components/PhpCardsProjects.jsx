import { Grid } from "@mui/material"
// import img_sistemapos from 'img/projects/proj_sistemapos.jpg';


export const PhpCardsProjects = () => {
    return (
        <Grid container spacing={1}>
            <Grid className="animate__animated animate__bounceIn" sx={{ height: 'max-content' }} item xs={12} sm={12} md={6} lg={4} xl={4}>
                <a href="https://sistemapos.elvisdev.me/login" target="_blank" className='portfolio-img_projects'>
                    <div style={{ position: 'absolute', padding: '5px', backgroundColor: '#00BCD4', color: '#fff' }}>
                        Sistema P.O.S
                    </div>
                    <img loading="lazy" src='./img/projects/proj_sistemapos.jpg' alt="project.jpg" />
                </a>
            </Grid>
            <Grid className="animate__animated animate__bounceIn" item xs={12} sm={12} md={6} lg={4} xl={4}>
                <a href="https://portfolio.elvisdev.me/" target="_blank" className='portfolio-img_projects'>
                    <div style={{ position: 'absolute', padding: '5px', backgroundColor: '#00BCD4', color: '#fff' }}>
                        Portfolio Web v1
                    </div>
                    <img loading="lazy" src="./img/projects/proj_webportfolio_v1.png" alt="project.jpg" />
                </a>
            </Grid>
            <Grid className="animate__animated animate__bounceIn" item xs={12} sm={12} md={6} lg={4} xl={4}>
                <a href="https://portfoliowebtwo.elvispro.cloud/" target="_blank" className='portfolio-img_projects'>
                    <div style={{ position: 'absolute', padding: '5px', backgroundColor: '#00BCD4', color: '#fff' }}>
                        Portfolio Web v2
                    </div>
                    <img loading="lazy" src="./img/projects/proj_webportfoliov2.png" alt="project.jpg" />
                </a>
            </Grid>
            <Grid className="animate__animated animate__bounceIn" item xs={12} sm={12} md={6} lg={4} xl={4}>
                <a href="https://yakusoft.elvispro.cloud/home" target="_blank" className='portfolio-img_projects'>
                    <div style={{ position: 'absolute', padding: '5px', backgroundColor: '#00BCD4', color: '#fff' }}>
                        Yakusoft
                    </div>
                    <img loading="lazy" src="./img/projects/proj_yakusoftpng.png" alt="project.jpg" />
                </a>
            </Grid>
        </Grid>
    )
}
