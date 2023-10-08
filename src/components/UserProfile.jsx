"use client";

import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {useRouter} from "next/navigation";

const supabase = createClientComponentClient();

/**
 * @typedef {Object} UserProfileProps
 * @property {React.ReactNode} children
 *
 * @param {UserProfileProps} props
 */

const UserProfile = ({children}) => {
  const router = useRouter();

  async function signOut() {
    await supabase.auth.signOut();
    router.refresh();
  }

  return (
    <>
      <button>{children}</button>
      <button className="ml-5" onClick={signOut}>
        Sign Out
      </button>
    </>
  );
};

export default UserProfile;
