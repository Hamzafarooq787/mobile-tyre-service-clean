import { login } from "./actions";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const { error, next } = await searchParams;

  if (!isSupabaseConfigured) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="w-full max-w-md bg-[#12151b] border border-white/10 rounded-2xl p-8 text-center">
          <h1 className="text-xl font-bold text-white">Login not set up yet</h1>
          <p className="mt-3 text-sm text-gray-400">
            This site&apos;s Supabase environment variables haven&apos;t been
            configured. See the README for setup steps.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-sm bg-[#12151b] border border-white/10 rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-white text-center">Client Login</h1>
        <p className="mt-2 text-sm text-gray-400 text-center">
          Sign in to manage your Google tags and contact details.
        </p>

        {error && (
          <p className="mt-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3">
            {error}
          </p>
        )}

        <form action={login} className="mt-8 space-y-4">
          <input type="hidden" name="next" value={next || "/settings"} />

          <div>
            <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7CFC00]"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-300 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7CFC00]"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-[#7CFC00] text-black font-semibold rounded-lg py-3 hover:bg-[#6DD600] transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
