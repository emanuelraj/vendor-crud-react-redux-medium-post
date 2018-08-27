import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';  
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AppBar from '../_components/appbar';
import Nav from '../_components/nav'; 


const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});


class Home extends Component {

   render() {
     const { classes } = this.props;

      return (

        <div className={classes.root}>
            <div className={classes.appFrame}>
            <AppBar/>
            <Nav />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography>{'Home'}</Typography>
            </main>
            </div>
        </div>
      );
   }
}
  
Home.propTypes = {
      classes: PropTypes.object.isRequired,
};
    
  
function mapStateToProps(state) {
    return state;
}


const connectedHomePage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(Home)));

export { connectedHomePage as Home };
  