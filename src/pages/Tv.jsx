import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Tv = () => {
  const [tvData, setTvData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch data from the public folder
    fetch("/Output.json")
      .then((response) => response.json())
      .then((data) => {
        setTvData(data);
        setFilteredData(data); // Initialize filteredData with all channels
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    let filtered = tvData;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(
        (channel) => channel.category === selectedCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((channel) =>
        channel.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(filtered);
  }, [selectedCategory, searchTerm, tvData]);

  // Get unique categories
  const categories = [...new Set(tvData.map((channel) => channel.category))];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex gap-10">
        {/* Category Dropdown */}
        <div className="mb-8 text-center">
          <label
            htmlFor="category"
            className="mr-2 text-lg font-semibold text-gray-700"
          >
            Filter by Category:
          </label>
          <select
            id="category"
            className="p-2 border rounded-md shadow-sm w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {/* Search Bar */}
        <div className="mb-8 text-center">
          <input
            type="text"
            placeholder="Search by name..."
            className="p-2 border rounded-md shadow-sm w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* TV Channels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">
        {filteredData.length > 0 ? (
          filteredData.map((channel, index) => (
            <div
              key={channel.id}
              className="border rounded-lg shadow-md p-6 bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={channel.image}
                alt={channel.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                <span className="text-lg font-medium text-gray-500">
                  {index + 1}.{" "}
                </span>
                {channel.name}
              </h2>
              <p className="text-center text-gray-500 mb-4">
                {channel.category}
              </p>
              <Link
                to={`/tv/${channel.id}`}
                className="block mt-4 bg-blue-500 text-white text-center py-3 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
              >
                Watch TV
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-600">No channels found</p>
        )}
      </div>
    </div>
  );
};

export default Tv;
