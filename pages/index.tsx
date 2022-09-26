import { InferGetServerSidePropsType } from "next";
import { ICity } from "../schemas/city.schema";
import { useState } from "react";
import { SearchForm } from "../components/search.form";
import { Alert } from "react-bootstrap";

export async function getServerSideProps(context: any): Promise<{ props: {} }> {
  return { props: {} };
}

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const [cities, setCities] = useState<ICity[]>([]);
  const [error, setError] = useState<string>(null);
  const onHandleLoad = (e: any) => {
    e.preventDefault();
    const cityFieldName = e.currentTarget.elements.city.id;
    const cityFieldValue = e.currentTarget.elements.city.value;
    fetch(`/api/city/${cityFieldValue}`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        if (data?.error) {
          setError(data.error);
          return;
        }
        error && setError(null);
        setCities(data);
      });
  };

  if (error) return <Alert variant="danger">{error}</Alert>;
  return (
    <>
      <SearchForm onHandleLoad={onHandleLoad} />
      {cities.map((c, i) => (
        <div key={i}>
          {c.name} - {c.population}
        </div>
      ))}
    </>
  );
}
