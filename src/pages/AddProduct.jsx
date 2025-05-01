import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import authApiClient from "../services/auth-api-client";
import apiClient from "../services/api-client";
import Swal from "sweetalert2";
import handleApiError from "../components/handleApiError";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [productId, setProductId] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Fetch categories
  useEffect(() => {
    apiClient
      .get("/categories/")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  });

  // Submit product details
  const onSubmit = async (data) => {
    try {
      const response = await authApiClient.post("/products/", data);
      if (response.status === 201) {
        // success message
        Swal.fire({
          icon: "success",
          title: "Product Added",
          text: `'${data.name}' successfully added.`,
        });
        setTimeout(() => {
          setProductId(response.data.id);
        }, 1000);
      }
    } catch (error) {
      handleApiError(error);
    }
  };

  // Handle image change
  const handleChangeImage = (e) => {
    const files = Array.from(e.target.files);
    setPreviewImages(() => files.map((file) => URL.createObjectURL(file)));
    setImages(files);
  };

  // Handle image upload
  const handleUploadImage = async () => {
    if (images.length === 0) return handleApiError("No images selected!");

    setLoading(true);
    try {
      for (const image of images) {
        const formData = new FormData();
        formData.append("image", image);
        await authApiClient.post(`/products/${productId}/images/`, formData);
      }
      // success message
      Swal.fire({
        icon: "success",
        title: "Images Added",
        text: "Product images successfully added.",
      });
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 px-2">
      <div className="shadow-md card-body bg-base-100 border border-gray-100 rounded-lg">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Add Product {productId && "Image"}
        </h1>
        {productId ? (
          <div className="mt-2">
            <input
              type="file"
              multiple
              accept="image/*"
              className="file-input file-input-primary w-full mb-2"
              onChange={handleChangeImage}
            />
            {previewImages.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center mb-2">
                {previewImages.map((src, index) => (
                  <img
                    className="w-16 h-16 object-cover rounded-lg"
                    key={index}
                    src={src}
                    alt="Preview Image"
                  />
                ))}
              </div>
            )}
            <button
              onClick={handleUploadImage}
              disabled={loading}
              className="btn btn-primary w-full"
            >
              {loading ? "Uploading images..." : "Upload Images"}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Product name  */}
            <div className="mb-2">
              <label htmlFor="name" className="font-medium">
                Product Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: true })}
                placeholder="product name"
                className={`input ${
                  errors.name ? "input-error" : "input-primary"
                } w-full`}
              />
              {errors.name && (
                <span className="text-red-500 mt-1 font-semibold">
                  Product name is required
                </span>
              )}
            </div>
            {/* Product description  */}
            <div className="mb-2">
              <label htmlFor="description" className="font-medium">
                Product Description
              </label>
              <textarea
                id="description"
                type="text"
                {...register("description", { required: true })}
                placeholder="product description"
                className={`textarea ${
                  errors.description ? "textarea-error" : "textarea-primary"
                } w-full`}
              ></textarea>
              {errors.description && (
                <span className="text-red-500 mt-1 font-semibold">
                  Product description is required
                </span>
              )}
            </div>
            {/* Product Price  */}
            <div className="mb-2">
              <label htmlFor="price" className="font-medium">
                Product Price
              </label>
              <input
                id="price"
                type="text"
                {...register("price", {
                  required: "This field is required",
                  validate: (value) => {
                    const parsedValue = parseFloat(value);
                    return (
                      !isNaN(parsedValue) ||
                      "Please write a valid price. not text!"
                    );
                  },
                })}
                placeholder="product price"
                className={`input ${
                  errors.price ? "input-error" : "input-primary"
                } w-full`}
              />
              {errors.price && (
                <span className="text-red-500 mt-1 font-semibold">
                  {errors.price.message}
                </span>
              )}
            </div>
            {/* Product Stock  */}
            <div className="mb-2">
              <label htmlFor="stock" className="font-medium">
                Product Stock
              </label>
              <input
                id="stock"
                type="number"
                {...register("stock", { required: true })}
                placeholder="product stock"
                className={`input ${
                  errors.stock ? "input-error" : "input-primary"
                } w-full`}
              />
              {errors.stock && (
                <span className="text-red-500 mt-1 font-semibold">
                  Product stock is required
                </span>
              )}
            </div>
            {/* Product Category  */}
            <div className="mb-2">
              <label htmlFor="category" className="font-medium">
                Product Category
              </label>
              <select
                id="category"
                defaultValue="Choose product category"
                {...register("category", { required: true })}
                className={`input ${
                  errors.category ? "select-error" : "select-primary"
                } w-full select`}
              >
                <option disabled={true}>Choose product category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.category && (
                <span className="text-red-500 mt-1 font-semibold">
                  Product category is required
                </span>
              )}
            </div>
            <button className="btn btn-primary w-full mt-2">Add Product</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
