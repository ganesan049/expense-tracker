import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial State
const initialState = {
  transaction: [],
  error: null,
  loading: true,
};

//Create context
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Action
  const getTransaction = async () => {
    try {
      const res = await axios.get("/api/transactions");
      console.log(res.data);
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  };
  const deleteTransaction = async (id) => {
    try {
      const res = await axios.delete(`/api/transactions/${id}`);
      console.log(res.data);
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (error) {   
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  };
  const addTransaction = async (transaction) => {
    const config = {
      headers:{
        "Content-type":"application/json"
      },
    }
    try {
      const res = await axios.post("/api/transactions",transaction,config);
      console.log(res.data);
      dispatch({
        type: "ADD_TRANSACTION",
        payload: transaction,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction,
        getTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
