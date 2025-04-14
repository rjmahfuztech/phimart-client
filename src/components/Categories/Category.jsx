import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import CategoryItems from "./CategoryItems";
import ErrorAlert from "../ErrorAlert";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get("/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <section className="w-5/6 mx-auto my-12 md:my-20">
      <div className="flex flex-col sm:flex-row justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-start mb-2 sm:mb-0">
          See Categories
        </h2>
        <button className="btn btn-secondary text-lg px-6 py-5 rounded-full">
          View All
        </button>
      </div>
      {/* Loading  */}
      {isLoading && (
        <div className="text-center py-10">
          <span className="loading loading-spinner loading-xl text-secondary"></span>
        </div>
      )}
      {/* If error happen  */}
      {error && <ErrorAlert error={error} />}

      {/* Categories  */}
      {!isLoading && !error && categories.length > 0 && (
        <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <CategoryItems
              key={category.id}
              index={index}
              category={category}
            />
          ))}
        </div>
      )}
      {/* if no product available */}
      {!isLoading && !error && categories.length === 0 && (
        <h3 className="text-center text-2xl text-shadow-pink-500">
          No categories available!
        </h3>
      )}
    </section>
  );
};

export default Category;
