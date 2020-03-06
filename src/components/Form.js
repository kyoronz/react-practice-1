import React, {Component} from 'react'

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';

import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'

import SimpleReactValidator from 'simple-react-validator';
import * as moment from 'moment';

//import * as contentful from 'contentful' //for http request

//constant
const PRIORITY_LOW = 'LOW'
const PRIORITY_MEDIUM = 'MEDIUM'
const PRIORITY_HIGH = 'HIGH'
const PRIORITY_MANDATORY = 'MANDATORY'

const CR_ENHANCEMENT = 'ENHANCEMENT'
const CR_DEFECT = "DEFECT"

const styles = theme => ({
    formLabel: {
        color: 'black'
    },
    formSelect: {
        marginTop: '.9rem',
    },
    formTitle:{
        marginTop: '1rem',
        marginBottom: '1rem'
    }
})

class Form extends Component{
    state = {
        //cr data
        cr_number : '',
        cr_type : '',
        request_type : '',

        description : '',
        reason : '',

        date_required : new Date().toISOString().substring(0, 10),
        priority : '',

        request_date : new Date().toISOString().substring(0, 10),
        requester : '',
        signature : false,

        //error handling
        error_cr_number : false, //no validation
        error_cr_type : false, //no validation
        error_request_type : false, //required

        error_description : false, //required
        error_reason : false, //required

        error_date_required : false, //required, date
        error_priority : false, //required

        error_request_date : false, //no validation
        error_requester : false, //required
        error_signature : false, //required

        //temp change request number
        id: 123,
    }

    handleChange(event) {
        const target = event.target;
        //const value = target.value;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(target.name);
        console.log(target.value);

        if(name === 'signature'){
            this.setState((state, props) => ({
                'signature': !this.state.signature
            }));
        }
        this.setState((state, props) => ({
            [name]: value
        }));
    }

