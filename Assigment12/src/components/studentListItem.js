import React from "react";
import styled from "styled-components";

const StyledListItem = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #ffffff;
  margin-bottom: 2px;
  color: #656a76;
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 19px;
  :hover {
    font-size: 16px;
  }
`;

const StyledListItemColumn = styled.div`
  display: inline-block;
  margin-left: 10px;
  width: 100px;
  box-sizing: border-box;
  :hover {
    font-weight: ${props => (props.clickable ? 600 : "initial")};
    cursor: ${props => (props.clickable ? "pointer" : "initial")};
  }
`;

const StudentListItem = props => (
  <StyledListItem>
    <StyledListItemColumn>{props.firstName}</StyledListItemColumn>
    <StyledListItemColumn>{props.lastName}</StyledListItemColumn>
    <StyledListItemColumn clickable onClick={props.edit}>
      Edit
    </StyledListItemColumn>
    <StyledListItemColumn clickable onClick={props.delete}>Delete</StyledListItemColumn>
  </StyledListItem>
);

export default StudentListItem;
