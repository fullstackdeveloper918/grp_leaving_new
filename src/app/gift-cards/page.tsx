import Faqinputs from "@/components/common/Faqinputs";
import Faq from "@/components/Faq";
import React from "react";
import FaqJson from "../../constants/FaqJson/faq.json";
import piggy_bank from "../../assets/images/piggy_bank.png";
import appreciation from "../../assets/images/appreciation.png";
import amazon_gift from "../../assets/images/amazon_gift.png";
import Link from "next/link";
import GiftCard from "@/components/common/GiftCard";
const page = async() => {


  
  let data = await fetch('https://magshopify.goaideme.com/tango/fetch-data', {
    method: 'GET', // Method set to GET
    headers: {
      'Cache-Control': 'no-cache',
      // 'authorization': `Bearer ${gettoken.value}` // Send the token in the Authorization header
       cache: 'reload'
    }
  });
  // console.log(gettoken,"ggg");
  // Parse the response JSON
  let posts = await data.json();
  console.log(posts,"posts");
  return (
    <>
      {/* <div className=""> */}
        <section className="bg-lightBg common_padding">
          <div className=" text-center container-fluid">
            <h2 className="mt-2 text-2xl  xl:text-3xl font-bold text-center text-gray-900">
              Gift Card Collection Pots
            </h2>
            <p className="text-center text-[#4b5563] mb-10 md:text-xl  text-md 2xl:max-w-[60%] mx-auto font-medium ">
              Add a group collection pot to all our group cards to pool money
              for a gift card.
            </p>

            {/* Image section */}
            {/* <div className="flex justify-center space-x-4 mb-12 gift_img_wrapper">
              <img
                src="/amazon-card.png"
                alt="Amazon gift card"
                className="w-24"
              />
              <img
                src="/deliveroo-card.png"
                alt="Deliveroo gift card"
                className="w-24"
              />
              <img
                src="/naked-wines-card.png"
                alt="Naked Wines gift card"
                className="w-24"
              />
              <img
                src="/john-lewis-card.png"
                alt="John Lewis gift card"
                className="w-24"
              />
            </div> */}

            {/* How it works section */}
            {/* <h3 className="text-2xl font-semibold mb-6">How it works</h3> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white p-6 rounded-[20px] hover:shadow-lg transition-all  border border-[#e5e7eb]  h-full">
                <img
                    src={amazon_gift.src} 
                alt="Amazon gift card"
                className="w-24 mx-auto"
              />
                  <h4 className="text-xl font-semibold mt-3 mb-1 ">Add gift card</h4>
                  <p className="mb-0">Add a cash collection pot and select a gift card.</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-6 rounded-[20px] hover:shadow-lg transition-all  border border-[#e5e7eb]  h-full">
                  {/* <span className="text-4xl font-bold text-purple-500">2</span> */}
                  <img
                src={piggy_bank.src} alt="Amazon gift card"
                  className=" mx-auto"
              />
                  <h4 className="text-xl font-semibold mt-3 mb-1">Collect cash</h4>
                  <p className="mb-0">Anyone can add to the collection.</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-6 rounded-[20px] hover:shadow-lg transition-all  border border-[#e5e7eb]  h-full">
                  {/* <span className="text-4xl font-bold text-purple-500">3</span> */}
                  <img
                   src={appreciation.src}
                alt="Amazon gift card"
             className="w-24 mx-auto"
              />
                  <h4 className="text-xl font-semibold mt-3 mb-1">
                    Deliver appreciation
                  </h4>
                  <p className="mb-0">Recipient receives their gift card via email.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      
          <section className="text-center xl:mb-10 md:mb-5">
          <div className="container-fluid common_padding">
            <h2 className="2xl:text-4xl text-center lg:text-2xl text-xl font-semibold lg:mb-6 mb:2 text-gray-800">Get Started For Free</h2>
            <div className="space-y-6 grid md:grid-col-3 md:grid-col-2  md:grid-flow-col gap-4 pt-2">
              <div className="bg-white p-6 rounded-[20px] hover:shadow-lg transition-all  border border-[#e5e7eb]  h-full">
                <h3 className="font-semibold text-lg mb-2">
                  Create Free Collection Pot
                </h3>
                <p className="text-sm ">
                  Create a collection pot to start collecting cash for a gift
                  card for free.
                </p>
                <Link href={`/pool/new`}>
                <button className="mt-3 px-3 bg-blue-600 text-blueText  py-2 rounded-xl border-1 border-[blueText] hover:bg-blue-700">
                  Create Free Money Pool
                </button>
                </Link>
              </div>

              <div className="bg-white p-6 rounded-[20px] hover:shadow-lg transition-all  border border-[#e5e7eb] m-0  h-full">
                <h3 className="font-semibold text-lg mb-2">
                  Create Group Card with Collection
                </h3>
                <p className="text-sm ">
                  Add a collection pot to any new or existing Group Card at no
                  additional cost.
                </p>
                <Link href={`/card/farewell`}>
                <button className="mt-3 px-3 bg-blue-600 text-blueText  py-2 rounded-xl border-1 border-[blueText] hover:bg-blue-700">
                  Create Group Card
                </button>
                </Link>
              </div>

              <div className="bg-white p-6 rounded-[20px] hover:shadow-lg transition-all m-0 border border-[#e5e7eb]  h-full">
                <h3 className="font-semibold text-lg mb-2">
                  Create Group Board with Collection
                </h3>
                <p className="text-sm ">
                  Add a collection pot to any new or existing Group Board at no
                  additional cost.
                </p>
                <Link href={`/board`}>
                <button className="mt-3 px-3 bg-blue-600 text-blueText  py-2 rounded-xl border-1 border-[blueText] hover:bg-blue-700">
                  Create Group Board
                </button>
                </Link>
              </div>
            </div>
            </div>
          </section>

         <GiftCard data={posts}/>
        {/* </div> */}
        <div className="container-fluid faq_section">
        <h2 className=" text-2xl  xl:text-3xl font-bold text-left text-gray-900">Frequently Asked Questions</h2>
        
        {FaqJson.general.map((item, index) => (
            <div key={index}>
          <Faqinputs items={item} index={index} />
          </div>
            // </div>
           
        ))}

      </div>
    </>
  );
};

export default page;
