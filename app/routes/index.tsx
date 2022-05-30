import { json } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import { ClipLoader } from "react-spinners";

export const action: ActionFunction = async ({ request }) => {
  await new Promise((res) => setTimeout(res, 2000));
  const formData = await request.formData();
  const email = formData.get("email");

  return json({
    message: `Thanks for signup ${email}`,
  });
};

export default function Index() {
  const data = useActionData();
  const transition = useTransition();
  const isSubmitting = Boolean(transition.submission);
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="bg-zinc-100 dark:bg-zinc-800 p-4 md:p-12 rounded-md">
        <h1 className="text-center mb-2">Welcome to Remix</h1>
        <div className=""></div>
        <Form method="post">
          <div className="flex gap-2 items-center pt-4">
            <div className="relative">
              <input
                className="peer placeholder-transparent appearance-none block w-full rounded-md py-2 px-3 leading-tight focus:outline-none border-2 border-gray-300 dark:border-gray-500 focus:ring-2 focus:ring-pink-500"
                id="email"
                type="email"
                name="email"
                placeholder="Email address"
                required
              />
              <label
                className="absolute left-0 peer-placeholder-shown:left-5 -top-5 text-sm text-zinc-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black/50 dark:peer-placeholder-shown:text-white/50 peer-focus:-top-5 peer-focus:left-0 peer-focus:text-sm peer-focus:text-zinc-600"
                htmlFor="email"
              >
                Email address
              </label>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-pink-500 text-white hover:bg-pink-600 rounded-md font-medium inline-flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <ClipLoader size={24} color={"#ffffff"} /> Signing up...
                </>
              ) : (
                "Sign up now"
              )}
            </button>
          </div>
        </Form>
        <p
          className={`mt-6 text-sm text-center ${
            data ? "" : "opacity-60 italic"
          }`}
        >
          {data ? data.message : "* No data is sent or stored"}
        </p>
      </div>
    </div>
  );
}
