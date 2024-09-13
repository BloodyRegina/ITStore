import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <Layout>
      <div className="h-screen w-full flex justify-center items-center flex-col gap-5" data-aos="fade-up" data-aos-duration="1500">
        <h1 className="font-bold text-4xl text-black">
          Sorry, Not Found :(
        </h1>
        <Link to="/" className="text-3xl text-white p-5 bg-black rounded-lg before:hidden">Back to Home</Link>
      </div>
    </Layout>
  );
};

export default NotFound;
