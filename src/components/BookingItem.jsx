"use client";

import {useState} from "react";
import Button from "./Button";
import BookingDialog from "./BookingDialog";

/**
 * @type {name: string, description: string}} BookingItemProps
 * @param {BookingItemProps} props
 */
export default function BookingItem({name, description}) {
  const [isDialogOpen, setDialogOpen] = useState(false);

  function handleClick() {
    setDialogOpen(!isDialogOpen);
  }

  return (
    <li>
      <article className="border-2 border-dotted rounded my-5 p-2">
        <h1>{name}</h1>
        <p>{description}</p>
        <div>
          <Button onClick={handleClick}>Book</Button>
        </div>
        <BookingDialog open={isDialogOpen}></BookingDialog>
      </article>
    </li>
  );
}
