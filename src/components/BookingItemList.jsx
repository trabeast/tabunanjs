import {Fragment} from "react";
import BookingItem from "./BookingItem";

export default function BookingItemList() {
  const items = [
    {
      key: "1",
      name: "Item 1",
      description: "This is an item that came first",
    },
    {
      key: "2",
      name: "Item 2",
      description: "This is an item that came second",
    },
  ];

  return (
    <ul>
      {items.map(({key, ...props}) => (
        <Fragment key={key}>
          <BookingItem id={key} {...props}></BookingItem>
        </Fragment>
      ))}
    </ul>
  );
}
