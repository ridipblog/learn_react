import React, { useContext } from "react";
import { NameContext } from "./CompA";
import { EmailContext } from "./CompA";
export default function ComD() {
  const userName = useContext(NameContext);
  const email = useContext(EmailContext);
  return (
    <div>
      <h1>
        I Am Component D{userName}
        {email}
      </h1>
    </div>
  );
}
