import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import InputBox from "../components/InputBox";
import ContentBox from "../components/ContentBox";

const List = () => {
    return (
        <>
            <Layout>
                <Header />
                <InputBox />
                <ContentBox />
            </Layout>
        </>
    );
};

export default List;
