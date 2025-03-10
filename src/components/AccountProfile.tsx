"use client"
import { useAccessToken } from '@/app/context/AccessTokenContext';
import api from '@/utils/api';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import Cookies from "js-cookie";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AccountProfile = ({userInfo,data}:any) => {
  const router = useRouter();
  const gettoken = Cookies.get("auth_token");   

console.log(data,"userInfoCookie");


    // const { accessToken, setAccessToken } = useAccessToken();
    //  useEffect(() => {
    //      const cookies = parseCookies();
    //      console.log(cookies, "cookies");
     
    //      const token = cookies.auth_token;
    //      console.log(typeof token, "iooioio");
     
    //      if (token) {
    //        setAccessToken(token);
    //      } else {
    //        // alert("nothing")
    //      }
    //    }, []);
    //  console.log(accessToken,"accessToken");
const [name, setName] = useState(data?.data?.full_name);
const [email, setEmail] = useState(data?.data?.email);
const [invoiceDetails, setInvoiceDetails] = useState(data?.data?.additional_invoice);

  const handleUpdate = async() => {
   try {
    const requestData = {
      uuid: data?.data.uuid,
      full_name:name,
      additional_invoice:invoiceDetails
    };
    
    let res = await fetch('https://magshopify.goaideme.com/user/update-profile', {
      method: 'POST', // Method set to POST
      headers: {
        'Content-Type': 'application/json', // Indicates that you're sending JSON
        'Authorization': `Bearer ${gettoken}` // Send the token in the Authorization header
      },
      body: JSON.stringify(requestData) // Stringify the data you want to send in the body
    });
    
    // Parse the response JSON
    let posts = await res.json();
    // console.log(posts,"jklklkj");
    if(res.status===201){
      toast.success("Profile Updated Suceesfully", {autoClose:2000})
      window.location.reload();
      Cookies.set("updateuserInfo", JSON.stringify(posts));
    }else if(posts?.statusCode === 401){
      Cookies.remove("auth_token");
      Cookies.remove("COOKIES_USER_ACCESS_TOKEN");
      router.replace("/login");
      window.location.reload();
    }
   } catch (error) {
    
   }
  };

  // https://magshopify.goaideme.com/user/update-profile

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await api.User.listing();
  //       console.log(res, "jkjkjk");
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   getData(); // Call function inside useEffect
  // }, [name]);
   
  return (
    <div>
          <div className="mb-8">
            <ToastContainer/>
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"    
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
 
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled

              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Additional invoice details</label>
              <textarea
                className="mt-1 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                rows={3}
                value={invoiceDetails||""}
                onChange={(e) => setInvoiceDetails(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            className="bg-blue-600 text-black border border-gray-300 font-semibold px-4 py-2 rounded shadow-md hover:bg-blue-700"
            onClick={handleUpdate}
          >
            Update
          </button>
          <Link href="/reset-password" className="text-blue-500 hover:underline">Reset Password</Link>
        </div>

        {/* <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Social Logins</h2>
          <button className="flex items-center bg-gray-100 border border-gray-300 rounded px-4 py-2 shadow-sm">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            <span className="text-gray-700">Unlink Google</span>
          </button>
        </div> */}
    </div>
  )
}

export default AccountProfile