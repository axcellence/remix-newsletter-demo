import type { ActionFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get("email");

  console.log(`Email: ${email}`);

  // await createPost({ title, slug, markdown });

  return null;

  // return redirect("/posts/admin");
};

export default function Index() {
  return (
    <div className="font-extrabold min-h-screen grid place-items-center">
      <div className="dark:bg-white/10 p-4 md:p-12">
        <h1>Welcome to Remix</h1>
        <div className=""></div>
        <Form method="post">
          <div className="flex gap-2 items-center">
            <div>
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-gray-100 text-xs font-bold mb-2"
                htmlFor="email"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none border-2 border-gray-300 dark:border-gray-500  focus:ring-2 focus:ring-violet-500"
                id="email"
                type="email"
                name="email"
                placeholder="Email address"
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-violet-500 hover:bg-violet-600 rounded-md"
            >
              Sign up now
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
