import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

/**
 * Server client scoped to the current request's session cookies.
 * Use for auth checks (getUser) and any query that should respect RLS.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // setAll called from a Server Component; middleware refreshes the session instead.
          }
        },
      },
    }
  );
}
