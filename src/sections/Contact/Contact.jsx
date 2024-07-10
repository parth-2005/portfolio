import styles from './ContactStyles.module.css';
import { useState } from 'react';
import axios from 'axios';

function Contact() {
  // handle submit with axios and state
  const url = "https://email-server-alpha.vercel.app/send-email";
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const resetForm = () => {
    setState({ name: "", email: "", message: "" });
  }
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.log(state);
    e.preventDefault();
    // add circle loader
    alert("Sending message...");
    axios
      .post(url, {
        name: state.name,
        email: state.email,
        message: state.message,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Message Sent."); 
        } else {
          alert("Message failed to send.");
        }
      });
  };
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            onChange={
              handleChange
            }
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            onChange={handleChange}
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit"/>
      </form>
    </section>
  );
}

export default Contact;
