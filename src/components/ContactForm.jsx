import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useStaticQuery, graphql } from "gatsby";

const ContactForm = () => {
  const { formspreeId } = useStaticQuery(query).site.siteMetadata;
  const [state, handleSubmit] = useForm(formspreeId);
  if (state.succeeded) {
    return <div>Your message has sent successfully!</div>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address:</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;

const query = graphql`
  query ContactForm {
    site {
      siteMetadata {
        formspreeId
      }
    }
  }
`;
