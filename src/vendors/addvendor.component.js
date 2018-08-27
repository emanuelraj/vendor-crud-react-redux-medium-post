import React, { Component } from 'react';
import AppBar from '../_components/appbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from '../_components/nav'; 
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { vendorAction } from '../_actions';
import { withRouter } from 'react-router-dom';


const drawerWidth = 240;

const styles = theme => ({

    root: {
        flexGrow: 1,
      },

  contentRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
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

class AddVendor extends Component {
  
    handleChange = prop => event => {
        const { dispatch } = this.props;
        dispatch(vendorAction.onChangeProps(prop, event));
    };

    componentDidMount() {
        const { match : {params } } = this.props;

        if(params.id){
            const { dispatch } = this.props;
            dispatch(vendorAction.getVendorById(params.id));
        }
    }


    handleClick(event){
        const { match : {params } } = this.props;
        const { dispatch } = this.props;
            
        let payload={
            name: this.props.vendor.name,
            mobile: this.props.vendor.mobile,
            phone_number: this.props.vendor.phone_number,
            address: this.props.vendor.address,
        }

        if(params.id){
            dispatch(vendorAction.editVendorInfo(params.id, payload));
        }else{
            dispatch(vendorAction.createVendor(payload));
        }
    }


   render() {
     const { classes } = this.props;
     const { match : {params } } = this.props;
     console.log(this.props.vendor);
     

     function InsertText(props) {
        return <Typography>{'Add New Vendor'}</Typography>;
      }
      
      function EditText(props) {
          return <Typography>{'Edit Vendor'}</Typography>;
      }


    function SegHeader() {
        if(params.id){
            return <EditText />;
        }
        return <InsertText />;
    }
     
      return (
        
        <div className={classes.root}>
            <div className={classes.appFrame}>
            <AppBar/>
            <Nav />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <SegHeader />
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={3} container justify="flex-end">                            
                    </Grid>
                </Grid>
                <br />
                <br />
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <div>
                            <Paper className={classes.contentRoot} elevation={1}>
                                <form className={classes.container}>
                                    <Grid container spacing={24}>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="name"
                                                label="Name"
                                                className={classes.textField}
                                                value={this.props.vendor.name}
                                                onChange={this.handleChange('name')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="mobile"
                                                label="Mobile"
                                                className={classes.textField}
                                                value={this.props.vendor.mobile}
                                                onChange={this.handleChange('mobile')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="phone_number"
                                                label="Phone"
                                                className={classes.textField}
                                                value={this.props.vendor.phone_number}
                                                onChange={this.handleChange('phone_number')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="address"
                                                label="Address"
                                                multiline
                                                rowsMax="4"
                                                className={classes.textField}
                                                value={this.props.vendor.address}
                                                onChange={this.handleChange('address')}
                                                margin="normal"
                                            />
                                        </Grid>
                                    </Grid>
                                    <br />
                                    <Grid container spacing={24}>
                                        <Grid item xs={3}>
                                        </Grid>
                                        <Grid item xs={6}>
                                        </Grid>
                                        <Grid item xs={3} container justify="center">
                                            <Grid container spacing={24}>
                                                <Grid item xs={6} container justify="center">
                                                    <Button variant="contained" color="secondary" className={classes.button} component='a' href="/vendor">
                                                        Cancel
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={6} container justify="flex-start">
                                                    <Button variant="contained" color="primary" className={classes.button} onClick={(event) => this.handleClick(event)}>
                                                        Save
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </form>
                            </Paper>
                        </div>
                    </Grid>
                </Grid>
            </main>
            </div>
        </div>
      );
   }
}

//export default Home;

AddVendor.propTypes = {
    classes: PropTypes.object.isRequired,
};


//export default BoxCon
const mapStateToProps = (state) =>{
    return state;
}


const connectedAddVendorPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(AddVendor)));

export { connectedAddVendorPage as AddVendor };