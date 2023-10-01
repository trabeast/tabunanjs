"use client";

import {useRef, useState} from "react";
import {useRouter} from "next/navigation";
import Input from "./Input";
import Button from "./Button";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

const SignInForm = () => {
  const router = useRouter();

  /**
   * @typedef {'init' | 'sent' | 'error'} State
   * @type {[State, (state: State) => void]}
   */
  const [state, setState] = useState("init");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function signIn() {
    setState("sent");
    const {error} = await supabase.auth.signInWithPassword({
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });
    error ? setState("error") : router.back();
  }

  const disabled = state === "sent";

  return (
    <>
      <section className="m-5">
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset className="grid grid-cols-2 w-2/3">
            <Input
              label="Email"
              ref={emailRef}
              type="email"
              name="email"
              placeholder="user@sample.com"
              autoComplete="off"
              autoFocus="true"
              disabled={disabled}
            ></Input>
            <Input
              label="Password"
              ref={passwordRef}
              type="password"
              name="password"
              autoComplete="off"
              placeholder="enter your password"
              disabled={disabled}
            ></Input>
          </fieldset>
          <Button type="submit" onClick={signIn} disabled={disabled}>
            <span>Sign In</span>
          </Button>
          <Button onClick={() => router.back()} disabled={disabled}>
            <span>Cancel</span>
          </Button>
        </form>
      </section>
      <section className="m-5">
        <span>Not a user?</span>
        <Button onClick={() => router.push("/sign-up")}>
          <span>Sign Up</span>
        </Button>
      </section>
    </>
  );
};

export default SignInForm;
