import Cards from "../components/Cards";
import Categories from "../components/Categories";
import Chart from "../components/Chart";
import PaginationCard from "../components/PaginationCard";
import Sales from "../components/Sales";

function Dashboard() {
  return (
    <div className=" ">
      <Cards />

      <div className="flex gap-3 items-center">
        <Chart />
        <PaginationCard />
      </div>
      <div className="gap-3  flex items-start mt-5 ">
        <Sales />
        <Categories />
      </div>
    </div>
  );
}

export default Dashboard;
