"use client";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
type Card = {
  id: number;
  title: string;
  imageUrl: string;
  created: string;
  status: "Active" | "Unpaid";
  deliveryDate: string;
  signatures: number;
};

// const cards: Card[] = [
//   {
//     id: 1,
//     title: 'qwertyuio',
//     imageUrl: 'https://groupleavingcards.com/images/gift/collection_pot.png', // Replace with actual image path
//     created: '10/04/2024, 03:22 PM',
//     status: 'Active',
//     deliveryDate: 'Not Scheduled',
//     signatures: 0,
//   },
//   {
//     id: 2,
//     title: 'Board for dfgh',
//     imageUrl: 'https://groupleavingcards.com/images/gift/collection_pot.png', // Replace with actual image path
//     created: '10/04/2024, 03:21 PM',
//     status: 'Unpaid',
//     deliveryDate: 'Not Scheduled',
//     signatures: 0,
//   },
// ];

const AccountCards = ({ data }: any) => {
// const AccountCards = () => {
  const router = useRouter(); 

  // const [data,setData] = useState<any>([])
  // console.log(data, "cshjksd");
  // router.replace(`/share/${data?.data?.uuid}?brandKey=${brandKeys}`);
  // const filterData = data?.listing?.filter((item:any)=> item.paymentStatus==="captured")
  // console.log(data,"filterData");
  // useEffect(()=>{
  //     if(data?.error){
  //         Cookies.remove("auth_token"); // This won't work on the client side
  //         toast.error("Session expired. Please log in again.");
  //         router.replace("/login");
  //                 // window.location.reload();
  //     }
  // },[data])
// const gettoken = Cookies.get("auth_token"); 
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetch('https://magshopify.goaideme.com/card/users-cards', {
  //         method: 'GET',
  //         headers: {
  //           'Authorization': `Bearer ${gettoken}`,
  //         },
  //       });
  
  //       const posts = await data.json();
  //       setData(posts)
  //       console.log("postssssssssssssss",posts)
  
  //       if (posts?.statusCode === 401) {
  //         Cookies.remove("auth_token"); // This won't work on the client side
  //         toast.error("Session expired. Please log in again.");
  //         router.replace("/login");
  //         window.location.reload();
  //       }
  //     } catch (error) {
  //       toast.error("Error fetching profile data:");
  //     }
  //   };
  
  //   fetchData();
  // }, []);
  

  const deliveryDate = "2024-11-28T00:00:00.000Z";
  const dateObject = new Date(deliveryDate);

  // Format the date to YYYY-MM-DD
  const formattedDate = dateObject.toLocaleDateString("en-CA"); // 'en-CA' gives 'YYYY-MM-DD' format

  console.log(formattedDate, "jljljlj");
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-6">My Cards</h1>

      <div className="w-full max-w-4xl">
        {/* Search and Filter Section */}
        {/* <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by recipient name or email"
            className="border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:ring focus:ring-blue-200 w-full"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1112.32 6.906l4.386 4.387a1 1 0 01-1.415 1.414l-4.386-4.386A8 8 0 012 10z" />
          </svg>
        </div>
        <button className="bg-blue-500 text-black border border-gray-300 px-4 py-2 rounded-full ml-4 hover:bg-blue-600">
          Search
        </button>
      </div> */}

        {/* Cards List */}
        {/* {cards.map((card) => (
        <div key={card.id} className="bg-white shadow rounded-lg p-6 mb-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-20 h-20 object-cover rounded-lg mr-4"
            />

            <div>
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-gray-500 text-sm">CREATED: {card.created}</p>
              <p className="text-gray-500 text-sm">STATUS: <span className={card.status === 'Active' ? 'text-green-500' : 'text-yellow-500'}>{card.status}</span></p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-gray-500 text-sm">DELIVERY DATE: {card.deliveryDate}</p>
            <p className="text-gray-500 text-sm">SIGNATURES: {card.signatures} signatures</p>
            {card.status === 'Active' ? (
              <button className="mt-2 bg-blue-500 text-black border border-gray-300 px-4 py-2 rounded-full hover:bg-blue-600">
                View Gift
              </button>
            ) : (
              <button className="mt-2 bg-yellow-500 text-black border border-gray-300 px-4 py-2 rounded-full hover:bg-yellow-600">
                Pay now
              </button>
            )}     
          </div>
        </div>
      ))} */}
        {data?.listing?.map((card: any) => {
          // Format the delivery date to 'YYYY-MM-DD'
          const formattedDeliveryDate = card.delivery_date
            ? new Date(card.delivery_date).toLocaleDateString("en-CA") // Format if valid
            : "Not Scheduled"; // 'en-CA' gives 'YYYY-MM-DD'
          const formattedCreateDate = card.cartDetail[0].created_at
            ? new Date(card.cartDetail[0].created_at).toLocaleDateString(
                "en-CA"
              ) // Format if valid
            : "Not Scheduled"; // 'en-CA' gives 'YYYY-MM-DD'
          console.log(card, "yuyuyu");

          const iiii = card;
          // console.log("cardis", card)
          return (
            <div
              key={card.id}
              className="bg-white shadow rounded-lg p-6 mb-4 flex justify-between items-center"
            >
              <div className="flex items-center w-full">
                {/* Image */}
                <img
                  // src={"https://groupleavingcards.com/images/gift/collection_pot.png"}
                  src={`https://magshopify.goaideme.com/${card?.images[0]?.card_images[0]}`}
                  alt={card.title}
                  className="w-40 h-40 object-cover rounded-lg mr-4"
                />

                {/* Card Details */}
                <div className="w-full">
                  <div className="flex justify-between h-12">
                    <div className="">
                      <h2 className="text-lg font-semibold">
                        {" "}
                        Card for {card.cartDetail[0]?.recipient_name}
                      </h2>
                      <p>
                        {card.cartDetail[0]?.recipient_email
                          ? card.cartDetail[0]?.recipient_email
                          : "Set email"}
                      </p>
                    </div>
                    {/* Action Buttons */}
                    {card.is_remove_from_cart === 0 ? (
                      <Link href={`/card/pay/${card?.card_uuid}`}>
                        <button className="mt-2 bg-blue-500 text-black border border-gray-300 px-4 rounded-full hover:bg-blue-600">
                          Pay now
                        </button>
                      </Link>
                    ) : (
                      <button className="bg-[#001160] text-white border border-gray-300 px-3 h-10 rounded-2xl hover:bg-[#132DAD]">
                        View Gift
                      </button>
                    )}
                  </div>
                  <hr />

                  <div className="flex justify-between w-full">
                    <div className="">
                      <p className="text-gray-500 text-sm">
                        CREATED: {formattedCreateDate}
                      </p>
                      <p className="text-gray-500 text-sm">
                        STATUS:{" "}
                        <span
                          className={
                            card.paymentStatus === "captured"
                              ? "text-[#48bb78] font-semibold"
                              : "text-[#CB6E17]"
                          }
                        >
                          {card.paymentStatus === "captured" ? "Active" : "Unpaid"}
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
                      {/* Formatted Delivery Date */}
                      <p className="text-gray-500 text-sm">
                        DELIVERY DATE: {formattedDeliveryDate}
                      </p>
                      <p className="text-gray-500 text-sm">
                        SIGNATURES: {card.signatures} signatures
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccountCards;
