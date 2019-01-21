import React from "react";
import StudentListItem from "./studentListItem";
import styled from "styled-components";

const StyledList = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #ffffff;
  margin-bottom: 2px;
  color: #656a76;
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 19px;
  margin: 20px;
`;
const StyledListColumns = styled.div`
  display: block;
  box-sizing: border-box;
`;
const StyledListColumn = styled.div`
  display: inline-block;
  width: 100px;
  margin: 10px 0px 10px 10px;
  font-weight: 600;
`;
const StyledListHeaderTitle = styled.div`
  font-size: 34px;
  display: block;
  display: inline-block;
  box-sizing: content-box;
  margin: 10px;
`;

const StyledListHeader = styled.div`
  width: 100%;
`;

const StyledListCreate = styled.div`
  display: inline-block;
  margin-left: 15px;
  font-size: 45px;
  :hover {
    color: rgb(29, 141, 57);
    cursor: pointer;
  }
`;

const StudentList = props => {
  const studentListItems = props.students.map(student => (
    <StudentListItem
      key={student.id}
      firstName={student.firstName}
      lastName={student.lastName}
      edit={() => props.editItem(student.id)}
      delete={() => props.deleteItem(student.id)}
    />
  ));
  return (
    <StyledList>
      <StyledListHeader>
        <StyledListHeaderTitle>Students</StyledListHeaderTitle>
        <StyledListCreate onClick={props.createItem}>+</StyledListCreate>
      </StyledListHeader>
      <StyledListColumns>
        <StyledListColumn>First Name</StyledListColumn>
        <StyledListColumn>Last Name</StyledListColumn>
        <StyledListColumn>Edit</StyledListColumn>
        <StyledListColumn>Delete</StyledListColumn>
      </StyledListColumns>
      {studentListItems}
    </StyledList>
  );
};

export default StudentList;
