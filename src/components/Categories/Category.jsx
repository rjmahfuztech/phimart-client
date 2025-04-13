import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import CategoryItems from "./CategoryItems";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiClient
      .get("/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-5/6 mx-auto grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-4 my-12 md:my-20">
      {categories.map((category, index) => (
        <CategoryItems key={category.id} index={index} category={category} />
      ))}
    </div>
  );
};

export default Category;
