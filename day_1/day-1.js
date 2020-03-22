export const handle = input => {
  const masses = input.split("\n").map(mass => +mass);
  const fuel = masses.map(mass => calculateFuel(mass));

  const fuelTotal = fuel.reduce((a, b) => a + b, 0);

  return fuelTotal;
};

const calculateFuel = mass => {
  return Math.floor(mass / 3) - 2;
};
