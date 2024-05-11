import { useState } from "react";
import EditForm from "../pages/EditForm";
import { deleteItem, getData } from "../Redux/Asynchronous";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Item({ data, id, category }) {
  const [curID, setCurID] = useState({ id: "", category: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-between px-5 " key={data.id}>
        <img src={data.urls && data.urls[0]} alt="" className="h-12 w-10" />
        <p className="text-xs ps-3">{data.text}</p>
        <p className="ms-4 flex-1">{data.price}</p>
        <button
          className="me-4 bg-[#28a745] px-3 text-sm py-[3px] rounded-md capitalize text-white"
          onClick={() => navigate(`/category/${category}/${id}`)}
        >
          edit
        </button>
        <button
          className="me-4 text-sm  bg-[#0090ff] px-3 py-[3px] rounded-md capitalize text-white"
          onClick={() => setCurID({ id, category })}
        >
          view
        </button>
        <button
          className="bg-[#de3545] text-sm px-3 py-[3px] rounded-md capitalize text-white"
          onClick={() => {
            dispatch(deleteItem({ id, category }));
            dispatch(getData(category));
          }}
        >
          delete
        </button>
        {curID.id && <EditForm setCurID={setCurID} curID={curID} />}
      </div>
    </>
  );
}

export default Item;
