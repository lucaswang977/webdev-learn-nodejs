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
    <a className={twMerge("bg-cultured block", className)} href={href}>
      {children}
    </a>
  );
};

export default SocialButton;
