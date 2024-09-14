import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div data-aos="fade-up" data-aos-duration="1500" className="h-screen">
      <h1 className="font-bold lg:text-[64px] text-black mt-5 mx-10 text-[56px]">Contact</h1>
      <hr />
      <div className="mx-10">
      <h1 className="font-bold lg:text-[64px] text-black mt-5 text-[56px]">PPGP IT</h1>
      <p className="lg:text-[40px] text-[32px]"><span className="font-bold">Address : </span>11/18 soi7 Nakhon Pathom 73000</p>
      <p className="lg:text-[40px] text-[32px]"><span className="font-bold">Tel : </span>096-9870945</p>
      <p className="lg:text-[40px] text-[32px]"><span className="font-bold">E-mail : </span>PPGPITShop@gmail.com</p>
      </div>
      </div>
    </Layout>
  );
};

export default Contact;
