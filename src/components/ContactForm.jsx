import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

const ContactForm = () => {
  const { formspreeId, recaptchaKey } = useStaticQuery(query).site.siteMetadata;
  const [state, handleSubmit] = useForm(formspreeId);
  if (state.succeeded) {
    return <div>Your message has sent successfully!</div>;
  }
  return (
    <form className="content-card" onSubmit={handleSubmit}>
      <Helmet>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Helmet>
      <label htmlFor="email">Email Address:</label>
      <input
        id="email"
        type="email"
        autoComplete="email"
        name="email"
        placeholder="Email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        placeholder="Message..."
        rows="10"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div className="g-recaptcha" data-sitekey={recaptchaKey}></div>
      <div className="button-row">
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

const query = graphql`
  query ContactForm {
    site {
      siteMetadata {
        formspreeId
        recaptchaKey
      }
    }
  }
`;
