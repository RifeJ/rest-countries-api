import React from "react";
import { useEffect, useState } from "react";
import { DataFetch } from "../utils/DataFetch";
import LoadingSpiner from "../components/LoadingSpiner";
import { Search, ChevronDown } from "lucide-react";
import { Link } from "react-router";
function Main() {
  const [search, setSearch] = useState("");
  const { data, loading } = DataFetch(
    search === ""
      ? "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,cca3"
      : `https://restcountries.com/v3.1/name/${search}`,
  );

  if (loading) {
    return <LoadingSpiner />;
  }

  return (
    <div className="mt-10 px-10 ">
      <div>
        <div className="flex p-2 mb-5 rounded-md items-center border-2 w-75">
          <span>
            <Search />
          </span>
          <input
            type="text"
            className="p-4 outline-none "
            placeholder="Search for a country..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-4 gap-y-5 gap-x-5 items-center justify-center">
        {Array.isArray(data) ? (
          data.map((country) => {
            return (
              <Link
                to={`/country/${country.cca3}`}
                key={country.cca3}
                className="cursor-pointer hover:scale-105 bg-base-300">
                <img
                  src={country.flags.svg}
                  alt=""
                  className="w-full h-60 object-cover"
                />
                <p className="ml-4 m-4 text-3xl font-bold">
                  {country.name.common}
                </p>
                <p className="ml-4 mt-0.5  text-[18px]">
                  <span className="font-semibold">Population: </span>{" "}
                  {country.population}
                </p>
                <p className="ml-4 mt-0.5  text-[18px]">
                  <span className="font-semibold">Capital:</span>{" "}
                  {country.capital}
                </p>
                <p className="ml-4 mt-0.5 mb-15 text-[18px]">
                  <span className="font-semibold"> Region: </span>
                  {country.region}
                </p>
              </Link>
            );
          })
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default Main;
