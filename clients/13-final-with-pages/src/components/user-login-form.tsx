"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";

type FormData = {
  email: string;
  password: string;
};

const UserLoginForm: FC = () => {
  const router = useRouter();

  const schema: ZodType<FormData> = z.object({
    email: z
      .string()
      .min(1, {
        message: "String must contain at least 1 character(s)",
      })
      .max(20, { message: "String must contain at most 20 character(s)" }),
    password: z
      .string()
      .min(5, {
        message: "String must contain at least 5 character(s)",
      })
      .max(20, { message: "String must contain at most 20 character(s)" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function submitData(data: FormData) {
    const result = await signIn("credentials", {
      username: data.email,
      password: data.password,
      redirect: false,
    });
    if (result?.error) {
      console.log(result.error);
    } else {
      router.push('/');
    }
  }

  return (
    <>
      <section className="py-8">
        <div className="container">
          <h1 className="mb-6">SignIn page</h1>

          <form onSubmit={handleSubmit(submitData)} className="mb-6 space-y-5">
            <div>
              <label className="label" htmlFor="field-email">
                <span className="label-text">Prihlasovací e-mail *</span>
              </label>

              <input
                className="w-full input-bordered input"
                placeholder="Email"
                id="field-email"
                type="text"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="label" htmlFor="field-password">
                <span className="label-text">Heslo *</span>
              </label>

              <input
                className="w-full input-bordered input"
                placeholder="Password"
                id="field-password"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <p className="mt-2 text-xs text-red-500">
                  {" "}
                  {errors.password.message}
                </p>
              )}
            </div>

            <button className="btn-primary btn" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default UserLoginForm;