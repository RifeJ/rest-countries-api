import React from "react";
import { useEffect, useState } from "react";
import LoadingSpiner from "../components/LoadingSpiner";
import { useParams } from "react-router";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { DataFetch } from "../utils/DataFetch";

function CountryPage() {
  const { id } = useParams();

  const { data, loading } = DataFetch(
    `https://restcountries.com/v3.1/alpha/${id}`,
  );

  if (loading) {
    return <LoadingSpiner />;
  }

  return (
    <div className="flex flex-col items-center justify-center m-10">
      <Link to={"/"} className="flex gap-4 bg-base-300 p-2 self-start">
        <ArrowLeft />
        <p className="text-xl font-bold capitalize">back</p>
      </Link>
      {data.map((country) => {
        const nativeNamesArray = Object.values(country.name.nativeName);
        const lastNativeName = nativeNamesArray.at(-1).official;

        const a = Object.values(country.currencies);
        const b = a.at(-1).name;

        const c = Object.values(country.languages);

        return (
          <div key={country.cca3} className="flex gap-10 w-full mt-10">
            <img
              src={country.flags.svg}
              alt={country.name.common}
              className="w-[50%]"
            />
            <div className="">
              <h1 className="text-5xl font-bold">{country.name.common}</h1>
              <div className="text-[20px]/[40px] gap-5 flex justify-between mt-5">
                <div>
                  <p className="">
                    <span className="font-extrabold">Native Name:</span>
                    {lastNativeName}
                  </p>
                  <p className="">
                    <span className="font-extrabold">Population:</span>
                    {country.population}
                  </p>
                  <p className="">
                    <span className="font-extrabold">Region:</span>
                    {country.region}
                  </p>
                  <p className="">
                    <span className="font-extrabold">Subregion:</span>
                    {country.subregion}
                  </p>
                  <p className="">
                    <span className="font-extrabold">Capital:</span>
                    {country.capital}
                  </p>
                </div>
                <div>
                  <p className="">
                    <span className="font-extrabold">Top Level Domain:</span>
                    {country.tld}
                  </p>
                  <p className="">
                    <span className="font-extrabold">Currencies:</span>
                    {b}
                  </p>
                  <p className="">
                    <span className="font-extrabold">Languages:</span>
                    {c}
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-10">
                <div className="flex flex-wrap items-center gap-4">
                  <h1 className="text-2xl font-bold">Border Countries:</h1>
                  {country.borders ? (
                    country.borders.map((borderCode) => (
                      <Link
                        key={borderCode}
                        to={`/country/${borderCode}`}
                        className="bg-base-300 px-5 py-1 ">
                        {borderCode}
                      </Link>
                    ))
                  ) : (
                    <p>❌</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CountryPage;
