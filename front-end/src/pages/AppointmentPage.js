import React from "react";
import styles from "./css/AppointmentPage.module.css";
import EmailForm from "../features/appointments/EmailForm";
import CancelSection from "../features/appointments/CancelSection";

function AppointmentPage() {
  return (
    <div className={styles.appointmentPage}>
      <EmailForm />
      <CancelSection />
    </div>
  );
}

export default AppointmentPage;
