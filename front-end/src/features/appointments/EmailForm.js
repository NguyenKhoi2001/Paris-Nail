import React, { useState } from "react";
import styles from "./css/EmailForm.module.css";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
const EmailForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && phone && email && message && date && time) {
      let templateParams = {
        from_name: name,
        from_email: email,
        message: `You have an appointment scheduled on ${date} at ${time}. Message: ${message}`,
        phone: phone,
      };

      emailjs
        .send(
          "service_1b8d82p",
          "template_dtrtakb",
          templateParams,
          "WYvOaUrB0aoApHdUQ"
        )
        .then(
          (result) => {
            alert("Form sent successfully! Thankyou for booking");
            navigate("/");
          },
          (error) => {
            alert("Error sending information. Please try again.");
          }
        );
    } else {
      console.log(name, phone, email, message, date, time);
      alert(
        "Please fill out all fields before submitting. including the date and time"
      );
    }
  };
  return (
    <div className={styles.emailForm}>
      <div className={styles.title}>LET'S US KNOW WHAT YOU THINK</div>

      <form onSubmit={handleSubmit}>
        <div className={styles.inputRow}>
          <div className={styles.inputText}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.inputDateTime}>
            <input
              className={styles.inputDate}
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              className={styles.inputTime}
              type="time"
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputRow}>
          <div className={styles.inputText}>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputRow}>
          <div className={styles.inputText}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputRow}>
          <div className={styles.inputText}>
            <label htmlFor="message">Message</label>
            <input
              type="text"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.submitBtn}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
