import {Fragment} from "react";
import BookingItem from "./BookingItem";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";

/**
 * @typedef {Object} Cabin
 * @property {number} id
 * @property {string} name
 * @property {string} subname
 * @property {string} description
 *
 * @typedef {Object} FetchCabinsResponse
 * @property {Cabin[]} data
 * @property {Error} error
 *
 * @returns {Promise<FetchCabinsResponse>}
 */

const BookingItemList = async () => {
  const supabase = createServerComponentClient({cookies});
  const {data} = await supabase.from("cabins").select();

  return (
    <ul>
      {data?.map(({id, ...props}) => (
        <Fragment key={id}>
          <BookingItem
            id={id}
            shortDescription={props.short_description}
            {...props}
          ></BookingItem>
        </Fragment>
      ))}
    </ul>
  );
};

export default BookingItemList;
