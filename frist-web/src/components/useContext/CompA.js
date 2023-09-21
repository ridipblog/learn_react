import React from "react";
import ComB from "./ComB";
import { createContext } from "react";
export const NameContext = createContext();
export const EmailContext = createContext();
export default function CompA() {
  return (
    <div>
      <NameContext.Provider value={"Coder"}>
        <EmailContext.Provider value={"coder1@gmail.com"}>
          <ComB />
        </EmailContext.Provider>
      </NameContext.Provider>
    </div>
  );
}
