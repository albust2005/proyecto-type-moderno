import { makeStyles } from 'tss-react/mui';

const counterStyles = makeStyles({ uniqId: 'counter' })((theme, _params, classes) => ({
  counterWrap: {
    margin: theme.spacing(3, 0)
  },
  text: {},
  counterItem: {
    '& p': {
      fontSize: 22,
      textTransform: 'uppercase'
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    alignItems: 'center',
    justifyContent: 'center',
    [`& .${classes.text}`]: {
      textAlign: 'center',
      '& h3': {
        position: 'relative',
        fontWeight: 'bold',
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(4),
        '&:after': {
          content: '""',
          width: 50,
          height: 8,
          borderRadius: 5,
          background: theme.palette.primary.main,
          position: 'absolute',
          bottom: theme.spacing(-2),
          left: 'calc(50% - 25px)'
        }
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
