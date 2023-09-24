import {Fragment} from "react";
import BookingItem from "./BookingItem";
import {serverComponentClient} from "./helpers/client";

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
function fetchCabins() {
  return serverComponentClient.from("cabins").select();
}

export default async function BookingItemList() {
  const {data, error} = await fetchCabins();

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
}
