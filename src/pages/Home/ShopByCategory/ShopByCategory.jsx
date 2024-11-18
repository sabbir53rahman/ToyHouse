import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function ShopByCategory() {
  const [toysData, setToysData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((response) => response.json())
      .then((data) => {
        // Group toys by subCategory
        const groupedToys = data.reduce((acc, toy) => {
          const category = toy.subCategory;
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(toy);
          return acc;
        }, {});

        // Convert the grouped data into a format suitable for rendering tabs
        const formattedData = Object.keys(groupedToys).map((category) => ({
          category,
          toys: groupedToys[category],
        }));

        setToysData(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching toys data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  return (
    <section className="shop-by-category-section container mx-auto px-5 py-12">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">
        Shop by Category
      </h2>
      <Tabs>
        <TabList className="flex justify-center space-x-8 border-b border-blue-300 pb-2">
          {toysData.map((category, index) => (
            <Tab
              key={index}
              className="cursor-pointer text-lg text-blue-700 py-2 px-4 rounded-t-lg outline-none hover:bg-blue-100 transition-colors duration-300"
              selectedClassName="bg-blue-200 border-b-2 border-blue-700"
            >
              {category.category}
            </Tab>
          ))}
        </TabList>

        {toysData.map((category, index) => (
          <TabPanel key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {category.toys.slice(0, 3).map(
                (
                  toy,
                  idx // Show only the first 3 toys
                ) => (
                  <div
                    key={idx}
                    className="toy-item p-6 bg-gradient-to-br from-blue-100 to-white shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="relative">
                      <img
                        src={toy.pictureUrl} // Assuming pictureUrl is the correct field from your API
                        alt={toy.name}
                        className="w-full h-[300px] object-cover rounded-lg shadow-md"
                      />
                      <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                        {toy.rating} ★
                      </div>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-blue-700">
                      {toy.name}
                    </h3>
                    <p className="text-gray-600 mt-2">Price: ${toy.price}</p>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                )
              )}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </section>
  );
}

export default ShopByCategory;
