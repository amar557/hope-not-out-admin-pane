import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../Firebase/firebase";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import EditForm from "./EditForm";
import UploadForm from "./UploadForm";
import { useNavigate } from "react-router-dom";
function Products() {
  const [name, setName] = useState([]);
  const [curID, setCurID] = useState("");
  const [addItem, setAddItem] = useState(false);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  async function deleteItem(id) {
    const docu = await deleteDoc(
      doc(firestore, "minikids", "zxu2rtOhvDXdjkxv3Hu4")
    );
    console.log(docu);
  }

  async function editData() {
    const cityRef = doc(firestore, "minikids", "RoNyQIuGZbZZEwQcTT93");
    setDoc(cityRef, { discountRate: 500, name: "amar" });
  }

  useEffect(() => {
    const data = [];
    async function getdata() {
      const querySnapshot = await getDocs(
        collection(firestore, "bestsellingproducts")
      );
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, data: doc.data() });
      });
      setName(data);
    }
    getdata();
  }, []);
  console.log(name);
  return (
    <div className="space-y-2  ">
      <div className="flex items-center justify-end pe-5">
        <button
          className="text-end px-2 bg-blue-500 py-1 text-sm rounded-lg capitalize text-white "
          onClick={() => {
            setAddItem(true);
            navigate("/form");
          }}
        >
          add item
        </button>

        {/* <UploadForm addItem={addItem} setAddItem={setAddItem} /> */}
      </div>

      {name.map((e) => (
        <div className="flex items-center justify-between px-5" key={e.id}>
          <img
            src="https://www.hopenotout.com/cdn/shop/files/MS24007_1_540x.jpg?v=1712428841"
            alt=""
            className="h-12 w-10"
          />
          <p className="text-xs ps-3">{e.data.text}</p>
          <p className="ms-4 flex-1">{e.data.price}</p>
          <button
            className="me-4 bg-[#28a745] px-3 text-sm py-[3px] rounded-md capitalize text-white"
            onClick={editData}
          >
            edit
          </button>
          <button
            className="me-4 text-sm  bg-[#0090ff] px-3 py-[3px] rounded-md capitalize text-white"
            onClick={() => setCurID(e.id)}
          >
            view
          </button>
          <button
            className="bg-[#de3545] text-sm px-3 py-[3px] rounded-md capitalize text-white"
            onClick={deleteItem}
          >
            delete
          </button>
        </div>
      ))}
      {curID && (
        <EditForm setCurID={setCurID} curID={curID} category={category} />
      )}
    </div>
  );
}

export default Products;
