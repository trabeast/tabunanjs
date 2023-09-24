"use client";

import Button from "./Button";
import {
  BookingContext,
  BookingContextProvider,
} from "@/contexts/BookingContext";
import {useRouter} from "next/navigation";

/**
 * @typedef {Object} BookingItemProps
 * @property {number} id
 * @property {string} name
 * @property {string} shortDescription
 * @property {string} description
 */

/**
 * @param {BookingItemProps} props
 */
export default function BookingItem({
  id,
  name,
  short_description: shortDescription,
  description,
}) {
  const router = useRouter();

  function handleClick() {
    router.push(`/booking/${id}`);
  }

  return (
    <BookingContextProvider value={{name, shortDescription, description}}>
      <li>
        <article className="border-2 border-dotted rounded my-5 p-2">
          <h1>{name}</h1>
          <h2>{shortDescription}</h2>
          <p className="whitespace-pre-line">{description}</p>
          <div>
            <Button onClick={handleClick}>Book</Button>
          </div>
        </article>
      </li>
    </BookingContextProvider>
  );
}
