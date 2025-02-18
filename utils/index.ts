interface Car {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export const fetchCars = async (filters: {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}) => {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Get API key from environment variables
  const apiKey = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;
  
  if (!apiKey) {
    console.error("API key is missing. Please set NEXT_PUBLIC_RAPIDAPI_KEY in your environment variables.");
    return [];
  }

  const headers = {
    "x-rapidapi-key": "dd57aba9bcmshfd98c126e04fa90p117fbajsned28017ba7c1",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com"
  };

  try {
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}&limit=${limit}`,
      { 
        method: 'GET',
        headers
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
};

export const calculateCarRent = (cityMpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = cityMpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
