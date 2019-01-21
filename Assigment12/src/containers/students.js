import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import StudentList from "../components/studentList";

const StyledStudents = styled.div``;

const instance = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

class Students extends Component {
  state = {
    students: [],
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const response = await instance.get("/students");
      const students = response.data;
      this.setState(prevState => ({ ...prevState, students }));
    } catch (error) {
      this.setState(prevState => ({ ...prevState, loading: false, error }));
    }
  }

  deleteStudent = async id => {
    const student = this.state.students.find(student => student.id === id);
    try {
      const response = await instance.delete("/student", { data: student });
      const students = this.state.students.filter(student => student.id !== id);
      this.setState(prevState => ({ ...prevState, students }));
    } catch (error) {
      this.setState(prevState => ({ ...prevState, error }));
    }
  };

  editStudent = id => {
    this.props.history.push(`/students/${id}/edit`);
  };

  createStudent = () => {
    this.props.history.push("/students/new");
  };

  render() {
    return (
      <StyledStudents>
        <StudentList
          students={this.state.students}
          deleteItem={this.deleteStudent}
          editItem={this.editStudent}
          createItem={this.createStudent}
        />
      </StyledStudents>
    );
  }
}

export default Students;
