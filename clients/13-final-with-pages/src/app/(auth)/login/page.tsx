"use client";
import UserLoginForm from "@/components/user-login-form";

export default function LoginPage() {
  return (
    <section className="py-8">
      <div className="container">
        <h1 className="mb-6">SignIn page</h1>

        <UserLoginForm />
      </div>
    </section>
  )
}