import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Asynchronous";
import { Context } from "../context/context";
import { useLocation, useParams } from "react-router-dom";
import Item from "../components/Item";
function Men() {
  const { data } = useContext(Context);
  // console.log(data);
  const params = useParams();
  let param = params.categoryname;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(param));
  }, [param]);
  return (
    <div className="space-y-5">
      {data &&
        data.map((e) => (
          <Item key={e.id} category={param} data={e.data()} id={e.id} />
        ))}
    </div>
  );
}

export default Men;
