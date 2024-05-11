import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { firestore } from "../Firebase/firebase";

export const getData = createAsyncThunk("data", async function (doc) {
  const querySnapshot = await getDocs(collection(firestore, doc));
  return querySnapshot;
});
export const deleteItem = createAsyncThunk("delete", async function (e) {
  await deleteDoc(doc(firestore, e.category, e.id));
});

export const editItem = createAsyncThunk("edit", async function (e, data) {
  const { category, id, text, rate, isDiscount, discountRate, urls } = e;
  // console.log(category, id);
  const cityRef = doc(firestore, category, id);
  // console.log(e);
  setDoc(cityRef, { text, rate, isDiscount, discountRate, urls });
});
export const getDocData = createAsyncThunk("edit", async function (e) {
  // console.log(e);
  const docRef = doc(firestore, e.category, e.id);
  const docSnap = await getDoc(docRef);
  console.log(docSnap.data());
  return { data: docSnap.data(), id: docSnap.id };
});
