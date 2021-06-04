import React from "react";
import ContactForm from "../components/ContactForm";
import PageLayout from "../components/PageLayout";

const contact = () => {
  return (
    <PageLayout>
      <div className="content-container content-container--small">
        <ContactForm />
      </div>
    </PageLayout>
  );
};

export default contact;
