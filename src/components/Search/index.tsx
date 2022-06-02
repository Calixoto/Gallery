import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { getID } from "../../contexts/getID";
import { Container } from "./styles";

type SearchProps = {
  change: () => void;
};

export function Search({ change }: SearchProps) {
  const { setValueId, valueId } = useContext(getID);

  console.log(valueId);
  return (
    <Container>
      <form>
        <input
          type="text"
          placeholder="Pesquise pelo id"
          value={valueId}
          onChange={(e) => setValueId(e.target.value)}
        />
        <button type="button" onClick={() => change()}>
          <FiSearch size={30} />
        </button>
      </form>
    </Container>
  );
}
