import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { validateEmail } from "../../../utils/index";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;
  const handleChange = (e) => {
    let targetName = e.target
    switch (targetName.name) {
      case "email":
        if (e.target.value.length === 0) {
          setErrorMessage(`Email is required.`);
        } else if (!validateEmail(targetName.value)) {
          setErrorMessage("Your email is invalid.");
        }
        break;
      case "name":
        if (e.target.value.length === 0) {
          setErrorMessage(`Name is required.`);
        } else {
          setErrorMessage('')
        }
        break;
      case "message":
        if (e.target.value.length === 0) {
          setErrorMessage(`Message is required.`);
        } else {
          setErrorMessage('')
        }
        break;
        default: 
        console.log("not working")
    }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
        }
      };

  // const handleChange = (e) => {
  //   if (e.target.name === "email") {
  //     const isValid = validateEmail(e.target.value);
  //     console.log(isValid);
  //     if (e.target.value.length === 0) {
  //       setErrorMessage(`${e.target.name} is required.`);
  //     }
  //      else if (!isValid) {
  //       setErrorMessage("Your email is invalid.");
  //     }  else {
  //       setErrorMessage("");
  //     } 
  //   }
  //   else {setErrorMessage(`${e.target.name} is required.`);}
  //   if (!errorMessage) {
  //     setFormState({ ...formState, [e.target.name]: e.target.value });
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm('service_g4erpwh', 'template_aguj0rr', e.target, 'user_nvwfFUIiN7fqhJUBnoL2A')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
}

  return (
    <div>
      <h1>Contact Me</h1>
      <Form onSubmit={handleSubmit && sendEmail}>
        <div>
          <label className="form-text">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            defaultValue={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-text">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label className="form-text">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            defaultValue={message}
            onBlur={handleChange}
          ></textarea>
        </div>
        {errorMessage && (
          <div>
            <p className="error-msg">{errorMessage}</p>
          </div>
        )}
        <div>
          <Button type="submit" size="lg">
            Send
          </Button>
		<div className="email">
		<h6>Email me directly at <a href='mailto: nick_clymer2018@yahoo.com'>nick_clymer2018@yahoo.com</a></h6>
		</div>
        </div>
      </Form>
    </div>
  );
};

export default Contact;
