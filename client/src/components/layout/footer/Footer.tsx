import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content wrapper">
        <p>&copy; {new Date().getFullYear()} Reijjo</p>
      </div>
    </footer>
  );
}
