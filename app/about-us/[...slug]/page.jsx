"use client";

import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();
  console.log("params", params);
  return <div>About us Page</div>;
};

export default page;
