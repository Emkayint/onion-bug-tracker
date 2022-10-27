import React from "react";
import { useState } from "react";

const AppContext = React.createContext()

function BugTrackerContextsProvider({children}){
  const [user, setUser] = useState("")
  const [theme, setTheme] = useState(false)
  const [active, setActive] = useState(1)
  return <AppContext.Provider value={{user, setUser, theme, setTheme, active, setActive}} >{ children }</AppContext.Provider>
}

export {BugTrackerContextsProvider, AppContext}