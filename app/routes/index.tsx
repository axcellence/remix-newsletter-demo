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
    <div className="grid min-h-screen place-items-center">
      <div className="w-[90%] max-w-md rounded-md bg-zinc-100 p-4 dark:bg-zinc-800 md:p-12">
        <h1 className="mb-2 text-center text-xl">Welcome to Remix</h1>
        <Form method="post">
          <div className="flex flex-col items-center gap-2 pt-4 sm:flex-row">
            <div className="relative w-full sm:w-auto">
              <input
                className="peer block w-full appearance-none rounded-md border-2 border-gray-300 py-2 px-3 leading-tight placeholder-transparent focus:outline-none focus:ring-2 focus:ring-pink-500 dark:border-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Email address"
                required
              />
              <label
                className="absolute left-0 -top-5 text-sm text-zinc-400 transition-all peer-placeholder-shown:left-5 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black/50 peer-focus:-top-5 peer-focus:left-0 peer-focus:text-sm peer-focus:text-zinc-600 dark:peer-placeholder-shown:text-white/50"
                htmlFor="email"
              >
                Email address
              </label>
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-pink-500 px-4 py-2 font-medium text-white hover:bg-pink-600 sm:w-auto"
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
          className={`mt-6 text-center text-sm ${
            data ? "" : "italic opacity-60"
          }`}
        >
          {data ? data.message : "* No data is sent or stored"}
        </p>
      </div>
    </div>
  );
}
