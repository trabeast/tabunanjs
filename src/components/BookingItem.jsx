"use client";

import Button from "./Button";
import BookingDialog from "./BookingDialog";
import {BookingContext} from "@/contexts/BookingContext";
import {useRef} from "react";

/**
 * @type {name: string, description: string}} BookingItemProps
 * @param {BookingItemProps} props
 */
export default function BookingItem({name, description}) {
  const ref = useRef(null);
  function handleClick() {
    ref.current?.showModal();
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
          <BookingDialog ref={ref}></BookingDialog>
        </article>
      </li>
    </BookingContext.Provider>
  );
}
