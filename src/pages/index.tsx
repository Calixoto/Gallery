import type { GetStaticProps } from "next";
import { useCallback, useContext, useEffect, useState } from "react";
import { Dashboard } from "../components/Dashboard";
import { Search } from "../components/Search";
import { getID } from "../contexts/getID";
import { api } from "../services/api";

interface PageProps {
  id: number[];
}

export default function Home({ id }: PageProps) {
  const [idImg, setIdImg] = useState<number[]>([]);

  const { valueId } = useContext(getID);

  useEffect(() => {
    setIdImg(id);
  }, [id]);

  const Change = useCallback(() => {
    setIdImg(
      id.filter((id) => {
        if (id.toString().includes(valueId)) {
          return id;
        }
      })
    );
  }, [id, valueId]);

  return (
    <>
      <Search change={Change} />
      <Dashboard id={idImg} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const id = await api.get("id/productimages").then((res) => res.data);
  return { props: { id }, revalidate: 60 };
};
