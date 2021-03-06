const styles = theme => ({
    root: {
      paddingTop: 200,
      height: 1000,
      backgroundColor: theme.palette.secondary.main
    },
    text: {
      color: theme.palette.primary.main,
      fontSize: '1.3rem',
      fontWeight: 500,
      lineHeight: 1.5,
      textAlign: 'center',
      paddingTop: 50
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  
  export default styles;