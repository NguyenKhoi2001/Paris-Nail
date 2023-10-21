import React, { useState } from "react";
import styles from "./css/EmailForm.module.css";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
const EmailForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [technicianNote, setTechnicianNote] = useState("");
  const [serviceNote, setServiceNote] = useState("");

  const twoDaysFromNow = new Date();
  twoDaysFromNow.setDate(twoDaysFromNow.getDate() + 2);
  const minDate = twoDaysFromNow.toISOString().split("T")[0];

  const currentDate = minDate;
  const currentTime = new Date().toTimeString().split(" ")[0].slice(0, 5);

  const [date, setDate] = useState(currentDate);
  const [time, setTime] = useState(currentTime);

  const navigate = useNavigate();
  const formatDateTime = (date, time) => {
    const formattedDate = new Date(date + " " + time);

    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    return formattedDate.toLocaleDateString("en-US", options);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name &&
      phone &&
      email &&
      technicianNote &&
      serviceNote &&
      date &&
      time
    ) {
      const formattedDateTime = formatDateTime(date, time);

      let templateParams = {
        from_name: name,
        from_email: email,
        date_time: formattedDateTime,
        technician_note: technicianNote,
        service_note: serviceNote,

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
      let unfilledFields = [];
      if (!name) unfilledFields.push("name");
      if (!phone) unfilledFields.push("phone");
      if (!email) unfilledFields.push("email");
      if (!technicianNote) unfilledFields.push("technicianNote");
      if (!serviceNote) unfilledFields.push("serviceNote");

      if (!date) unfilledFields.push("date");
      if (!time) unfilledFields.push("time");

      if (unfilledFields.length > 0) {
        alert(
          `Please fill out the following fields before submitting: ${unfilledFields.join(
            ", "
          )}`
        );

        // Applying error class to unfilled fields
        unfilledFields.forEach((field) => {
          document.getElementById(field).classList.add(styles.error);
        });
      } else {
        alert("Some error happen, please try again");
      }
    }
  };
  return (
    <div className={styles.emailForm}>
      <div className={styles.title}>LET'S US KNOW WHAT YOU THINK</div>

      <form onSubmit={handleSubmit}>
        <div className={`${styles.inputRow} ${styles.desktopViewNameDateTime}`}>
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
              defaultValue={currentDate}
              min={minDate}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              className={styles.inputTime}
              type="time"
              defaultValue={currentTime}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>
        <div className={`${styles.inputRow} ${styles.mobileViewNameDateTime}`}>
          <div className={styles.inputText}>
            <div className={styles.inputDateTime}>
              <input
                className={styles.inputDate}
                type="date"
                defaultValue={currentDate}
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                className={styles.inputTime}
                type="time"
                defaultValue={currentTime}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
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
            <label htmlFor="technicianNote">
              Technician Note (who you want)
            </label>
            <input
              type="text"
              id="technicianNote"
              onChange={(e) => setTechnicianNote(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputRow}>
          <div className={styles.inputText}>
            <label htmlFor="serviceNote">Service Note</label>
            <input
              type="text"
              id="serviceNote"
              onChange={(e) => setServiceNote(e.target.value)}
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
