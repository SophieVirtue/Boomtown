const styles = theme => ({
    container: {
        backgroundColor: theme.palette.secondary.main,
        minHeight: '100uv',
        padding: 80
    },
    root: {
        paddingLeft: 20, 
        paddingRight: 20,
        paddingBottom: 40
    },
    paper: {
        padding: 48,
        paddingTop: 40,
        paddingBottom: 80
    },
    name: {
        marginBottom: 6
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 15
    },
    fullname: {
        color: theme.palette.grey.main,
        fontSize: 45
    },
    shared: {
        paddingLeft: 14,
        fontSize: 34,
        paddingTop: 3
    },
    number: {
        fontSize: 20
    },
    bio: {
        fontSize: 16,
        marginTop: 6
    },
    bold: {
        fontWeight: 'bold',
    }
});

export default styles;
