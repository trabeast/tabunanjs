"use client";

import {useRef} from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function SignInForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="m-5 grid grid-cols-2 w-2/3">
        <Input
          label="Email"
          ref={emailRef}
          type="email"
          name="email"
          placeholder="user@sample.com"
          autoComplete="off"
          autoFocus="true"
        ></Input>
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
