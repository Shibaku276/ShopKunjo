import React from 'react'
import Link from 'next/link'
import { headerData } from '@/constants/data'

const HeaderMenu = () => {
  return (
    <div>
        {headerData?.map((item) => (
            <Link key={item?.title} href={item?.href} >
                {item?.title}
            </Link>
        ))}
    </div>
  )
}

export default HeaderMenu