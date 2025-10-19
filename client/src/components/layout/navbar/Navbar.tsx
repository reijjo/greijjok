import Button from "@/components/ui/button/Button";
import "./Navbar.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-content wrapper">
        <div className="nav-logo">
          <h2>Greijjok</h2>
        </div>
        <div className="nav-links">
          <Link href="/login">
            <Button className="btn-outline nav-link-button">Login</Button>
          </Link>
          <Link href="/register">
            <Button className="btn-primary nav-link-button">Register</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
