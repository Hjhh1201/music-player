
import { useContext } from "react";
import { MusicContext } from "../contexts/MusicContext"; 

export const useMusic = () => {
  const contextValue = useContext(MusicContext);
  if (!contextValue) {
    throw new Error("useMusic must be used inside of MusicProvider");
  }
  return contextValue;
};