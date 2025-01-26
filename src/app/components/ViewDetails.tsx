import Link from 'next/link';
import React from 'react';

interface ViewDetailsProps {
  slug: string;
}

export default function ViewDetails({ slug }: ViewDetailsProps) {
  return (
    <div className='w-full'>
      <Link href={`/products/${slug}`}>
        <button className='bg-[#08D15F] text-white text-base px-2 py-1 font-light w-2/4 ml-[4.5rem] absolute translate-y-60 details'>
          View Details
        </button>
      </Link>
    </div>
  );
}
