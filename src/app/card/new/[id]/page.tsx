// import { fetchFromServer } from '@/app/actions/fetchFromServer';
import Recipient from '@/components/Recipient'
// import { Api } from '@/interfaces/interfaces';
import React from 'react'

const page = async({ searchParams,params }:any) => {
  console.log(params,"sad;asdasd");
  
  return (
    <div>

      <Recipient searchParams={searchParams} params={params} />
    </div>
  )
}

export default page