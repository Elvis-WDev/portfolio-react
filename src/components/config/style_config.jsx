import styled from "@emotion/styled";
import { Box, Button, createTheme, Slider, Tab, Tabs, TextField, Typography } from "@mui/material";
import { forwardRef } from "react";
import { IMaskInput } from 'react-imask';

// const contact_theme = createTheme({
//     palette: {
//         cyan: {
//             main: '#5CCFEE',
//         }
//     },
//     typography: {
//         contact_title: {
//             fontSize: '60px',
//             '@media(min-width: 0px) and (max-width: 425px)': {
//                 fontSize: '45px',
//             },
//             fontFamily: 'CustomFont_Montserrat',
//             color: '#5CCFEE',
//             letterSpacing: '10px'
//         },
//         contact_sub: {
//             fontSize: '20px',
//             '@media(min-width: 0px) and (max-width: 425px)': {
//                 fontSize: '15px',
//             },
//             fontFamily: 'CustomFont_description',
//             color: '#fff'
//         },
//         contact_info_fields: {
//             fontSize: '15px',
//             fontFamily: 'CustomFont_description',
//             color: '#C4372C'
//         }
//     },
// });

///////////////////////
// Components THEME //
///////////////////////

export const GlobalTheme = createTheme({
    palette: {
        cyan: {
            main: '#5CCFEE',
        },
        dark: {
            main: '#34353A',
        },
    },
    typography: {
        // MENU BUTTON
        menu_title: {
            fontSize: '40px',
            fontFamily: 'CustomFont_Montserrat',
            color: '#fff',
        },
        // HOME COMPONENT
        name_home: {
            fontSize: '75px',
            fontFamily: 'CustomFont_Montserrat',
            '@media(min-width: 0px) and (max-width: 425px)': {
                fontSize: '50px',
            },
        },
        hi_home: {
            fontSize: '20px',
            '@media(min-width: 0px) and (max-width: 425px)': {
                fontSize: '15px',
            },
            fontFamily: 'CustomFont_Montserrat',
            backgroundColor: '#5CCFEE',
            width: '50%',
            textAlign: 'center',
            padding: '5px',
            borderRadius: '15px 15px 15px 0px / 15px 15px 15px 0px',
            color: '#2E2F34'
        },
        intro_home: {
            color: '#fff',
            fontFamily: 'CustomFont_Montserrat',

        },
        intro_home_title: {
            color: '#fff',
            fontSize: '50px',
            fontFamily: 'CustomFont_subtitle',

        },
        descrp_intro_home: {
            color: '#d8d8d8',
            fontSize: '15px',
            fontFamily: 'CustomFont_description',
        },
        // SKILLS/ABOUT COMPONENT
        skills_skill: {
            fontSize: '20px',
            fontFamily: 'CustomFont_subtitle',
            color: '#fff'
        },
        skills_lbl_sliders: {
            fontSize: '20px',
            fontFamily: 'CustomFont_description',
            color: '#fff',
        },
        skills_title_about: {
            color: 'white',
            fontSize: '60px',
            '@media(min-width: 321px) and (max-width: 425px)': {
                fontSize: '40px',
            },
            '@media(min-width: 0px) and (max-width: 320px)': {
                fontSize: '30px',
            },
            fontFamily: 'CustomFont_Montserrat',
            textAlign: 'start'
        },
        skills_title_pages: {
            color: 'white',
            fontSize: '20px',
            fontFamily: 'CustomFont_description',
            textAlign: 'start',
        }, skills_title_aboutDesc: {
            color: 'white',
            fontSize: '18px',
            '@media(min-width: 321px) and (max-width: 425px)': {
                fontSize: '15px',
            },
            '@media(min-width: 0px) and (max-width: 320px)': {
                fontSize: '12px',
            },
            fontFamily: 'CustomFont_description',
            textAlign: 'start',
        },
        // PORTFOLIO COMPONENT
        portfolio_title: {
            fontSize: '60px',
            fontFamily: 'CustomFont_Montserrat',
            color: '#5CCFEE',
            letterSpacing: '10px'
        },
        // CONTACT COMPONENT
        contact_title: {
            fontSize: '60px',
            '@media(min-width: 0px) and (max-width: 425px)': {
                fontSize: '45px',
            },
            fontFamily: 'CustomFont_Montserrat',
            color: '#5CCFEE',
            letterSpacing: '10px'
        },
        contact_sub: {
            fontSize: '20px',
            '@media(min-width: 0px) and (max-width: 425px)': {
                fontSize: '15px',
            },
            fontFamily: 'CustomFont_description',
            color: '#fff'
        },
        contact_info_fields: {
            fontSize: '15px',
            fontFamily: 'CustomFont_description',
            color: '#C4372C'
        }
    },
});

///////////////////////
// Components STYLED //
///////////////////////

// SKILLS COMPONENTS
export const CustomTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
    },
    '& .MuiTabs-indicatorSpan': {
        width: '100%',
        backgroundColor: '#5CCFEE',

    },
});

export const CustomTab = styled(Tab)({
    '&.MuiTab-root': {
        color: '#fff',
        borderBottom: 'none',
    },
    '&.Mui-selected': {
        color: '#5CCFEE'
    },
});

export function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export function A11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const PrettoSlider = styled(Slider)({
    color: '#5CCFEE',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#fff',
        color: '#34353A',
        fontWeight: 'bold',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});


// Contact COMPONENT
export const CustomTextField = styled(TextField)({
    '& .MuiInputLabel-root': {
        color: '#c1c1c1'
    },
    '&:hover .MuiInputLabel-root': {
        color: '#fff'
    },
    '& label.Mui-focused': {
        color: '#fff'
    },
    '& .MuiInput-root': {
        color: '#fff',
    },
    '&& .MuiInput-root:hover::before': {
        borderColor: '#fff'
    },
    '& .MuiInput-underline:before': {
        // borderBottom: '2px solid #fff',
        borderBottom: '2px solid #c1c1c1',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#fff',
    },
});

export const CustomButton = styled(Button)({
    '&.MuiButton-root': {
        color: '#5CCFEE',
        border: '1px solid #c1c1c1'
    },
    '&.MuiButton-root:hover': {
        color: '#fff',
        border: '1px solid #fff',
    }
});

export const TextMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="+(#00) 000-0000-0"
            definitions={{
                '#': /[0-9]/,
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});