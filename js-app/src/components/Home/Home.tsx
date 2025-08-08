import { useTest } from "../../hooks/useTest";

export default function Home() {
  const { data, isLoading, error } = useTest();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  return (
    <div
      data-testid="home-title"
      className="text-3xl font-bold text-blue-500 h-[100vh] w-[100%] flex justify-center items-center"
    >
      <p>{data?.message}</p>
    </div>
  );
}
