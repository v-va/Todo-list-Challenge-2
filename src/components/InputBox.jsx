import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { resetInput, setTodo } from "../redux/modules/inputReducer";
import { addTodo } from "../redux/modules/todoReducer";
import uuid from "react-uuid";

const InputBox = () => {
    const id = uuid();
    const input = useSelector(state => state.input)
    const dispatch = useDispatch()
    
    const inputChangeHandler = (e) => {
        const {name, value} = e.target
        dispatch(setTodo({name, value}))

    }

    const addTodoHandler = (e) => {
        e.preventDefault()
        const newTodo = {
            id,
            title: input.title,
            content: input.content,
            isDone: false
        }
        dispatch(addTodo(newTodo))
        dispatch(resetInput())
    }

    return (
        <StInputContainer>
            <StInputWrap>
                <StInputLabel>제목</StInputLabel>
                <StInput type="text" name="title" onChange={inputChangeHandler} />

                <StInputLabel>내용</StInputLabel>
                <StInput type="text" name="content" onChange={inputChangeHandler} />
            </StInputWrap>
            <StAddButton onClick={addTodoHandler}>추가하기</StAddButton>
        </StInputContainer>
    );
};

export default InputBox;

const StInputWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const StInputLabel = styled.label`
    font-size: 16px;
    font-weight: 700;
`;

const StInputContainer = styled.form`
    background-color: #eee;
    border-radius: 12px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    gap: 20px;
`;

const StInput = styled.input`
    height: 40px;
    width: 240px;
    border: none;
    border-radius: 12px;
    padding: 0 12px;
`;

const StAddButton = styled.button`
    border: none;
    height: 40px;
    cursor: pointer;
    border-radius: 10px;
    background-color: teal;
    width: 140px;
    color: #fff;
    font-weight: 700;
`;
