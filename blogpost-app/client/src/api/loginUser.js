export const loginUser = async (url, body) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  const data = await res.json();

  console.log(res);
  if (!res.ok) throw new Error(data.msg, 'Login request failed.');

  return data;
};