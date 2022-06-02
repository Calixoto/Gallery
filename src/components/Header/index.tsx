import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "./styles";

export function Header() {
  const router = useRouter();
  return (
    <Container>
      <Link href="/" passHref>
        <a onClick={() => (router.asPath === "/" ? router.reload() : null)}>
          <h1>Logo</h1>
        </a>
      </Link>
      <div className="containerUser">
        <span>Lucas Calixto</span>
      </div>
    </Container>
  );
}
