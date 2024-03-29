import React from "react";
import Header from "../layout/Header"; 
import Footer from "../layout/Footer"; 
import Contents from "../layout/Contents";
import ContactCont from "../layout/Contact";


function Contact() {
  return (
    <>
      <Header />
      <Contents>
        <ContactCont />
      </Contents>
      <Footer />
    </>
  )
}

export default Contact;