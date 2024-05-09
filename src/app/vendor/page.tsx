import React from 'react'
import { FaBusinessTime, FaShoppingCart, FaUser } from 'react-icons/fa'
import { MdBrandingWatermark, MdOutlineCategory } from 'react-icons/md'
import { RiProductHuntFill } from 'react-icons/ri'

const InfoCard = ({ title, value, color,icon }: { 
  title: string, 
  value: string,
  color: string,
  icon?: React.ReactNode
}) => {
  return (
    <div className={`bg-${color}-400 p-3 mx-auto w-[300px] h-[150px] justify-between  text-white flex flex-row items-start rounded-md shadow-md `}>
      <div className='flex  flex-col items-start gap-5'>
      <h1 className='text-2xl font-semibold'>{title}</h1>
      <p className='text-xl font-bold'>{value}</p>
      </div>
      {icon}
    </div>
  )
}

const adminCards = [
 
  { title: 'Total Orders', value: '100', icon: <FaShoppingCart size={40} />, color: 'green' },
  { title: 'Total Products', value: '100', icon: <RiProductHuntFill size={40} />, color: 'yellow' },
  { title: 'Total Categories', value: '100', icon: <MdOutlineCategory size={40} />, color: 'indigo' },
  { title: 'Total Brands', value: '100', icon: <MdBrandingWatermark size={40} />, color: 'red' },
]

const page = () => {
  return (
    <div className='my-5 flex flex-row flex-wrap w-full items-center gap-20 px-10'>
      {
        adminCards.map((card, index) => (
          <InfoCard key={index} title={card.title} value={card.value} color={card.color} icon={card.icon} />
        ))
      }
    </div>
  )
}

export default page
