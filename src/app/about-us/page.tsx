import React from "react";
import styles from "./AboutUs.module.css"
import { Metadata } from "next";
export const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jpg",
  },
  title: "About us",
  description: "This is about us shop",
  keywords: ["shop", "anime", "shopping", "store"]
};
const page = () => {
  console.log("This is about page")
  return (
    <div className={styles.heading}>
     This is about page
    </div>
  );
};

export default page;
