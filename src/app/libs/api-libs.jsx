// const getResponseAnime = async (resource, query) => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
//   const anime = await res.json();

//   return anime;
// };

export async function getResponseAnime(resource, query) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
  const anime = await res.json();

  return anime;
}

// const getNestedResponseAnime = async (resource, objectProperty) => {
//   const res = await getResponseAnime(resource);

//   return res.data?.flatMap((item) => item[objectProperty]);
// };

export async function getNestedResponseAnime(resource, objectProperty) {
  const res = await getResponseAnime(resource);

  return res.data?.flatMap((item) => item[objectProperty]);
}

// const reproduce = (data, gap) => {
//   const first = ~~(Math.random() * (data.length - gap) + 1);
//   const last = first + gap;

//   const res = {
//     data: data.slice(first, last),
//   };

//   return res;
// };
// export default reproduce

export async function reproduce(data, gap) {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  const res = {
    data: data.slice(first, last),
  };

  return res;
}
