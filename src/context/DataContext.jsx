import { createContext, useContext, useState } from "react";

const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [graphParameters, setGraphParameters] = useState({
    stations: null,
    devices: null,
    dateRange: {
      start: null,
      end: null,
    },
  });
console.log(graphParameters)
  return (
    <DataContext.Provider
      value={{
        graphParameters,
        setGraphParameters,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
