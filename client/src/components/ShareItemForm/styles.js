const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2
  },
  headline: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: 45,
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
    paddingLeft: 10
  },
  description: {
    paddingTop: 30,
    marginBottom: 25
  },
  share: {
    marginTop: 10,
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
  }
});

export default styles;
