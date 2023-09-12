import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { AiTwotoneMail, AiFillLock } from "react-icons/ai";

const MyForm: React.FC = () => {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Input 1:", input1);
    console.log("Input 2:", input2);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* logo div */}
      <div className={styles.img_logo}>
        <img
          src="https://png.pngtree.com/png-vector/20190429/ourmid/pngtree-business-corporate-s-letter-logo-png-image_996575.jpg"
          alt="Image Description"
          width={130}
          height={130}
          className={styles.rotate_360}
        />
      </div>

      {/* background div */}
      <div className={styles.background_div}>
        {/* welcome text div */}
        <div className={styles.text_div}>
          <h3>Welcome Back</h3>
          <p>Enter your credentials to access your account</p>
        </div>
        {/* Email input div */}
        <div className={styles.input_div}>
          <div className={styles.center}>
            <small>
              <AiTwotoneMail
                style={{ marginRight: "10px", color: "#4c32a8" }}
                size={24}
              />
            </small>
            <input
              type="text"
              id="input1"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              placeholder="Enter your email"
              className={styles.input_main}
            />
          </div>
        </div>
        {/* password div */}
        <div className={styles.input_div}>
          <div className={styles.center}>
            <small>
              <AiFillLock
                style={{ marginRight: "10px", color: "#4c32a8" }}
                size={24}
              />
            </small>
            <input
              type="text"
              id="input2"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              placeholder="Enter your password"
              className={styles.input_main}
            />
          </div>
        </div>
        <div className={styles.btn_div}>
          <button type="submit" className={styles.btn_btn}>
            Sign In
          </button>
        </div>
      </div>
      {/* forget password */}
      <div className={styles.forget_pass}>
        <small>
          Forget Password?
          <span style={{ color: "#4c32a8" }}>Reset Password</span>
        </small>
      </div>
    </form>
  );
};

export default MyForm;
