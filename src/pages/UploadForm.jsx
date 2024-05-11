import { collection, addDoc } from "firebase/firestore";
// import { firestore, storage } from "../FireBase/firebase";
import { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { firestore, storage } from "../Firebase/firebase";
function UploadForm({ addItem, setAddItem }) {
  const [imges, setimg4] = useState("");
  const [loading, setLoading] = useState(false);
  const [text, settext] = useState("");
  const [rate, setrate] = useState(0);
  const [isDiscount, setIsdiscount] = useState(true);
  const [discountRate, setDiscountRate] = useState(0);
  const [category, setcategory] = useState("men");
  async function handleDataSubmit(e) {
    e.preventDefault();
    if (!text || !rate || !category || !imges) return;
    setLoading(true);
    let urls = [];
    for (let i of imges) {
      if (!i.name) return;
      const mainref = ref(storage, `imges/${i.name + Date.now()}`);
      try {
        const uploadTask = await uploadBytes(mainref, i);
        const downloadUrl = await getDownloadURL(uploadTask.ref);
        urls.push(downloadUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    await addDoc(collection(firestore, category), {
      text,
      rate,
      isDiscount,
      discountRate,
      urls,
    });
    setimg4("");
    setDiscountRate("");
    setIsdiscount(false);
    setrate("");
    settext("");
    urls = [];
    setLoading(false);
  }
  console.log(loading);
  return (
    <form
      onSubmit={handleDataSubmit}
      className="w-1/2 mx-auto mt-5 p-3 bg-slate-400"
    >
      <div>
        <div className="block ">
          <label htmlFor="">select the category</label>
          <select
            name=""
            id=""
            onChange={(e) => setcategory(e.target.value)}
            className="border w-1/2 ms-5 p-2 rounded outline-none"
          >
            <option value="bestsellingproducts">bestsellingproducts</option>
            <option value="men">men</option>
            <option value="men-eastern">men eastern</option>
            <option value="women">women</option>
            <option value="women-eastern">women eastern</option>
            <option value="boys">boys</option>
            <option value="mini-boys">mini boys</option>
            <option value="girls">girls</option>
            <option value="mini-girls">mini girls</option>
            <option value="girls-eastern">eastern girls</option>
          </select>
        </div>
      </div>
      <div className="my-4">
        <input
          type="file"
          name="file-input"
          id="file-input"
          multiple
          onChange={(e) => setimg4(e.target.files)}
          class="file-input__input"
        />
        <label class="file-input__label" for="file-input">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="upload"
            class="svg-inline--fa fa-upload fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
            ></path>
          </svg>
          <span>Upload file</span>
        </label>
      </div>

      <div>
        <label htmlFor="">label</label>
        <input
          type="text"
          className="border w-full"
          onChange={(e) => settext(e.target.value)}
          value={text}
        />
      </div>
      <div>
        <label htmlFor="">rate</label>
        <input
          type="text"
          className="border w-full"
          onChange={(e) => setrate(Number(e.target.value))}
          value={rate}
        />
      </div>
      <div>
        <label htmlFor=""> check it if the product have Discount</label>

        <input
          type="checkbox"
          name=""
          id=""
          checked={isDiscount}
          onChange={(e) => setIsdiscount(e.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="">discount rate</label>
        <input
          type="text"
          className="border w-full"
          onChange={(e) => setDiscountRate(Number(e.target.value))}
          value={discountRate}
        />
      </div>
      <button
        onClick={handleDataSubmit}
        disabled={loading}
        className="disabled:bg-green-400 disabled:cursor-wait  border-0 p-2 bg-blue-600 px-4 mt-2 h-8 w-16 flex items-center justify-center"
      >
        {loading ? (
          <div
            class="w-3 h-3 rounded-full animate-spin
                    border  border-black border-t-transparent"
          ></div>
        ) : (
          "submit"
        )}
      </button>
    </form>
  );
}

export default UploadForm;
