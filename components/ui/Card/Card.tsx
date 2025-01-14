interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={`border bg-card text-card-foreground shadow-sm ${className} m-4 p-0 max-w-xl`}
      {...props}
    />
  );
}
