import React from "react";
import styles from "../style/popup.module.css";

const EventBubblingUnblockedPopup = ({ closePopup }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    closePopup();
  };

  return (
    <div onClick={closePopup} className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">User Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default EventBubblingUnblockedPopup;
