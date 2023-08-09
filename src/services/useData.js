import { useEffect, useContext, useCallback } from "react";
import { GeneralContext } from "../context/GeneralContext";
import { GENERAL_QUOTES } from "../actions/types";

const useData = () => {
  const API = "https://type.fit/api/quotes";
  const { dispatch } = useContext(GeneralContext);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      dispatch({ type: GENERAL_QUOTES, payload: data });
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
    }
  }, [dispatch]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    fetchData,
  };
};

export default useData;
