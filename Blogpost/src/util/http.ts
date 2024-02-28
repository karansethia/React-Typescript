export async function GET(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Couldnt fetch data");
  }
  const data = (await response.json()) as unknown;

  return data;
}
