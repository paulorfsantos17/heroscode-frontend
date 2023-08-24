import BannerDetailsEvent from '@/app/components/BannerDetailsEvent'
import FormWrapper from '@/app/components/FormWrapper'
import { fetchWrapper } from '@/app/utils/fetchWrapper'
import React from 'react'
interface IEventDetails {
  params: { id: string }
}
export default async function EventDetails({ params }: IEventDetails) {
  const response = await fetchWrapper('/events/64e3f1f90417511ae28da327', {
    method: 'GET',
  })

  return (
    <div>
      <BannerDetailsEvent event={response} />
      <div className="gap-23 grid grid-cols-2 p-4 text-blue">
        <div></div>
        <div>
          <FormWrapper />
        </div>
      </div>
    </div>
  )
}
