"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";
import {useRef} from "react";

export default function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="m-5">
        <Input
          label="Email"
          ref={emailRef}
          type="email"
          name="email"
          placeholder="user@sample.com"
          autoComplete="off"
          autoFocus="true"
        ></Input>
        <br />
        <Input
          label="Password"
          ref={passwordRef}
          type="password"
          name="password"
          autoComplete="off"
          placeholder="enter your password"
        ></Input>
      </div>
      <div className="float-left">
        <Button type="submit">
          <span>Continue</span>
        </Button>
        <Button>
          <span>Cancel</span>
        </Button>
      </div>
    </form>
  );
}
