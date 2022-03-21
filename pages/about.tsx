import useSWR from "swr";

const fetcher = (args) => fetch(args).then((res) => res.json())

export default function About() {
  const { data, error } = useSWR("/api/about", fetcher)

  if (error) return <div>Error fetching data</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  )
}