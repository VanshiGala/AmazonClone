import React from "react";

function CustomerService() {
  return (
    <div className="mt-6 mb-4  justify-center p-8 space-y-4">
      <div className="border border-orange-500 bg-white text-black px-2 py-3 rounded flex w-auto ">
        <p className="text-sm ">
          You can view the content of this page in your preferred language, by
          clicking
          <span className="text-blue-600 underline cursor-pointer ml-1">
            here
          </span>
          .
        </p>
      </div>
      <div className="border border-orange-500 bg-white text-black px-2 py-3 rounded flex w-auto ">
        <p className="text-sm ">
          For information on our live sale events, including promotions, deals,
          cashbacks, and quick solutions, refer to our Help page on
          <span className="text-blue-600 underline cursor-pointer ml-1">
            Sale Events
          </span>
          .
        </p>
      </div>
      <div className="border border-orange-500 bg-white text-black px-2 py-3 rounded flex w-auto ">
        <p className="text-sm ">
          For support during your shopping journey, refer to the
          <span className="text-blue-600 underline cursor-pointer ml-1">
            Customer Service - Frequently Asked Questions
          </span>
          Help page.
        </p>
      </div>
      <h2 className="text-2xl">Hello. What can we help you with ?</h2>
      <div className="border-t-2 border-gray-700 w-full " />
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center ">
        <div className="border border-gray-500 flex  hover:bg-gray-200 cursor-pointer rounded-lg">
          <img src="orders.jpg" className="h-24 w-24 p-2" />
          <div className="flex flex-col">
            <h2 className="text-lg text-black ">Your Orders</h2>
            <p>Track packages</p>

            <p>Edit or cancel orders.</p>
          </div>
        </div>
        <div className="border border-gray-500 flex  hover:bg-gray-200 cursor-pointer rounded-lg">
          <img src="return-and-refund.png" className="h-24 w-24 p-2" />
          <div className="flex flex-col">
            <h2 className="text-lg text-black ">Return and Refunds</h2>
            <p>Return or Exchange items</p>
            <p>Print return mailing emails.</p>
          </div>
        </div>
        <div className="border border-gray-500 flex  hover:bg-gray-200 cursor-pointer rounded-lg">
          <img src="payment-setting.png" className="h-24 w-24 p-2" />
          <div className="flex flex-col">
            <h2 className="text-lg text-black ">Payment Settings</h2>
            <p>Add or Edit payment methods</p>
            <p>Change expired debit or credit cards</p>
          </div>
        </div>
        <div className="border border-gray-500 flex  hover:bg-gray-200 cursor-pointer rounded-lg">
          <img src="account-setting.png" className="h-24 w-24 p-2" />
          <div className="flex flex-col">
            <h2 className="text-lg text-black ">Account Settings</h2>
            <p>Change your Email or Password</p>
            <p>Update login information</p>
          </div>
        </div>
        <div className="border border-gray-500 flex  hover:bg-gray-200 cursor-pointer rounded-lg">
          <img src="digital-service.png" className="h-24 w-24 p-2" />
          <div className="flex flex-col">
            <h2 className="text-lg text-black ">
              Digital service and Device support
            </h2>
            <p>Find device help and support</p>
            <p>Troubleshoot device issues</p>
          </div>
        </div>
        <div className="border border-gray-500 flex  hover:bg-gray-200 cursor-pointer rounded-lg">
          <img src="manage-address.avif" className="h-24 w-24 p-2" />
          <div className="flex flex-col">
            <h2 className="text-lg text-black ">Manage Address</h2>
            <p>Update your address</p>
            <p>Add address, landmark details</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerService;
