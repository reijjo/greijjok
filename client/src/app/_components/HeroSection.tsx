import "./HeroSection.css";
import LinkButton from "@/components/ui/button/LinkButton";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-desc wrapper">
        <h1 className="hero-header">Create Viral Social Media Posts with AI</h1>
        <p className="hero-sub-header">
          Generate stunning short-form posts with AI-crafted captions and images
          in seconds. Perfect for creators, marketers, or side hustlers building
          a presence on platforms like Instagram, TikTok, and more.
        </p>
        <LinkButton href="/login" extraClass="btn-primary big-btn">
          Get Started
        </LinkButton>
      </div>
    </section>
  );
}
