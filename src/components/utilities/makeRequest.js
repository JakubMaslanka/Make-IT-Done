export default async function makeRequest(url, method, body, accessToken) {
  const jsonBody = body ? JSON.stringify(body) : undefined;
  const headers = {
    'Content-Type': 'application/json',
  };
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }
  const response = await window.fetch(url, {
    method,
    headers,
    body: jsonBody,
  });
  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  return response;
}
