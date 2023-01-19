import { Alert, Grid, Snackbar, ThemeProvider, Typography } from "@mui/material"
import { Send, InfoOutlined } from '@mui/icons-material';
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRequestApi } from "../hooks";
import { loading } from "../store/slice/PortfolioSlice";
import { useDispatch } from "react-redux";
import { GlobalTheme, CustomTextField, CustomButton, TextMaskCustom } from "./config/style_config";


export const Contact = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(loading(false));
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const { startSendMessage } = useRequestApi();

    const [values, setValues] = useState({
        phone: '(00) 000-0000-0',
    });

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        startSendMessage({
            to: '593983987321',
            body: '_Mensaje desde portfolio web_ \n\n*Nombre:* ' + data.firstName + '\n*E-mail*: ' + data.email + '\n*Phone:* ' + data.phone + '\n*Message:* ' + data.message,
            Priority: '10'
        }).then(function (result) {
            if (result) handleClick();
        });;
    }

    return (


        <>
            <section id="section-contact">

                <Grid container sx={{
                    width: '100%',
                    height: '100%',
                }}>
                    <ThemeProvider theme={GlobalTheme}>
                        <Grid className="animate__animated animate__fadeIn animate__delay-2s" sx={{
                            display: 'flex',
                            flexFlow: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#1A2027'
                        }} item xs={3} sm={3} md={2} lg={2} xl={2} >
                            <Typography sx={{ transform: 'rotate(270deg)' }} variant='contact_title' component="h1">
                                CONTACT
                            </Typography>
                        </Grid>
                        <Grid className="animate__animated animate__fadeIn animate__delay-2s" sx={{
                            display: 'flex',
                            flexFlow: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#262B32',
                            padding: '20px 0px 20px 0px'
                        }} item xs={9} sm={9} md={4} lg={4} xl={4} >

                            <form id="form-contact" onSubmit={handleSubmit(onSubmit)} style={{ width: '80%', display: 'flex', flexFlow: 'column', justifyContent: 'start', alignItems: 'start' }}>
                                <Typography sx={{ display: 'flex', flexFlow: 'row wrap' }} variant='contact_sub' component="h1">
                                    <div className="dash-pages"></div>Get In Touch
                                </Typography>
                                <CustomTextField
                                    sx={{ marginTop: '15px' }}
                                    {...register("firstName",
                                        {
                                            required: true,
                                            pattern: /^[A-Za-záéíóúÁÉÍÓÚñÑ]+$/i
                                        }
                                    )}
                                    fullWidth
                                    id="standard-required"
                                    label="Name:"
                                    variant="standard"
                                    className="txt_name animate__animated animate__slideInDown animate__delay-2s animate__faster"
                                />
                                {
                                    errors.firstName &&
                                    <Typography style={{ marginTop: '10px', marginBottom: '-2px' }} variant='contact_info_fields' component="h1">
                                        <InfoOutlined style={{ marginBottom: '-6px' }} /> Name required, string max 15, especial characters not allowed.
                                    </Typography>
                                }
                                <CustomTextField
                                    sx={{ marginTop: '15px' }}
                                    {...register("email",
                                        {
                                            required: true,
                                            pattern: /^[a-zA-Z0-9ñÑ_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i
                                        }
                                    )}
                                    fullWidth
                                    id="standard-required"
                                    label="E-mail:"
                                    variant="standard"
                                    className="txt_mail animate__animated animate__slideInDown animate__delay-2s animate__faster"
                                />
                                {
                                    errors.email &&
                                    <Typography style={{ marginTop: '10px', marginBottom: '-2px' }} variant='contact_info_fields' component="h1">
                                        <InfoOutlined style={{ marginBottom: '-6px' }} /> E-mail required, example@hotmail.com.
                                    </Typography>
                                }
                                <CustomTextField
                                    sx={{ marginTop: '15px' }}
                                    {...register("phone",
                                        {
                                            required: true,
                                            // valueAsNumber: true,
                                            pattern: /^[0-9-()+\s]+$/i
                                        }
                                    )}
                                    fullWidth
                                    label="Phone:"
                                    variant="standard"
                                    value={values.phone}
                                    onChange={handleChange}
                                    name="phone"
                                    id="formatted-text-mask-input"
                                    InputProps={{
                                        inputComponent: TextMaskCustom
                                    }}
                                    className="txt_phone animate__animated animate__slideInDown animate__delay-2s animate__faster"
                                />
                                {
                                    errors.phone &&
                                    <Typography style={{ marginTop: '10px', marginBottom: '-2px' }} variant='contact_info_fields' component="h1">
                                        <InfoOutlined style={{ marginBottom: '-6px' }} /> Phone required.
                                    </Typography>
                                }
                                <CustomTextField
                                    sx={{ marginTop: '15px' }}
                                    fullWidth
                                    {...register("message",
                                        {
                                            required: false,
                                            pattern: /^[A-Za-z0-9áéíóúÁÉÍÓÚñÑ]+$/i
                                        }
                                    )}
                                    multiline
                                    rows={3}
                                    id="standard-required"
                                    label="Message:"
                                    variant="standard"
                                    className="txt_message animate__animated animate__slideInDown animate__delay-2s animate__faster"
                                />
                                {
                                    errors.message &&
                                    <Typography style={{ marginTop: '10px', marginBottom: '-2px' }} variant='contact_info_fields' component="h1">
                                        <InfoOutlined style={{ marginBottom: '-6px' }} /> Especial characters not allowed.
                                    </Typography>
                                }
                                <CustomButton className="animate__animated animate__bounceIn animate__delay-2s" type='submit' sx={{ marginTop: '40px' }} variant="outlined" startIcon={<Send />} size='large'>
                                    Send
                                </CustomButton>
                            </form>
                            {/* Floating Alert Success */}
                            <Snackbar sx={{ zIndex: '999999999' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    Submitted successfully!, I will contact you soon &#128521;
                                </Alert>
                            </Snackbar>
                        </Grid>
                        <Grid className="animate__animated animate__fadeIn animate__delay-2s" sx={{
                            display: 'flex',
                            flexFlow: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                        }} item xs={12} sm={12} md={6} lg={6} xl={6} >

                            <iframe style={{ width: '100%', height: '100%' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31860.414899175892!2d-79.98115558692781!3d-3.4585048388938935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x90337182375299d1%3A0x61925fc8f0682977!2sSanta%20Rosa!5e0!3m2!1ses-419!2sec!4v1667242852445!5m2!1ses-419!2sec" frameBorder="0" allowFullScreen></iframe>

                        </Grid>
                    </ThemeProvider>
                </Grid>
            </section >
        </>
    )
}


