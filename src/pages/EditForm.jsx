import { useEffect, useState } from "react";
import { firestore } from "../Firebase/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { RxCross2 } from "react-icons/rx";
function EditForm({ setCurID, curID }) {
  const [curData, setCurData] = useState({});
  useEffect(() => {
    async function getdata() {
      //   const data = [];
      const querySnapshot = await getDoc(
        doc(firestore, curID.category, curID.id)
      );

      setCurData(querySnapshot.data());
    }
    getdata();
  }, [curID]);
  console.log(curData);
  return (
    <>
      <div
        className="mt-0 bg-[#00000094] fixed top-0 right-0 z-0 h-screen w-full"
        onClick={() =>
          setCurID({
            id: "",
            category: "",
          })
        }
      ></div>
      <button
        className="absolute top-2 right-2 text-black bg-white p-3 rounded-full grid place-items-center"
        onClick={() => setCurID({ id: "", category: "" })}
      >
        <RxCross2 />
      </button>
      <div className="rounded-lg fixed top-1/2 left-1/2 w-1/2 h-1/2 overflow-hidden z-50 -translate-y-1/2 -translate-x-1/2 text-black bg-white">
        <div className="px-2 py-2">
          <div className="flex  items-center justify-center gap-x-2 h-32  ">
            {curData.urls &&
              curData.urls.map((e) => (
                <img
                  src={e}
                  alt="dskj"
                  className="w-1/2 object-contain h-full "
                />
              ))}
          </div>
          <div className="my-2">
            <span className="font-semibold capitalize">category:</span>
            {curID.category}
          </div>
          <div>price: {curData.rate}</div>
          <div>discount rate: {curData.discountRate}</div>
          <div>
            {curData.isDiscount
              ? `it has ${
                  ((curData.rate - curData.discountRate) / curData.rate) * 100
                }% discount`
              : " have no discount"}
          </div>
          {/* <div>price: {curData.rate}</div> */}
        </div>
      </div>
    </>
  );
}

export default EditForm;
