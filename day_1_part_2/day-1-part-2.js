export const handle = input => {
  const masses = input.split("\n").map(mass => +mass);
  const fuel = masses.map(mass => calculateFuel(mass));

  const fuelTotal = fuel.reduce((a, b) => a + b, 0);

  return fuelTotal;
};

const calculateFuel = (mass, totalMass = 0) => {
  const fuelRequired = Math.floor(mass / 3) - 2;

  if (fuelRequired <= 0) return totalMass;

  return calculateFuel(fuelRequired, fuelRequired + totalMass);
};
