import { makeStyles } from "@material-ui/core/styles";
import { theme } from '../../ui/theme'
import { autoLogin } from "../Profile/model/actions";

export const useStyles = makeStyles({
    musicPlayer: {
        overflow: `hidden`,
        width: 300,
        transition: `height .5s`,
        margin: `0 auto`,
    },

    playlist: {
        display: `flex`,
        justifyContent: `space-evenly`,
        marginBottom: 20,
    },

    controls: {
        marginBottom: 10,
        fontSize: 60,
        display: `flex`,
        justifyContent: `space-evenly`,
        alignItems: `center`,
        '& .playBtn': {
            borderRadius: `50%`,
            cursor: `pointer`,
            transition: `opacity 0.3s ease-out`,
            width: 60,
            height: 60,
            '&:hover': {
                opacity: .7,
                transition: `opacity 0.3s ease-out`
            },
            '&:active': {
                transform: `translate(0, 1px)`
            }
        },
    },

    trackInfo: {
        textAlign: `center`,
        position: `relative`,
        '& .cover': {
            width: 300,
            height: 300,
            objectFit: 'cover',
            opacity: .4,
            boxShadow: `0px 15px 20px 0 rgba(0, 0, 0, .5)`,
            marginBottom: 20

        },
        '& .artist-song': {
            position: "absolute",
            width: `100%`,
            top: 30,
            textAlign: `center`,
            '& .artist': {
                textShadow: `2px 2px 2px var(--primary)`
            },
            '& .song': {
                textShadow: `2px 2px 2px var(--secondary)`
            },

        },
        '& .loading': {
            width: `100%`,
            position: `absolute`,
            marginTop: 120,
            textAlign: `center`,
            opacity: .5
        }
    },

    progress: {
        width: 250,
        margin: `10px auto`,
        '& .emptyBar': {
            height: 5,
            borderRadius: 3,
            background: `var(--darkNav)`,
            marginBottom: 5,
            cursor: `pointer`
        },
        '& .fillBar': {
            height: 5,
            background: `var(--primary)`,
            borderRadius: 3,
            transition: `width .2s ease-out`
        },
        '& .timer': {
            display: `flex`,
            justifyContent: `space-between`
        }
    },

    volume: {
        marginTop: 10,
        display: `flex`,
        alignItems: 'center',
        justifyContent: 'center',
        '& .slider': {
            width: 80,
            margin: '0 5px'
        }
    },

    trackList: {
        margin: 0,
        '& .track': {
            borderTop: `1px solid grey`,
            display: `flex`,
            alignItems: `center`,
            cursor: `pointer`,
            opacity: .8,
            padding: 0,
            "& .active": {
                color: `var(--primary)`
            },
            "& .small-cover": {
                width: 50,
                height: 50,
                objectFit: `cover`,
                marginRight: 5
            },
        },
    }
})