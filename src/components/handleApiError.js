import Swal from "sweetalert2";
// Handle API Error
const handleApiError = (
  error,
  defaultMessage = "Something Went Wrong, try again!"
) => {
  let ifError = "";
  if (error.response && error.response.data) {
    const errorMessage = Object.values(error.response.data).flat().join("\n");
    ifError = errorMessage;
  } else {
    error ? (ifError = error) : (ifError = defaultMessage);
  }
  if (ifError) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${ifError}`,
    });
  }
};

export default handleApiError;
