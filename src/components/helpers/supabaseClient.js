import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";

function serverClient() {
  return createServerComponentClient({cookies});
}

export const supabaseServerComponentClient = serverClient();
