import { secondsToMilliseconds } from "date-fns";
import useSWR from "swr";
import type { Gwei, WeiNumber } from "../constants/eth-units";
import type { DateTimeString } from "../constants/time";
import type { ApiResult } from "../utils/axios-fetchers";
import { fetchApiJson } from "./fetchers";
import { fetchJsonSwr } from "./fetchers";

export type BaseFeeAtTime = {
  block_number: number | null;
  timestamp: DateTimeString;
  wei: WeiNumber;
  blob_wei: WeiNumber | null;
};

export type BaseFeeOverTime = {
  barrier: Gwei;
  blob_barrier: Gwei;
  block_number: number;
  d1: BaseFeeAtTime[];
  d30: BaseFeeAtTime[];
  d7: BaseFeeAtTime[];
  h1: BaseFeeAtTime[];
  m5: BaseFeeAtTime[];
  since_burn: BaseFeeAtTime[];
  since_merge: BaseFeeAtTime[];
};

// todo: add a config apis endpoint global shared config map
// with key = service_name, value = service_endpoint
const url = "/api/v2/fees/base-fee-over-time";
export const fetchBaseFeeOverTime = (): Promise<ApiResult<BaseFeeOverTime>> =>
  fetchApiJson<BaseFeeOverTime>(url);

export const useBaseFeeOverTime = (): BaseFeeOverTime | undefined => {
  console.log("useBaseFeeOverTime url", url); 
  const { data, error } = useSWR<BaseFeeOverTime>(url, fetchJsonSwr, {
    // increase the refresh interval value to avoid fetch too frequent to ultra.money endpoint 
    refreshInterval: secondsToMilliseconds(10000),
  });

  if (error) { 
    console.error("Error fetching data ", error); 
  }

  console.log("fetch data content"); 

  return data;
};
