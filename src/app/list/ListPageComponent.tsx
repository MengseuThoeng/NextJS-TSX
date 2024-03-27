'use client'
 
import { Metadata } from 'next';
import { useSearchParams } from 'next/navigation'

export const metadata: Metadata = {
  description: "This is Product page store bro",
  keywords: ["shop", "anime", "shopping", "store"]
};

export default function ListPage() {
  const searchParams = useSearchParams()
 
  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', sortOrder)
    window.history.pushState(null, '', `?${params.toString()}`)
  }
 
  return (
    <>
      <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
      <button onClick={() => updateSorting('desc')}>Sort Descending</button>
    </>
  )
}