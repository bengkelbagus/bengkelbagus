import { createContext, useState } from "react";

const DataContext = createContext({});

const DataProvider = () => {
  const [landingPage, setLandingPage] = useState(null);
  const [about, setAbout] = useState(null);

  return <></>;
};

export default DataProvider;
