import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    margin-left: 380px;
    display: flex;
    align-items: center;
    max-width: 18.5%;
`;

export const AddButtom = styled.button`
    border: none!important;
    padding: 10px 10px;
    border-radius: 6px;
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    font-family: sans-serif;
    cursor: pointer;
    background-color: #05a005;
    margin-right: 10px;
    transition: transform 0.4s;
    &:hover {
        transform: scale(1.1);
    }
`;

export const RemButtom = styled.button`
    border: none!important;
    padding: 10px 10px;
    border-radius: 6px;
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    font-family: sans-serif;
    cursor: pointer;
    background-color: #a00505;
    transition: transform 0.4s;
    &:hover {
        transform: scale(1.1);
    }
`;