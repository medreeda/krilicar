import { CarCard, CustomFilter, Hero, Searchbar } from "/components";
import { fetchCars } from "/utils";
import { mockCars } from "/utils/mockCars";
import { fuels, yearsOfProduction } from "/constants";
import { CarProps } from "/types";

export default async function Cars() {
  let allCars;
  try {
    allCars = await fetchCars({
      manufacturer: "Toyota",
      year: new Date().getFullYear(),
      fuel: "gas",
      limit: 10,
      model: "Camry",
    });


    // If no cars returned from API, use mock data
    if (!allCars || allCars.length === 0) {
      allCars = mockCars;
    }
  } catch (error) {
    console.error("Error fetching cars:", error);
    console.log("Using mock data instead");
    allCars = mockCars;

  }

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <Searchbar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car: CarProps) => (
                <CarCard key={`${car.make}-${car.model}-${car.year}`} car={car} />
              ))}

            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
