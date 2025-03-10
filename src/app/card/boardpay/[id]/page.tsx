import { fetchFromServer } from '@/app/actions/fetchFromServer';
import BoardCheckout from '@/components/BoardCheckout';
import { Api } from '@/interfaces/interfaces';
import React from 'react'

const page =async({ searchParams,params }:any) => {
     console.log(params,"mnmnnm");
      const api2: Api = {
        url: `https://magshopify.goaideme.com/card/bundle-list`,
        method: "GET",
        // body: { key: 'value' }
        // comment only
      };
    
      const data2 = await fetchFromServer(api2);
      console.log(data2,"opop");
  return (
    <div><BoardCheckout data={data2}/></div>
  )
}

export default page