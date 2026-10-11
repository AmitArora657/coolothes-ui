import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

const variantClasses = {
  primary: "bg-red-900 text-white hover:bg-red-800",
  outline: "border border-red-900 bg-transparent text-red-900 hover:bg-red-50",
};

const Button = ({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`rounded-lg px-6 py-3 font-medium transition ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
