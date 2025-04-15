import useSWR from "swr";

const URL = `https://example-apis.vercel.app/api/art`;

const fetcher = (URL) =>
  fetch(URL).then((response) => {
    //cargando el api
    if (!response.ok) {
      throw new Error("error!");
    }
    return response.json();
  });

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading) return <p> Loading... </p>;
  if (error) return <p>error</p>;

  return (
    <div>
      <h1>ART GALLERY</h1>
      <ul>
        {" "}
        {data.map((artPiece) => (
          <li key={artPiece.slug}>
            <img src={artPiece.imageSource} alt={artPiece.name} width={200} />
            <h2>{artPiece.name}</h2>
            <p>{artPiece.artist}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
