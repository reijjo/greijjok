import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content wrapper">
        <h1>Footer &copy; {new Date().getFullYear()}</h1>
      </div>
    </footer>
  );
}
