function Sales() {
  const countriesData = [
    {
      country: "iran",
      //   RHEdlb0sFXxXSs+AAVhfQlJV0/Kv4BBjMI848b/CoAAAAASUVORK5CYII=",
    },
    { country: "china" },
    { country: "afghanistan" },
  ];
  return (
    <div className="w-[63%] bg-white rounded-xl px-4 py-5">
      <h1 className="capitalize font-semibold text-lg text-slate-700">
        sales by country
      </h1>
      <div className="pe-12 mt-3">
        {Array.from({ length: 5 }).map((e) => (
          <div className="flex w-full">
            <div>
              <img
                src="https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f0.svg"
                alt=""
                className="h-10 w-8"
              />
            </div>
            <div className="ms-5 leading-4 flex-1">
              <div className="text-slate-500 text-xs">country:</div>
              <div className="text-sm font-medium">pakistan</div>
            </div>
            <div className="flex-1">
              <div className="text-slate-500 text-sm">sales:</div>
              <div className="text-sm font-medium">15000</div>
            </div>
            <div className="flex-1">
              <div className="text-slate-500 text-sm">value:</div>
              <div className="text-sm font-medium">$150545</div>
            </div>
            <div className="">
              <div className="text-slate-500 text-sm">bounce:</div>
              <div className="text-sm font-medium">45%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sales;
