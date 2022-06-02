import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { getID } from "../../contexts/getID";
import { Pagination } from "../Pagination";
import { Container } from "./styles";

interface DashboardProps {
  id: number[];
}

export function Dashboard({ id }: DashboardProps) {
  const [page, setPage] = useState(0);
  const { valueId } = useContext(getID);

  function handleNextPage() {
    if (page < Math.round(id.length / 18)) {
      setPage(page + 1);
    }
  }

  function handlePreviousPage() {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  useEffect(() => {
    if (valueId) {
      setPage(0);
    }
  }, [valueId]);
  return (
    <Container>
      <section>
        {id.slice(page * 18, page * 18 + 18).map((id) => (
          <div key={id} className="containerImg">
            <Image
              src={`https://myceliademo.blob.core.windows.net/fashion-imgs/images/${id}.jpg`}
              alt={"id"}
              width={150}
              height={150}
              priority
              blurDataURL={`https://myceliademo.blob.core.windows.net/fashion-imgs/images/${id}.jpg`}
              placeholder="blur"
            />
          </div>
        ))}
      </section>
      <Pagination
        page={page + 1}
        maxPage={id.length !== 0 ? Math.round(id.length / 18) : 1}
        nextPage={handleNextPage}
        previousPage={handlePreviousPage}
      />
    </Container>
  );
}
