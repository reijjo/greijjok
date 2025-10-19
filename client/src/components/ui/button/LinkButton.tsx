import Link from "next/link";
import "./Button.css";
import { LinkHTMLAttributes } from "react";

type LinkButtonProps = {
  href: string;
  extraClass?: string;
} & LinkHTMLAttributes<HTMLAnchorElement>;

export default function LinkButton({
  href,
  extraClass,
  ...rest
}: LinkButtonProps) {
  return (
    <Link href={href} className={`btn ${extraClass}`}>
      {rest.children}
    </Link>
  );
}
