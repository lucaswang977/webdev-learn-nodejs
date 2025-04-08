import { twMerge } from "tailwind-merge";

interface SocialButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}
const SocialButton = ({
  children,
  className = "rounded-lg p-[10px]",
  href = "#",
}: SocialButtonProps) => {
  return (
    <li className={twMerge("bg-cultured", className)}>
      <a href={href}>{children}</a>
    </li>
  );
};

export default SocialButton;
