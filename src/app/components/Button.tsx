import React from 'react'
type Button={
    btnName:string
}

export default function Button({btnName}:Button) {
  return (
    <div>
        <button type="button"
        className="bg-[#FB2E86] py-3 min-w-[140px] shadow-xl  text-white text-sm tracking-wider font-medium border-none outline-none active:shadow-inner">{btnName}</button>

    </div>
  )
}
