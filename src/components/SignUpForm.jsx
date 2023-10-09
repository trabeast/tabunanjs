"use client";

import {useRef, useState} from "react";
import Input from "./Input";
import Button from "./Button";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {useRouter} from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();

  /**
   * @typedef {'init' | 'sent' | 'success' | 'error'} State
   * @type {[State, (state: State) => void]}
   */
  const [state, setState] = useState("init");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const supabase = createClientComponentClient();
  async function signUp() {
    setState("sent");
    const {error} = await supabase.auth.signUp({
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      options: {
        emailRedirectTo: `${location.origin}/${process.env.NEXT_PUBLIC_EMAIL_REDIRECT_TO}`,
      },
    });
    error ? setState("error") : setState("success");
  }

  const disabled = state === "sent" || state === "success";

  return (
    <>
      <section className="m-5">
        <form onSubmit={(e) => e.preventDefault()}>
          <legend>Create Account</legend>
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
          <Button type="submit" onClick={signUp} disabled={disabled}>
            <span>Sign Up</span>
          </Button>
          <Button onClick={() => router.back()} disabled={disabled}>
            <span>Cancel</span>
          </Button>
        </form>
      </section>
      <section className="m-5">
        {state === "success" && (
          <span>We have sent an email confirmation for your account!</span>
        )}
      </section>
    </>
  );
};

export default SignUpForm;