    render(){
        const { classes } = this.props //get injected jss
        return (
            <Container style={{marginTop: '1rem'}}>
            <Grid container justify="center">
                <Typography variant='h4' classes={{root: classes.formTitle}}>Change Request Form</Typography>
            </Grid>
            <form action="#">
            <Grid container direction='column' spacing={2}>
                <Grid item xs>
                    <InputLabel htmlFor='cr_number' required classes={{root: classes.formLabel}} >CR Number</InputLabel>
                    <TextField
                        disabled
                        id='cr_number'
                        name="cr_number"
                        placeholder="CR000001"
                        value={this.state.cr_number}
                        onChange={this.handleChange}
                        margin='normal'
                        variant='outlined'
                        fullWidth
                        required
                        />

                </Grid>

                <Grid item xs>
                    <InputLabel htmlFor='cr_type' required classes={{root: classes.formLabel}}>Type of CR</InputLabel>
                    <FormControl fullWidth>

                    <RadioGroup
                        aria-label="cr_type"
                        name="cr_type"
                        value={this.state.cr_type}
                        onChange={this.handleChange}
                    >
                    <Grid container>
                        <Grid item sm={6} xs={12}>
                            <FormControlLabel value={CR_ENHANCEMENT} control={<Radio />} label="Enhancement" />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <FormControlLabel value={CR_DEFECT} control={<Radio />} label="Defect" />
                        </Grid>
                    </Grid>

                    </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs>
                    <InputLabel htmlFor='request_type' required classes={{root: classes.formLabel}} >Project/System/Initiative</InputLabel>
                    <TextField
                        id='request_type'
                        name="request_type"
                        placeholder=""
                        value={this.state.request_type}
                        onChange={this.handleChange}
                        onBlur={this.requestTypeValidation}
                        margin='normal'
                        variant='outlined'
                        fullWidth
                        required
                        error={this.state.error_request_type}
                        />
                    {this.state.error_request_type ?
                        <FormHelperText error>
                        {
                            this.validator.message(
                                'request_type',
                                this.state.request_type,
                                'required',{
                                    messages: {
                                        required: 'Project/System/Initiative is required'
                                    }
                                }
                            )
                        }
                        </FormHelperText> : ''}
                </Grid>

                <Grid item xs>
                    <InputLabel htmlFor='description' required classes={{root: classes.formLabel}} >Description of Request</InputLabel>
                    <TextField
                        id='description'
                        name="description"
                        placeholder=""
                        value={this.state.description}
                        onChange={this.handleChange}
                        onBlur={this.descriptionValidation}
                        margin='normal'
                        variant='outlined'
                        fullWidth
                        multiline
                        rows="4"
                        required
                        error={this.state.error_description}
                        />
                        {this.state.error_description ?
                            <FormHelperText error>
                            {
                                this.validator.message(
                                    'description',
                                    this.state.description,
                                    'required'
                                )
                            }
                            </FormHelperText> : ''}
                </Grid>

                <Grid item xs>
                    <InputLabel htmlFor='reason' required classes={{root: classes.formLabel}} >Reason for Change</InputLabel>
                    <TextField
                        id='reason'
                        name="reason"
                        placeholder="Eg:Legal Requirement, PDPA, etc."
                        value={this.state.reason}
                        onChange={this.handleChange}
                        onBlur={this.reasonValidation}
                        margin='normal'
                        variant='outlined'
                        fullWidth
                        required
                        error={this.state.error_reason}
                        />
                        {this.state.error_reason ?
                            <FormHelperText error>
                            {
                                this.validator.message(
                                    'reason',
                                    this.state.reason,
                                    'required'
                                )
                            }
                            </FormHelperText> : ''}
                </Grid>

                <Grid item xs>
                    <InputLabel htmlFor='date_required' required classes={{root: classes.formLabel}} >Date Required</InputLabel>
                    <TextField
                        id='date_required'
                        name="date_required"
                        placeholder="CR000001"
                        value={this.state.date_required}
                        onChange={this.handleChange}
                        onBlur={this.dateRequiredValidation}
                        margin='normal'
                        variant='outlined'
                        fullWidth
                        type="date"
                        required
                        error={this.state.error_date_required}
                        />
                        {this.state.error_date_required ?
                            <FormHelperText error>
                            {
                                this.validator.message(
                                    'date_required',
                                    this.state.date_required,
                                    'required|date_format'
                                )
                            }
                            </FormHelperText> : ''}
                    </Grid>
                <Grid item xs>
                    <InputLabel htmlFor='priority' required classes={{root: classes.formLabel}} >Priority</InputLabel>
                    <Select
                        name='priority'
                        displayEmpty
                        value={this.state.priority}
                        onChange={this.handleChange}
                        input={<OutlinedInput error={this.state.error_priority} classes={{root: classes.formSelect}}/>}
                        fullWidth
                        onBlur={this.priorityValidation}
                    >
                        <MenuItem value="">
                            <em>Choose your priority</em>
                        </MenuItem>
                        <MenuItem value={PRIORITY_LOW}>Low</MenuItem>
                        <MenuItem value={PRIORITY_MEDIUM}>Medium</MenuItem>
                        <MenuItem value={PRIORITY_HIGH}>High</MenuItem>
                        <MenuItem value={PRIORITY_MANDATORY}>Mandatory</MenuItem>
                    </Select>
                    {this.state.error_priority ?
                        <FormHelperText error>
                        {
                            this.validator.message(
                                'priority',
                                this.state.priority,
                                'required'
                            )
                        }
                        </FormHelperText> : ''}
                </Grid>

                <Grid item xs>
                    <InputLabel htmlFor='request_date' classes={{root: classes.formLabel}} >Request Date</InputLabel>
                    <TextField
                        id='request_date'
                        name="request_date"
                        placeholder="CR000001"
                        value={this.state.request_date}
                        onChange={this.handleChange}
                        margin='normal'
                        variant='outlined'
                        fullWidth
                        type="date"
                        disabled
                        required
                        />
                </Grid>

                <Grid item xs>
                    <InputLabel htmlFor='requester' required classes={{root: classes.formLabel}} >Requester Name</InputLabel>
                    <TextField
                        id='requester'
                        name="requester"
                        placeholder=""
                        value={this.state.requester}
                        onChange={this.handleChange}
                        margin='normal'
                        variant='outlined'
                        fullWidth
                        onBlur={this.requesterValidation}
                        required
                        error={this.state.error_requester}
                        />
                        {this.state.error_requester ?
                            <FormHelperText error>
                            {
                                this.validator.message(
                                    'requester',
                                    this.state.requester,
                                    'required'
                                )
                            }
                            </FormHelperText> : ''}
                </Grid>

                <Grid item xs>
                <Grid container spacing={2}>
                    <Grid item sm={10} xs={12}>
                        <FormControl fullWidth={true}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox id='signature' name='signature'></Checkbox>}
                                    label="I agree to Segment&#39;s Terms and Privacy Policy"
                                    labelPlacement="end"
                                    checked={this.state.signature}
                                    onChange={this.handleChange}
                                    onBlur={this.signatureValidation}
                                />
                            </FormGroup>
                        </FormControl>
                        {this.state.error_signature ?
                            <FormHelperText error>
                            {
                                this.validator.message(
                                    'signature',
                                    this.state.signature,
                                    'boolean_true',{
                                        messages: {
                                            boolean_true: 'You must agree to the terms and privacy policy to proceed'
                                        }
                                    }
                                )
                            }
                            </FormHelperText> : ''}
                    </Grid>
                    <Grid item sm={2} xs={12} justify="center" container>
                        <Button onClick={this.submit}  variant="contained" color="primary"
                            //type='submit' //submit buggy
                        >Submit</Button>
                    </Grid>
                </Grid>

                </Grid>

            </Grid>
            </form>
            </Container>
        )
    }

    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this)
        this.submit = this.submit.bind(this)

        //validator
        this.requestTypeValidation = this.requestTypeValidation.bind(this)
        this.descriptionValidation = this.descriptionValidation.bind(this)
        this.reasonValidation = this.reasonValidation.bind(this)
        this.dateRequiredValidation = this.dateRequiredValidation.bind(this)
        this.priorityValidation = this.priorityValidation.bind(this)
        this.requesterValidation = this.requesterValidation.bind(this)
        this.signatureValidation = this.signatureValidation.bind(this)
        this.validator = new SimpleReactValidator({
            element: false,
            validators: {
                date_format: {  // name the rule
                    message: 'The :attribute must be a date.',
                    rule: (val, params, validator) => {
                        return moment(val).isValid()
                    },
                    //required: true  // optional
                },
                boolean_true: {
                    message: 'The :attribute must be a boolean with true value',
                    rule: (val, params, validator) => {
                        return val === true
                    },
                }
            }
        });
    }

    componentDidMount() {
        this.initForm()
    }

    initForm() {
        //predefined content
        if(this.state.id >= 0){
            this.setState((state, props) => ({
                cr_number: 'CR' + this.getCRNumber(this.state.id)
            }))
        }
        else{
            this.setState((state, props) => ({
                cr_number: 'CR000000'
            }))
        }
        this.setState((state, props) => ({
            cr_type: CR_ENHANCEMENT
        }))
        this.refreshValidation()

        //content initialisation
    }

    getCRNumber(id){
        if(id.toString().length < 6){
            return ('000000' + this.state.id.toString()).slice(-6)
        }
        return id.toString()
    }

    clearInput() {
        return new Promise(resolve => this.setState((state, props) => ({
            //cr_number : '',
            cr_type : CR_ENHANCEMENT,
            request_type : '',

            description : '',
            reason : '',

            date_required : new Date().toISOString().substring(0, 10),
            priority : '',

            request_date : new Date().toISOString().substring(0, 10),
            requester : '',
            signature: false,

            error_cr_number : false, //no validation
            error_cr_type : false, //no validation
            error_request_type : false, //required

            error_description : false, //required
            error_reason : false, //required

            error_date_required : false, //required, date
            error_priority : false, //required

            error_request_date : false, //no validation
            error_requester : false, //required
            error_signature : false, //required
        }), resolve))
    }

    refreshValidation(){
        this.validator.message(
            'request_type',
            this.state.request_type,
            'required'
        )

        this.validator.message(
            'description',
            this.state.description,
            'required'
        )

        this.validator.message(
            'reason',
            this.state.reason,
            'required'
        )

        this.validator.message(
            'date_required',
            this.state.date_required,
            'required|date_format'
        )

        this.validator.message(
            'priority',
            this.state.priority,
            'required'
        )

        this.validator.message(
            'requester',
            this.state.requester,
            'required'
        )

        this.validator.message(
            'signature',
            this.state.signature,
            'boolean_true'
        )
    }

    submit() {
        //ISSUE:: allValid() not trigger is buggy
        if (this.validator.allValid() && this.isValidatorValid()) {
            this.clearInput().then(resolve => {
                return new Promise(resolve => this.setState({
                    //increment cr number
                    id: this.state.id + 1,
                    }, resolve))
                }).then(resolve => {
                    //initialise form
                    this.initForm()
                    alert('The change request is sent successfully.')
                    this.forceUpdate();
                })
        }
        else{
            this.requestTypeValidation();
            this.descriptionValidation();
            this.reasonValidation();
            this.dateRequiredValidation();
            this.priorityValidation();
            this.requesterValidation();
            this.signatureValidation();
        }
    }

    isValidatorValid(){
        return this.validator.fieldValid('request_type') &&
                this.validator.fieldValid('description') &&
                this.validator.fieldValid('reason') &&
                this.validator.fieldValid('date_required') &&
                this.validator.fieldValid('priority') &&
                this.validator.fieldValid('requester') &&
                this.validator.fieldValid('signature')
    }

    requestTypeValidation(){
        this.refreshValidation()
        if (this.validator.fieldValid('request_type')) {
            this.setState((state, props) => ({
                error_request_type: false,
            }))
        }
        else{
            this.setState((state, props) => ({
                error_request_type: true,
            }))
            this.validator.showMessageFor('request_type')
            this.forceUpdate();
        }
    }

    descriptionValidation(){
        this.refreshValidation()
        if (this.validator.fieldValid('description')) {
            this.setState((state, props) => ({
                error_description: false,
            }))
        }
        else{
            this.setState((state, props) => ({
                error_description: true,
            }))
            this.validator.showMessageFor('description')
            this.forceUpdate();
        }
    }

    reasonValidation(){
        this.refreshValidation()
        if (this.validator.fieldValid('reason')) {
            this.setState((state, props) => ({
                error_reason: false,
            }))
        }
        else{
            this.setState((state, props) => ({
                error_reason: true,
            }))
            this.validator.showMessageFor('reason')
            this.forceUpdate();
        }
    }

    dateRequiredValidation(){
        this.refreshValidation()
        this.validator.fieldValid('date_required')
        if (this.validator.fieldValid('date_required')) {
            this.setState((state, props) => ({
                error_date_required: false,
            }))
        }
        else{
            this.setState((state, props) => ({
                error_date_required: true,
            }))
            this.validator.showMessageFor('date_required')
            this.forceUpdate();
        }
    }

    priorityValidation(){
        this.refreshValidation()
        if (this.validator.fieldValid('priority')) {
            this.setState((state, props) => ({
                error_priority: false,
            }))
        }
        else{
            this.setState((state, props) => ({
                error_priority: true,
            }))
            this.validator.showMessageFor('priority')
            this.forceUpdate();
        }
    }

    requesterValidation(){
        this.refreshValidation()
        if (this.validator.fieldValid('requester')) {
            this.setState((state, props) => ({
                error_requester: false,
            }))
        }
        else{
            this.setState((state, props) => ({
                error_requester: true,
            }))
            this.validator.showMessageFor('requester')
            this.forceUpdate();
        }
    }

    signatureValidation(){
        this.refreshValidation()
        if (this.validator.fieldValid('signature')) {
            this.setState((state, props) => ({
                error_signature: false,
            }))
        }
        else{
            this.setState((state, props) => ({
                error_signature: true,
            }))
            this.validator.showMessageFor('signature')
            this.forceUpdate();
        }
    }
}

export default withStyles(styles)(Form)
