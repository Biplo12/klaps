const API_URL = process.env.API_URL!;
const INTERNAL_API_KEY = process.env.INTERNAL_API_KEY!;

export async function apiFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      ...options.headers,
      "x-internal-api-key": INTERNAL_API_KEY,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status}`);
  }

  return res.json();
}
