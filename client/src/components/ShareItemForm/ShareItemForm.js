import React, { Component } from 'react';
import { Form, Field } from "react-final-form";
import {TextField, Button, Input, Select, InputLabel, MenuItem, FormControl, ListItemText} from "@material-ui/core";
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class ShareItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  // onSubmit(o) {
  //   console.log("Submitting:", o);
  // }

   validate(o) {
     console.log("Validating:", o);
     const error = {};
     if(!o.name) {
       error.name = "Name is required";
     }
     if (!o.email) {
       error.email = "Email is required";
     } else if (!/.*@.*\..*/.test(o.email)) {
       error.email = "Email invalid";
     }
     return error;
   }

  render() {
    const { classes, tags } = this.props;
    console.log(this.props);
    return (
      <div className="App">
        <h1>Share. Borrow. Prosper.</h1>
        <Form 
        onSubmit={this.onSubmit}
        validate={this.validate}
        render={({ handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
            
            <Button size="small" color="primary">
            Select an image
            </Button> 
            
            <Field 
             name="name"
             render={({input, meta}) => (
               <div className="field">
                <TextField
                  id="standard-textarea"
                  label="Name your Item"
                  placeholder=""
                  multiline
                  className={classes.textField}
                  margin="normal"
                />
                
                {meta.touched && meta.invalid &&
                <div className="error" style={{color: "red", fontsize: "10px"}}>
                {meta.error}</div>}
                </div>
              )}
            /> 
            
            <Field 
             name="name"
             render={({input, meta}) => (
               <div className="field">
               <Input
                  placeholder="Describe your Item"
                  className={classes.input}
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                  />
                {meta.touched && meta.invalid &&
                <div className="error" style={{color: "red", fontsize: "10px"}}>
                {meta.error}</div>}
                </div>
             )} 
            /> 
            <Field
            name="tags"
             render={({classes, meta}) => (
               <div className="field">
            <FormControl fullWidth>
              <InputLabel htmlFor="tag-list">Add some tags</InputLabel>
              <Select
                value={tags}
                onChange={this.handleChange}
                inputProps={{name: 'Item tag'}}
                >
                    {tags.map(tag => (
                      <MenuItem key={tag.id} value={tag.title}>
                        <ListItemText primary={tag.title} />
                      </MenuItem>
                    ))}
              </Select>
            </FormControl> 
            </div>
             )}
            />

            <Button size="small" color="primary">
              Share
            </Button>  
            
            </form>
            )}
            />
        
      </div>
    );
  }
}

export default withStyles(styles)(ShareItemForm);
