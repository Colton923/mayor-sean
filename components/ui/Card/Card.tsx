interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={`border bg-card text-card-foreground shadow-sm ${className}`}
      {...props}
    />
  );
}
