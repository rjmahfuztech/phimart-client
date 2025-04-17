import React, { useState } from "react";

const ErrorAlert = ({ error }) => {
  const [closeError, setCloseError] = useState(true);

  return (
    <>
      {error && closeError && (
        <div role="alert" className="alert alert-error flex justify-center">
          <svg
            onClick={() => setCloseError(false)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current cursor-pointer hover:text-gray-300 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="font-semibold">Error! {error}</span>
        </div>
      )}
    </>
  );
};

export default ErrorAlert;
