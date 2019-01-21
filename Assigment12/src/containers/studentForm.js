import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

const StyledInput = styled.input`
`;
const StyledForm = styled.form`
  margin: 15px;
`;
const StyledLabel = styled.div`
  color: #353a46;
`;
const StyledLabeledInput = styled.div`
  margin: 5px;
`;
const SubmitButton = styled.button`
  margin: 5px;
  color: #353a46;
  background-color: #FFFFFF;
  border: none;
  border-bottom: 2px solid #000000;
  font-size: 15px;
  :hover {
    font-weight: 600;
  }
`;

class StudentForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    action: this.props.match.path === "/students/:id/edit" ? "edit" : "new"
  };

  async componentDidMount() {
    if (this.state.action === "edit") {
      const id = this.props.match.params.id;
      try {
        const student = (await instance.get(`/students/${id}`)).data;
        this.setState(prevState => ({
          ...prevState,
          firstName: student.firstName,
          lastName: student.lastName
        }));
      } catch (err) {}
    }
  }

  handleInputChanged = id => event => {
    let updatedState = {
      ...this.state,
      [id]: event.target.value
    };
    this.setState(updatedState);
  };

  submitForm = async event => {
    event.preventDefault();
    const student = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };
    if (this.state.action === "edit") student.id = this.props.match.params.id;
    try {
      if (this.state.action === "new")
        await instance.post("/student", { ...student });
      else await instance.put("/student", { ...student });
      this.setState({
        firstName: "",
        lastName: ""
      });
      this.props.history.push("/students");
    } catch (error) {}
  };

  render() {
    return (
      <StyledForm>
        <StyledLabeledInput>
          <StyledLabel>First Name</StyledLabel>
          <StyledInput
            type="text"
            onChange={this.handleInputChanged("firstName")}
            value={this.state.firstName}
          />
        </StyledLabeledInput>
        <StyledLabeledInput>
          <StyledLabel>Last Name</StyledLabel>
          <StyledInput
            type="text"
            onChange={this.handleInputChanged("lastName")}
            value={this.state.lastName}
          />
        </StyledLabeledInput>
        <SubmitButton onClick={this.submitForm}>Submit</SubmitButton>
      </StyledForm>
    );
  }
}

export default StudentForm;
