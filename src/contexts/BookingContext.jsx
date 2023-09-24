import {createContext, useContext} from "react";

/**
 * @typedef BookingContextValue
 * @type {Object}
 * @property {string} id
 * @property {string} name
 * @property {string} shortDescription
 * @property {string} description
 */

/** @type {BookingContextValue} */
export const BookingContext = createContext(undefined);

/**
 * @param {React.ReactNode} props
 * @param {BookingContextValue} props.value
 */
export function BookingContextProvider({children, value}) {
  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

export default function useBookingContext() {
  if (!BookingContext) {
    throw new Error(
      "BookingContext should be used within a BookingContext.Provider!",
    );
  }

  return useContext(BookingContext);
}
