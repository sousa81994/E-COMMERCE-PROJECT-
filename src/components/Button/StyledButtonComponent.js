import styled from "styled-components"

export const StyledButtonComponent = styled.button`
    min-width: 125px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 25px 0 25px;
    font-size: 12px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    margin: 10px 10px;

    &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    }

    &:active {
      transform: translateY(1px);
    }

    &.google-sign-in {
      background-color: #4285f4;
      color: white;

      &.hover {
        background-color: #357ae8;
        border: none;
      }
    }
  }
  `;