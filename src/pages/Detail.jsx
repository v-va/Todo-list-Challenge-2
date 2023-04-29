import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    console.log(id)
    
    const todos = useSelector((state) => state.todolist.find((todo) => {
        console.log(todo.id)
        return todo.id === id
    }));

    return (
        <div>
            <StContainer>
                <StDetail>
                    <div>
                        <StDetailHeader>
                            <div>ID : {id}</div>
                            <StButton onClick={() => navigate("/")}>이전으로</StButton>
                        </StDetailHeader>
                        <StTitle>{todos.title}</StTitle>
                        <StContent>{todos.content}</StContent>
                    </div>
                </StDetail>
            </StContainer>
        </div>
    );
};

export default Detail;

const StContainer = styled.div`
    border: 2px solid #eee;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StDetail = styled.div`
    width: 600px;
    height: 400px;
    border: 1px solid #c2c2c2;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StDetailHeader = styled.div`
    display: flex;
    height: 80px;
    justify-content: space-between;
    padding: 0 24px;
    align-items: center;
`;

const StTitle = styled.h1`
    padding: 0 24px;
`;

const StContent = styled.main`
    padding: 0 24px;
`;

const StButton = styled.button`
    border: 1px solid ${({ borderColor }) => borderColor};
    height: 40px;
    width: 120px;
    background-color: #fff;
    border-radius: 12px;
    cursor: pointer;
`;
