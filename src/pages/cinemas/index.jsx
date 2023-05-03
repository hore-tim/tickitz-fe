import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Layout from "components/Layout";

export default function Cinemas() {
    return(
        <>
        <Layout title={"Cinemas List"}>
        <div>
            <Navbar/>
            <Footer/>
        </div>
        </Layout>
        </>
    )
}