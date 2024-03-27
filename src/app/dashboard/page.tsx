import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jpg",
  },
  title: "Dashboard",
  description: "This is Dashboard",
  keywords: ["shop", "anime", "shopping", "store"]
};
const page = () => {
  return (
    <div>
      This is dashboard page
    </div>
  )
}

export default page
