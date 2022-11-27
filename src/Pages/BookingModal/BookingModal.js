import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const BookingModal = ({ bookingModalData }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const meeting_location = form.meeting_location.value;
    const phone = form.phone.value;

    const orderData = {
        name,
        email, 
        product_name: bookingModalData?.product_name,
        price: bookingModalData?.sale_price,
        meeting_location,
        phone
    }
    console.log(orderData)
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Order Form</h3>
          <form
            onSubmit={handleOrder}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <h3 name="product_name" className="font-bold text-base">Product: {bookingModalData?.product_name}</h3>
            <input
              name="price"
              type="text"
              value={`Price $${bookingModalData?.sale_price}`}
              disabled
              className="input w-full input-bordered"
            />

            <input
              name="name"
              type="text"
              value={user?.displayName}
              disabled
              placeholder="Name"
              className="input w-full input-bordered"
            />

            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email"
              className="input w-full input-bordered"
            />

              <input
                name="meeting_location"
                type="text"
                placeholder="Meeting Location"
                className="input w-full input-bordered"
              />

              <input
                name="phone"
                type="text"
                placeholder="Phone"
                className="input w-full input-bordered"
              />
            <input
              type="submit"
              className="btn btn-accent w-full"
              value="Order"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingModal;
