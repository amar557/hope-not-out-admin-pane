import { FaCoins } from "react-icons/fa6";
function Cards() {
  return (
    <div className=" flex gap-5 justify-between  pe-8 py-12">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="p-3 bg-white rounded-lg w-1/4">
      <div className=" flex items-center justify-between ">
        <div>
          <p className="uppercase text-primary font-medium">today money</p>
          <h1 className="font-bold text-lg">$50505</h1>
        </div>
        <div className="grid place-items-center bg-blue-800 text-white w-10 h-10 rounded-full">
          <FaCoins />
        </div>
      </div>
      <div>
        <span className="font-semibold text-green-400">+25%</span>{" "}
        <span className="text-primary">still yesterday</span>
      </div>
    </div>
  );
}

export default Cards;
