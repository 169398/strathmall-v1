import SignOutButton from "@/src/components/SignOutButton";
import { getUser } from "@/src/lib/lucia";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {

    const user = await getUser()

    if (!user){
      redirect('/authenticate')
    }
  return(
    <>
    <div>You are logged in as {user.email}</div>

    <SignOutButton>Sign Out</SignOutButton>
    </>

  ) 

  
};

export default DashboardPage;
