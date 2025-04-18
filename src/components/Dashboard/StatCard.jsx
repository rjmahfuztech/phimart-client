import React from "react";

// eslint-disable-next-line no-unused-vars
const StatCard = ({ icon: Icon, title, value }) => {
  return (
    <div className="card w-full bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <div className="flex items-center gap-2">
          <Icon className="text-2xl text-primary" />
          <h2 className="card-title">{title}</h2>
        </div>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
