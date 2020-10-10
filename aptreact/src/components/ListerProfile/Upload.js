import React, { useState } from "react";
import axios from "axios";
import "./ListerProfile.css";
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, ButtonToolbar, Button, Uploader, Radio, RadioGroup, Checkbox, CheckboxGroup, SelectPicker, Toggle, Input } from 'rsuite';
// import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import addy from "../../utils/address";
import 'rsuite/lib/styles/index.less';
import data from "../../utils/UsStates"


function Upload() {
    const [value, setValue] = useState(null);
    const styles = {
        padding: 20,
        textAlign: "center",
        lineHeight: "200px"
    };



    return (
        // This will allow the user to upload their new post
        // To be Coded:
        // a FORM that allows the user to input the URL (prop = url), DESCRIPTION (prop = description), and the LOCATION (prop = apt)
        // SUBMIT button that will send info to DB POST
        <div>
            <Form>

                <FormGroup>
                    <Uploader action="//jsonplaceholder.typicode.com/posts/" draggable>
                        <div style={styles}>Click or Drag files to this area to upload</div>
                    </Uploader>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Screen Name</ControlLabel>
                    <FormControl name="screenName" />
                    <HelpBlock>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Address: Will use Tylers Google Places API for autocomplete functionality. </ControlLabel>
                    <FormControl name="address" />
                    <HelpBlock tooltip>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Pick a US State. If we can get Google Places to work we won't need this</ControlLabel>
                    <SelectPicker className="picker" data={data} block />
                </FormGroup>
                <FormGroup> Will not need this either if google.
                <br />
                    <Input style={{ width: 300 }} placeholder="zip Code" />
                </FormGroup>
                <FormGroup> Need to change this to Number instead of String
                <br />
                    <Input style={{ width: 300 }} placeholder="square feet" />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Description. I don't know why it's not displaying with 5 rows.</ControlLabel>
                    <FormControl rows={5} name="description" componentClass="description" />
                </FormGroup>
                <FormGroup controlId="bedroomsList">
                    <ControlLabel>How many Bedrooms</ControlLabel>
                    <RadioGroup name="Bedrooms" inline>
                        <Radio value="1">1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                    </RadioGroup>
                </FormGroup>
                <FormGroup controlId="Bathrooms">
                    <ControlLabel>How many Bathrooms</ControlLabel>
                    <RadioGroup name="Bathrooms" inline>
                        <Radio value="1">1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                    </RadioGroup>
                </FormGroup>

                <FormGroup><ControlLabel>Is there a View?</ControlLabel>
                    <Toggle checkedChildren="Yes" unCheckedChildren="No" />
                </FormGroup>

                <FormGroup><ControlLabel>Is there a Park Nearby?</ControlLabel>
                    <Toggle checkedChildren="Yes" unCheckedChildren="No" />
                </FormGroup>


                <FormGroup><ControlLabel>Is it near transportation?</ControlLabel>
                    <Toggle checkedChildren="Yes" unCheckedChildren="No" />
                </FormGroup>


                <FormGroup><ControlLabel>Is there a Grocery Store nearby?</ControlLabel>
                    <Toggle checkedChildren="Yes" unCheckedChildren="No" />
                </FormGroup>

                <FormGroup>
                    <ButtonToolbar>
                        <Button appearance="primary">Submit</Button>
                        <Button appearance="default">Cancel</Button>
                    </ButtonToolbar>
                </FormGroup>
            </Form>
        </div >
    );
}

export default Upload;