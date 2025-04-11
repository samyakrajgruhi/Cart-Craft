export default async function getProducts() {
  try {
    // This will be proxied through your Vite dev server to the actual endpoint
    const response = await fetch('/api/products');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}