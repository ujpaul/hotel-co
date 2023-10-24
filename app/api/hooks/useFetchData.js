import { useQuery,useInfiniteQuery } from "@tanstack/react-query";
const fetchData = async (url) => {
  const response = await fetch(`${url}`, {
    method: "GET",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
  });
  const data = await response.json();
  return data;
};
export const useFetchData = (queryKey, url, onMount) => {
  return useQuery({
    queryKey,
    queryFn: () => fetchData(url),
    enabled: onMount,
  });
};
const fetchApartments = async (page) => {
  const response = await fetch(
    `https://653532fec620ba9358ec4162.mockapi.io/api/appartments?limit=10&page=${page}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
export const useFetchInfiniteQueriesPage = () => { 
  return useInfiniteQuery({
    queryKey: ["appartments"],
    queryFn: ({ pageParam = 1 }) => fetchApartments(pageParam),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < 10) {
        return undefined; // No more pages
      }
      return pages.length + 1; // Return the next page number
    },
  });
}
