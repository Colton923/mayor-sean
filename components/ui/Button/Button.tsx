type ButtonProps = {
  variant: "primary" | "ghost";
  size: "sm" | "md" | "lg" | "icon";
  children: React.ReactNode;
};

const Button = ({ variant, size, children }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded-md hover:shadow-md transition-all
      ${
        variant === "primary"
          ? "bg-primary text-white"
          : "bg-transparent text-primary"
      } ${
        size === "sm"
          ? "text-sm"
          : size === "md"
          ? "text-base"
          : size === "lg"
          ? "text-lg"
          : "text-sm"
      } ${variant === "ghost" ? "border border-primary" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
