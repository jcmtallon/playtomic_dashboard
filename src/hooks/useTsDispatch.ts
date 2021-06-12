import { useDispatch } from "react-redux";
import { TSDispath } from "../store/store";

export const useTsDispatch = () => useDispatch<TSDispath>();
