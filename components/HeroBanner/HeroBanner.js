import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import useStyles from './hero-banner-style';

function HeroBanner(props) {
  const { classes, cx } = useStyles();
  const { children } = props;
  return (
    <div className={classes.heroBannerWrap}>
      <div className={classes.leftDeco}>
        <div className={classes.big} />
        <div className={classes.small} />
      </div>
      <div className={classes.decoWrap}>
        <div className={cx(classes.deco, classes.bottom, classes.s1)}>&nbsp;</div>
        <div className={cx(classes.deco, classes.top, classes.s1)}>&nbsp;</div>
      </div>
      <Container className={classes.container}>
        {children}
      </Container>
    </div>
  );
}

HeroBanner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroBanner;
