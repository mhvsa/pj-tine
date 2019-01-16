import React, { Component } from "react";
import FormInput from "../components/formInput";
import Header from "../components/header";
import classes from "./registrationForm.module.scss";
import { required, minLen, isEmail } from "../validation";
import { updateObject } from "../utils";

const getInitialState = () => ({
  formElements: {
    email: {
      type: "text",
      label: "Email",
      placeholder: "please provide an email",
      value: "",
      validation: value => isEmail(value),
      isValid: false,
      touched: false,
      invalidMessage: "Invalid Email"
    },
    password: {
      type: "password",
      label: "Password",
      placeholder: "password",
      value: "",
      validation: value => minLen(5, value),
      isValid: false,
      touched: false,
      invalidMessage: "Password has to be at least 5 characters long"
    },
    age: {
      type: "number",
      label: "Age",
      placeholder: "age",
      value: "",
      validation: value => required(value),
      isValid: false,
      touched: false,
      invalidMessage: "Age is required"
    }
  },
  formIsValid: false
});

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
    console.log(this.state);
  }

  inputChangedHandler = (event, inputId) => {
    let input = this.state.formElements[inputId];
    let updatedInput = updateObject(input, {
      value: event.target.value,
      touched: true,
      isValid: input.validation(event.target.value)
    });
    const updatedForm = updateObject(this.state.formElements, {
      [inputId]: updatedInput
    });
    let formIsValid = true;
    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].isValid && formIsValid;
    }
    this.setState({ formElements: updatedForm, formIsValid: formIsValid });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.formElements) {
      formElementsArray.push({
        id: key,
        config: this.state.formElements[key]
      });
    }
    let formElements = formElementsArray.map(element => (
      <FormInput
        key={element.id}
        label={element.config.label}
        valid={element.config.isValid}
        type={element.config.type}
        value={element.config.value}
        touched={element.config.touched}
        onChange={event => this.inputChangedHandler(event, element.id)}
        invalidMessage={element.config.invalidMessage}
      />
    ));
    return (
      <div className={classes.Form}>
        <Header>Registration</Header>
        {formElements}
        <button
          disabled={!this.state.formIsValid}
          onClick={() => this.setState(getInitialState())}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default RegistrationForm;
