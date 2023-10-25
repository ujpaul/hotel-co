import React from "react";
import Appartments from "./components/appartments/Appartments";
import Categories from "./components/category/Categories";

export default function Home() {
  return (
    <>
      <Categories />
      <Appartments />
    </>
  );
}
