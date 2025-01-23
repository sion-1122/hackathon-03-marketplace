"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/cartProvider";
import { PulseLoader } from 'react-spinners';
const Checkout = () => {
  const { items: cartItems } = useCart();
  const [selectedPayment, setSelectedPayment] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    streetAddress: "",
    country: "",
    city: "",
    province: "",
    zip: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    country: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
  });

  const handlePaymentChange = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.streetAddress) newErrors.streetAddress = "Street Address is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.zip) newErrors.zip = "ZIP Code is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.email) newErrors.email = "Email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) return; 
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOrderSuccess(true);
    }, 3000); 
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <div className="pt-[100px] w-full">
        <Image
          src="/checkout.png"
          alt="Shop"
          width={1440}
          height={316}
          className="w-full"
        />
      </div>

      <h2 className="text-black font-bold text-2xl mt-6">Billing Details</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        {/*  Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
              Company Name (Optional)
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">
              Street Address
            </label>
            <input
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            {errors.streetAddress && <p className="text-red-500 text-xs mt-1">{errors.streetAddress}</p>}
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country / Region
            </label>
            <input
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              Town / City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>

          <div>
            <label htmlFor="province" className="block text-sm font-medium text-gray-700">
              Province
            </label>
            <input
              id="province"
              name="province"
              type="text"
              value={formData.province}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
              ZIP Code
            </label>
            <input
              id="zip"
              name="zip"
              type="text"
              value={formData.zip}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
              Additional Information
            </label>
            <input
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </form>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800">Product</h3>
          <div className="grid grid-cols-4 gap-4 mt-4 text-xs sm:text-sm text-gray-700 text-center">
            <p className="hidden sm:block font-medium">Product</p>
            <p className="hidden sm:block font-medium">Price</p>
            <p className="hidden sm:block font-medium">Subtotal</p>
          </div>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-4">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.product._id}
                className="grid grid-cols-4 gap-4 mt-4 items-center text-gray-800"
              >
                <p className="text-[#333333] text-sm sm:text-base lg:text-lg xl:text-xl col-span-2 sm:col-span-2 font-medium">
                  {item.product.title} x {item.count}
                </p>
                <p className="text-[#333333] text-sm sm:text-base lg:text-lg xl:text-xl text-center font-medium">
                  {item.product.price}
                </p>
                <p className="text-[#333333] text-sm sm:text-base lg:text-lg xl:text-xl text-center font-medium">
                  {item.product.price * item.count}
                </p>
              </div>
            ))
          )}

          <hr className="my-6 border-t border-gray-300" />

          {/* Payment Options */}
          <div className="text-[#9F9F9F] py-4">
            <div className="group mb-3">
              <label
                className={`inline-flex cursor-pointer items-center gap-3 mb-3 duration-300 ${
                  selectedPayment === "bank" ? "text-black" : ""
                }`}
                htmlFor="bank"
              >
                <input
                  className="peer sr-only"
                  onChange={() => handlePaymentChange("bank")}
                  type="radio"
                  name="payment"
                  id="bank"
                />
                <span className="w-3 h-3 border border-[#9F9F9F] rounded-full peer-checked:bg-black peer-checked:border-black"></span>
                Direct Bank Transfer
              </label>
              <p className={selectedPayment === "bank" ? "block" : "hidden"}>
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>
            </div>
            <div className="group">
              <label
                className={`inline-flex cursor-pointer items-center gap-3 mb-3 duration-300 ${
                  selectedPayment === "cash" ? "text-black" : ""
                }`}
                htmlFor="cash"
              >
                <input
                  className="peer sr-only"
                  onChange={() => handlePaymentChange("cash")}
                  type="radio"
                  name="payment"
                  id="cash"
                />
                <span className="w-3 h-3 border border-[#9F9F9F] rounded-full peer-checked:bg-black peer-checked:border-black"></span>
                Cash On Delivery
              </label>
              <p className={selectedPayment === "cash" ? "block" : "hidden"}>
                Pay when your order arrives at your address.
              </p>
            </div>
          </div>

          <p className="mb-8">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
            <b>privacy policy.</b>
          </p>

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-6 py-3 bg-white text-black border-[1px] border-black font-semibold hover:bg-gray-100"
            disabled={!selectedPayment} // Disable the button until a payment method is selected
          >
            Place order
          </button>

          {/* Loading */}
          {loading && (
            <div className="flex justify-center items-center mt-4">
              <PulseLoader color="#B88E2F" size={15} />
              <span className="ml-4">Placing your order...</span>
            </div>
          )}

          {/* Successfully Message */}
          {orderSuccess && !loading && (
            <div className="text-center text-green-500 mt-4 font-semibold">
              <p>Dear {formData.firstName} {formData.lastName},</p>
              <p>Your order has been placed successfully!</p>
              <p>It will be delivered to: {formData.streetAddress}, {formData.city}, {formData.country}, ZIP: {formData.zip}</p>
              <p>Estimated delivery time: 3-5 business days.</p>
            </div>
          )}
        </div> 
      </div>
    </div>
  );
};
export default Checkout;
