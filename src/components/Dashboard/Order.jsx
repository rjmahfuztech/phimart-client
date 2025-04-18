import React from "react";

const Order = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Order Id</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="bg-base-200">
            <th>1</th>
            <td>$20230</td>
            <td>Sifat</td>
            <td>Pending</td>
            <td>April 18, 2025</td>
            <td>$520</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>$20230</td>
            <td>Sifat</td>
            <td>Pending</td>
            <td>April 18, 2025</td>
            <td>$520</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>$20230</td>
            <td>Sifat</td>
            <td>Pending</td>
            <td>April 18, 2025</td>
            <td>$520</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Order;
