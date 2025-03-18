import React from 'react';
import {auth} from "@/lib/auth";
import {redirect} from "next/navigation";

async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <div>Dashboard</div>
  );
}

export default DashboardPage;