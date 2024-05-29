export const transform = (data) => {
  const outputData = [];
  data.forEach((entry) => {
    const pickupLocation = entry.pickup;
    const destinations = entry.destinations;

    const formattedEntry = {
      pickup: pickupLocation,
      destinations: Object.entries(destinations).map(
        ([destination, price]) => ({
          destination: destination,
          price: price,
        })
      ),
    };

    outputData.push(formattedEntry);
  });

  console.log(outputData);
};
