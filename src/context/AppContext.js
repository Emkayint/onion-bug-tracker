import React from "react";
import { useState } from "react";

const AppContext = React.createContext()

function BugTrackerContextsProvider({children}){
  const [user, setUser] = useState("")
  const [theme, setTheme] = useState(false)

  return <AppContext.Provider value={{user, setUser, theme, setTheme}} >{ children }</AppContext.Provider>
}

export {BugTrackerContextsProvider, AppContext}