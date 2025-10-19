import LinkButton from "@/components/ui/button/LinkButton";
import "./Navbar.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-content wrapper">
        <div className="nav-logo">
          <Link href="/">
            <h2>Greijjok</h2>
          </Link>
        </div>
        <div className="nav-links">
          <LinkButton href="/login" extraClass="btn-outline nav-link-button">
            Login
          </LinkButton>
          <LinkButton href="/register" extraClass="btn-primary nav-link-button">
            Register
          </LinkButton>
        </div>
      </div>
    </nav>
  );
}
