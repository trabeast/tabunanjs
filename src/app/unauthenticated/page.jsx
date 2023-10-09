import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

const Unauthenticated = async () => {
  const supabase = createServerComponentClient({cookies});

  const {
    data: {session},
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/");
  }

  return (
    <main>
      <section className="mx-5 py-10 px-5">
        <span>Unauthenticated!</span>
      </section>
    </main>
  );
};

export default Unauthenticated;
