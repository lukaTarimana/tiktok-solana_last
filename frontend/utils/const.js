import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import ticktock from "./ticktock_Clone.json";

export const SOLANA_HOST = clusterApiUrl("devnet");

export const TICKTOCK_PROGRAM_ID = new PublicKey(
  "3UUjfr2vkvTCE7g678sSQozrb8iuoHMs6yQQZcJw95Z2"
);
export const TICKTOCK_IDL = ticktock;
