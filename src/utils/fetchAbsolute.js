export default function fetchAbsolute(fetch) {
  return () =>
    (url, ...otherParams) =>
      fetch(import.meta.env.VITE_BASE_URL + url, ...otherParams);
}
