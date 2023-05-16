'use client';
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default async function MePage() {
  return (
    <main className="py-8">
      <div className="container">
        <h1>Me page</h1>

        <Button onClick={() => signOut()}>Sign out from me page</Button>
      </div>
    </main>
  )
}
