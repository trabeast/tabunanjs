import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";

function createSCClient() {
  return createServerComponentClient({cookies});
}

export const serverComponentClient = createSCClient();
