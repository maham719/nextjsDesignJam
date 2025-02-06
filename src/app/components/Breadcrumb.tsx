import React from 'react'
type BreadCrumbprops={
    pageName:string
}


export default function Breadcrumb({ pageName }: BreadCrumbprops) {
  return (
    <div className='bg-[#F6F5FF] min-h-60 flex items-center'>
    <div className='ml-[70px] min-h-14 ' >
       <h2 className="text-[#101750] text-4xl font-bold leading-relaxed ">
        {pageName}
      </h2>
      <p className="text-gray-600 text-sm leading-loose ml-1 font-bold ">
        Home <span className='text-[#FB2E86]'>{pageName ? ` . ${pageName}` : ''}</span>
      </p>
    </div>
    </div>
  )
}

  