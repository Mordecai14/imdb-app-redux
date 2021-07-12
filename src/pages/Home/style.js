import { makeStyles } from '@material-ui/styles'

const centeredStyleObj = {
    display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
};

export default makeStyles({

    container: {
        ...centeredStyleObj,
        height: '100vh',
        flexDirection: 'column'
    },

    cardContainer: {
        ...centeredStyleObj,
        flexDirection: 'column',
        height: 200,
        padding: '2rem',
        width: 400
    },

    title: {
        fontSize: '4rem'
    },

    titleGridContainer: {
        ...centeredStyleObj
    },

    textFieldSearch: {
        width: '90%'
    },

    searchButton: {
        marginLeft: '.5rem'
    },

    buttonscontainer: {
        marginTop: '.5rem'
    },

    movieIcon: {
        fontSize: '4rem'
    }

});