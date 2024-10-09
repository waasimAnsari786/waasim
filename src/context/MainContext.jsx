import { createContext, useContext, useRef } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const value = { aboutRef, skillsRef, projectsRef, contactRef };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export const useElementsRef = () => {
  return useContext(MainContext);
};
