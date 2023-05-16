'use client';
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default async function DashboardPage() {
  return (
    <main className="py-8">
      <div className="container">
        <h1>Dashboard page</h1>

        <Link href="/me">GO to me page</Link>

        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    </main>
  )
}
