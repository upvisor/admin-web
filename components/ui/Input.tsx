import React from 'react'

interface Props {
    placeholder?: string
    name?: string
    change: any
    value?: string | number
    type?: string
    config?: string
}

export const Input: React.FC<Props> = ({ placeholder, name, change, value, type, config }) => {
  return (
    <input type={type ? type : 'text'} placeholder={placeholder} name={name} onChange={change} value={value} className={`${config ? config : 'w-full'} py-2 px-3 shadow shadow-black/5 rounded-xl transition-all duration-200 border border-[#f3f3f3] text-sm h-fit my-auto focus:outline-none focus:border-main focus:ring-1 focus:ring-main dark:border-neutral-600 hover:border-main/80`} />
  )
}
