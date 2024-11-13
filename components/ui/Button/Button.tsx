type ButtonProps = {
  variant: "primary" | "ghost" | "white";
  size: "sm" | "md" | "lg" | "icon";
  children: React.ReactNode;
};

const Button = ({ variant, size, children }: ButtonProps) => {
  return (
    <button
      className={`px-2 hover:shadow-md transition-all
      ${
        variant === "primary"
          ? "bg-primary text-white"
          : variant === "white"
          ? "bg-white text-primary"
          : "bg-transparent text-primary"
      } ${
        size === "sm"
          ? "text-sm"
          : size === "md"
          ? "text-base"
          : size === "lg"
          ? "text-lg"
          : "text-sm"
      } ${"border border-primary"}`}
    >
      {children}
    </button>
  );
};

export default Button;
