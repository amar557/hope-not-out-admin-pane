import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editItem, getDocData } from "../Redux/Asynchronous";

function EditingForm() {
  const d = useSelector((e) => e.edit.element?.data);
  const params = useParams();
  const [text, setlabel] = useState();
  const [rate, setRate] = useState();
  const [discountRate, setDiscountRate] = useState();
  const [isDiscount, setChecked] = useState(false);
  const [urls, setUrls] = useState([]);
  const dispatch = useDispatch();
  const { categoryname: category, id } = params;
  useEffect(() => {
    dispatch(getDocData({ category, id }));
  }, [category, id]);

  useEffect(() => {
    if (d) {
      console.log(d.urls || 0);
      setlabel(d.text || "");
      setRate(Number(d.rate || 0));
      setDiscountRate(Number(d.discountRate || 0));
      setChecked(d.isDiscount || true);
      setUrls(d.urls);
    } else {
      setlabel("");
      setRate(0);
      setDiscountRate(0);
      setChecked(false);
      setUrls([]);
    }
  }, [d]);
  const isLoading = useSelector((e) => e.edit.isLoading);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      editItem({ category, id, text, rate, isDiscount, discountRate, urls })
    );
    dispatch(getDocData({ category, id }));
    // console.log({ category, id, text, rate, isDiscount, discountRate, urls });
  }

  return (
    <>
      {!isLoading && (
        <div>
          <label htmlFor="" className="block mt-2">
            label
          </label>
          <input
            type="text"
            name="text"
            id=""
            onChange={(e) => setlabel(e.target.value)}
            className="border outline-none px-2 py-1 "
            defaultValue={text}
          />
          <label htmlFor="" className="block mt-2">
            price
          </label>
          <input
            type="number"
            name="rate"
            className="border outline-none px-2 py-1 "
            Value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
          />

          <label htmlFor="">check if the product have discount</label>
          <input
            type="checkbox"
            name="isDiscount"
            id=""
            checked={isDiscount}
            onChange={(e) => setChecked(e.target.checked)}
          />

          <label htmlFor="" className="block mt-2">
            discount rate
          </label>
          <input
            type="number"
            className="border outline-none px-2 py-1 "
            value={discountRate}
            name="discountRate"
            onChange={(e) => setDiscountRate(Number(e.target.value))}
            id=""
          />
          <button onClick={handleSubmit}>submit</button>
        </div>
      )}
    </>
  );
}

export default EditingForm;
