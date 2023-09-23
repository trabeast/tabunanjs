"use client";

import Button from "./Button";
import {BookingContext} from "@/contexts/BookingContext";
import {useRouter} from "next/navigation";

/**
 * @typedef {Object} BookingItemProps
 * @property {string} id
 * @property {string} name
 * @property {string} description
 */

/**
 * @param {BookingItemProps} props
 */
export default function BookingItem({id, name, description}) {
  const router = useRouter();

  function handleClick() {
    router.push(`/booking/${id}`);
  }

  return (
    <BookingContext.Provider value={{name, description}}>
      <li>
        <article className="border-2 border-dotted rounded my-5 p-2">
          <h1>{name}</h1>
          <p>{description}</p>
          <div>
            <Button onClick={handleClick}>Book</Button>
          </div>
        </article>
      </li>
    </BookingContext.Provider>
  );
}
