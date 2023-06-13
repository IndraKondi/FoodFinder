const form = document.getElementById("location-form");
const restaurantList = document.getElementById("restaurant-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const locationInput = document.getElementById("location");
  const location = locationInput.value;

  // Use an API service (e.g., Google Places API) to fetch nearby restaurant data based on the location
  // Process the response and generate HTML for each restaurant

  // Example code to generate restaurant data
  const restaurantData = [
    { name: "Restaurant 1", rating: 4.5 },
    { name: "Restaurant 2", rating: 3.8 },
    { name: "Restaurant 3", rating: 4.2 }
  ];

  // Clear existing list
  restaurantList.innerHTML = "";

  // Generate HTML for each restaurant
  restaurantData.forEach(function (restaurant) {
    const restaurantElement = document.createElement("div");
    restaurantElement.classList.add("restaurant");

    const nameElement = document.createElement("h3");
    nameElement.classList.add("restaurant-name");
    nameElement.textContent = restaurant.name;

    const ratingElement = document.createElement("p");
    ratingElement.classList.add("restaurant-rating");
    ratingElement.textContent = `Rating: ${restaurant.rating}`;

    restaurantElement.appendChild(nameElement);
    restaurantElement.appendChild(ratingElement);

    restaurantList.appendChild(restaurantElement);
  });
});
