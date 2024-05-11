import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Asynchronous";

const Context = createContext();

function ContextApi({ children }) {
  // const [data, setData] = useState([]);
  const select = useSelector((state) => state.data.productsdata.docs); // corrected typo in 'state'
  const isLoading = useSelector((e) => e.data.isLoading);
  // console.log(isLoading);

  // console.log(select);
  return (
    <Context.Provider value={{ data: select, isLoading }}>
      {children}
    </Context.Provider>
  );
}
export { Context, ContextApi };
