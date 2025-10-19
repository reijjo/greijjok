import Button from "@/components/ui/button/Button";
import Link from "next/link";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="overlay"></div>
      <div className="hero-desc wrapper">
        <h1 className="hero-header">Create Viral Social Media Posts with AI</h1>
        <h5 className="hero-sub-header">
          Generate stunning short-form posts with AI-crafted captions and images
          in seconds. Perfect for creators, marketers, or side hustlers building
          a presence on platforms like Instagram, TikTok, and more.
        </h5>
        <Link href="/login">
          <Button className="btn-primary big-btn">Get Started</Button>
        </Link>
      </div>
    </section>
  );
}
