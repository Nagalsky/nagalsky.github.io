"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default async function BlogPage() {
  return (
    <main className="py-8">
      <div className="container">
        <h1>Blog page</h1>

        <Link href="/me">GO to me page</Link>

        <div>
          <Button onClick={() => signOut()}>Sign out</Button>
        </div>
      </div>
    </main>
  );
}
