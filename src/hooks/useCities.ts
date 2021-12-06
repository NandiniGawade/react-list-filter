import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import axios from 'axios';
import cityData from '../data/nl.json';

// import { Ticket } from '../shared/types';

export type TicketsResponse = any[];

export const TICKETS_ENDPOINT = `https://simplemaps.com/data/nl-cities`;

const getCities = async (): Promise<TicketsResponse> => {
  try {
    // const res = await fetch(TICKETS_ENDPOINT);
    // console.log(res)
    // const data = await res.json();
    // console.log(data)
    return cityData;
  } catch (e:any) {
    const errorMessage = e.response?.data?.error?.message || e.message;

    throw new Error(errorMessage);
  }
};

export const useCities = (): UseQueryResult<TicketsResponse> => {
  return useQuery(TICKETS_ENDPOINT, getCities);
};
