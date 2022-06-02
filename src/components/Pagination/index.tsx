import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Container } from "./styles";

interface PaginationProps {
  page: number;
  maxPage: number;
  nextPage: () => void;
  previousPage: () => void;
}

export function Pagination({
  page,
  maxPage,
  nextPage,
  previousPage,
}: PaginationProps) {
  return (
    <Container>
      <button
        onClick={() => previousPage()}
        disabled={page === 1 ? true : false}
      >
        <FiChevronLeft size={30} />
      </button>
      <span>
        {page} de {maxPage}
      </span>
      <button
        onClick={() => nextPage()}
        disabled={page === maxPage ? true : false}
      >
        <FiChevronRight size={30} />
      </button>
    </Container>
  );
}
