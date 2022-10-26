/* eslint-disable react-hooks/rules-of-hooks */
import mainStyles from "../styles/Main.module.css";
import Image from "next/image";
import { useState } from "react";

const register = () => {
  const [email, setEmail] = useState("");
  const [emailConfirm, setemailConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");

  const registerUser = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className={mainStyles.main}>
      <div className={mainStyles.sub1}>
        <Image
          src="/images/image-register.png"
          width="256px"
          height="715px"
          alt="registerimg"
        />
      </div>
      <div className={mainStyles.sub2}>
        <div className={mainStyles.imagetop}>
          <Image
            src="/images/registerlogo.png"
            width="380px"
            height="127px"
            alt="registerlogo"
          />
        </div>
        <form action="/api/register" onSubmit={registerUser} method="POST">
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="email"
            placeholder="confirm email"
            onChange={(e) => setemailConfirm(e.target.value)}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="confirm password"
            onChange={(e) => setpasswordConfirm(e.target.value)}
          />
          <br />
          {/* <div> */}
          <button type="submit" className={mainStyles.registerbtn}>
            <Image
              src="/images/register.png"
              width="334px"
              height="106px"
              alt="registerbtn"
            />
          </button>
          {/* </div> */}
        </form>
      </div>
    </main>
  );
};

export default register;
