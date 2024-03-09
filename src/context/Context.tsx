import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";

const UrlContext = createContext();

function Context(children) {
  const [currentuser, SetCurrentUser] = useState(false);
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        SetCurrentUser(user);
      } else {
        SetCurrentUser(false);
      }
    });

    return () => subscribe();
  }, [currentuser]);

  return (
    <UrlContext.Provider
      value={{
        currentuser,
        SetCurrentUser,
      }}
    >
      {children}
    </UrlContext.Provider>
  );
}

export default Context;

export const urlShort = () => useContext(UrlContext);
