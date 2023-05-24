export async function features() {
    const response  = await fetch("/api/feature");
    const data = await response.json();
 
  return data;

}