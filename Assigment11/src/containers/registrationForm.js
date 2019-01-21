import React, { Component } from "react";
import FormInput from "../components/formInput";
import Header from "../components/header";
import classes from "./registrationForm.module.scss";
import { required, minLen, isEmail } from "../validation";
import { updateObject } from "../utils";
import LabeledValue from "../components/labeledValue";

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

  handleSubmit = () => {
    const state = getInitialState();
    const submitedValues = {};
    submitedValues.email = this.state.formElements.email.value;
    submitedValues.password = this.state.formElements.password.value;
    submitedValues.age = this.state.formElements.age.value;
    state.submitedValues = submitedValues;
    this.setState(state);
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

    let submitedValues;

    if (this.state.submitedValues) {
      submitedValues = [];
      for (let key in this.state.submitedValues) {
        submitedValues.push(
          <LabeledValue
            label={key}
            value={this.state.submitedValues[key]}
            key={key}
          />
        );
      }
    }

    return (
      <>
        <div className={classes.Form}>
          <Header>Registration</Header>
          {formElements}
          <button
            disabled={!this.state.formIsValid}
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
        <div className={classes.Submited}>
          <Header>Submited</Header>
          {submitedValues}
        </div>
      </>
    );
  }
}

export default RegistrationForm;
