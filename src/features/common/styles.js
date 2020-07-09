import { makeStyles } from "@material-ui/core/styles";
import { theme } from '../../ui/theme'

export const useStyles = makeStyles({
    helperText: {
        color: theme.palette.primary.main,
        fontSize: `1em`,
        cursor: `pointer`
    },

    biteSkeleton: {
        opacity: .5,
        display: `flex`,
        position: `relative`,
        textAlign: `left`,
        marginBottom: 20,
        '& .image': {
            boxShadow: `3px 3px 4px 1px var(--darkBackground)`,
            width: 185,
            minWidth: 185,
            height: 185,
            objectFit: 'contain',
            [theme.breakpoints.down('xs')]: {
                margin: 10,
                width: 80,
                minWidth: 80,
                height: 80,
                borderRadius: `50%`,
                objectFit: 'contain',
                border: `none`,
                boxShadow: `none`,
            },
        },
        '& .content': {
            flexGrow: 1,
            width: `100%`,
            padding: 10,
            '& div': {
                marginBottom: 10
            },
            '& .handle': {
                width: `30%`,
                height: 20,
                backgroundColor: `var(--orange)`
            },
            '& .halfBody': {
                width: `50%`,
                height: 15,
                backgroundColor: `darkGrey`
            },
            '& .body': {
                width: `90%`,
                height: 15,
                backgroundColor: `darkGrey`
            },
            '& .date': {
                width: `30%`,
                height: 12,
                backgroundColor: `Grey`
            },
            '& .actionsLine': {
                marginTop: 20,
                width: 150,
                marginRight: 0,
                marginLeft: `auto`,
                height: 20,
                backgroundColor: `var(--primary)`
            }
        },
        '& .preloader': {
            opacity: `1 !important`,
            position: `absolute`,
            right: `50%`,
            marginRight: -40,
            top: `30%`
        }

    },

    biteDeatilsSkeleton: {
        opacity: .5,
        '& div': {
            marginBottom: 10
        },
        '& .image-wrapper': {
            textAlign: `center`,
            '& .image': {
                width: 180,
                minWidth: 180,
                height: 180,
                borderRadius: `50%`,
                objectFit: 'cover',
            }
        },
        '& .handle': {
            margin: `0 auto`,
            width: 100,
            height: 20,
            backgroundColor: `var(--primary)`
        },
        '& .date': {
            opacity: .6,
            width: 100,
            height: 12,
            backgroundColor: `darkGrey`
        },
        '& .body': {
            width: `90%`,
            height: 15,
            backgroundColor: `grey`
        },
        '& .halfBody': {
            width: `50%`,
            height: 15,
            backgroundColor: `grey`
        },
        '& .buttons': {
            width: 100,
            height: 18,
            backgroundColor: `var(--primary)`
        },
        '& .comments': {
            '& .title': {
                textAlign: `center`,
                marginBottom: `15px !important`
            }
        },
        '& .preloader': {
            opacity: `1 !important`,
            position: `absolute`,
            right: `50%`,
            marginRight: -40,
            top: `60%`
        }
    },

    profileCardSkeleton: {
        opacity: .5,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        padding: 20,
        position: `relative`,
        '& div': {
            marginBottom: 20
        },
        '& .image': {
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: `50%`,
        },
        '& .handle': {
            width: 100,
            height: 20,
            backgroundColor: `var(--primary)`
        },
        '& .bio': {
            width: `90%`,
            height: 15,
            backgroundColor: `grey`
        },
        '& .location': {
            width: 100,
            height: 15,
            backgroundColor: `grey`
        },
        '& .website': {
            width: 100,
            height: 20,
            backgroundColor: `var(--primary)`
        },
        '& .edit': {
            margin: `10 auto`,
            width: 150,
            height: 30,
            borderRadius: `5%`,
            backgroundColor: `var(--primary)`
        },
        '& .preloader': {
            position: `absolute`,
            right: `50%`,
            marginRight: -40,
            top: `60%`
        }
    },

    profileSkeleton: {
        position: `relative`,
        opacity: .5,
        display: `grid`,
        gridTemplateAreas: `
            'a b b c'
            `,
        [theme.breakpoints.down('xs')]: {
            gridTemplateAreas: `
            'b b b b'
            'a a c c'
            `,
        },
        '& .album': {
            margin: `10px auto`,
            width: 130,
            height: 35,
            backgroundColor: `var(--primary)`,
            gridArea: `a`
        },
        '& .friends': {
            margin: `10px auto`,
            width: 130,
            height: 35,
            backgroundColor: `var(--primary)`,
            gridArea: `c`
        },
        '& .content': {
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            gridArea: `b`,
            '& div': {
                marginBottom: 15
            },
            '& .image': {
                marginTop: -120,
                border: `5px solid ivory`,
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                maxWidth: '100%',
                boxShadow: `0 15px 30px 0 rgba(0, 0, 0, .5)`,
            },
            '& .handle': {
                width: 100,
                height: 20,
                backgroundColor: `var(--primary)`
            },
            '& .bio': {
                width: `90%`,
                height: 15,
                backgroundColor: `grey`
            },
            '& .location': {
                width: 100,
                height: 15,
                backgroundColor: `grey`
            },
            '& .website': {
                width: 100,
                height: 20,
                backgroundColor: `var(--primary)`
            },
            '& .edit': {
                margin: `10 auto`,
                width: 150,
                height: 30,
                borderRadius: `5% `,
                backgroundColor: `var(--primary)`
            },
        },
        '& .preloader': {
            position: `absolute`,
            right: `50% `,
            marginRight: -40,
            top: `45%`
        }

    },

    userSkeleton: {
        position: `relative`,
        opacity: .5,
        padding: 10,
        width: 230,
        [theme.breakpoints.down('xs')]: {
            width: 300,
        },
        margin: 5,
        textAlign: `center`,
        '& svg, span': {
            verticalAlign: 'middle'
        },
        '& .handle': {
            width: 100,
            height: 20,
            backgroundColor: `var(--secondary)`,
            margin: `5px auto`,
        },
        '& .image': {
            borderRadius: `50% `,
            width: 100,
            minWidth: 100,
            height: 100,
            margin: `0 auto`,
            objectFit: 'cover',
            [theme.breakpoints.down('sm')]: {
                width: 100,
                minWidth: 100,
                height: 100,
            },
        },
        '& .location': {
            width: 120,
            height: 20,
            backgroundColor: `grey`,
            margin: `5px auto`,
        },
        '& .actions': {
            display: `flex`,
            justifyContent: 'center',
            alignItems: `center`,
            width: `100%`,
            '& .follow': {
                margin: 5,
                width: 100,
                height: 20,
                backgroundColor: `var(--primary)`
            },
            '& .send': {
                margin: 5,
                width: 30,
                height: 20,
                backgroundColor: `var(--secondary)`
            },
        },
        '& .preloader': {
            position: `absolute`,
            right: `50% `,
            marginRight: -30,
            top: `45%`
        }
    },

    playerSkeleton: {
        position: 'relative',
        opacity: .5,
        '& .image': {
            boxShadow: `0 30px 30px rgba(0, 0, 0, .5)`,
            width: 300,
            height: 300
        },
        '& .progress': {
            width: 250,
            margin: `30px auto`,
            height: 5,
            borderRadius: 3,
            background: `var(--darkNav)`,
        },
        '& .controls': {
            marginBottom: 20,
            fontSize: 60,
            display: `flex`,
            justifyContent: `space-evenly`,
            alignItems: `center`
        },
        '& .playBtn': {
            borderRadius: `50%`,
            cursor: `pointer`,
            transition: `opacity 0.3s ease-out`,
            width: 60,
            height: 60,
        },
        '& .playlistOptions': {
            display: `flex`,
            justifyContent: `space-evenly`,
            marginBottom: 20,
        },
        '& .preloader': {
            position: `absolute`,
            right: `50% `,
            marginRight: -40,
            top: `20%`
        }
    }
})