import {createContext, useContext} from "react";

/**
 * @typedef BookingContextValue
 * @type {Object}
 * @property {string} id
 * @property {string} name
 * @property {string} description
 */

/** @type {BookingContextValue} */
export const BookingContext = createContext(undefined);

export default function useBookingContext() {
  if (!BookingContext) {
    throw new Error(
      "BookingContext should be used within a BookingContext.Provider!",
    );
  }

  return useContext(BookingContext);
}
