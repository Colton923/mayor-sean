interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      className={`flex flex-col space-y-1.5 px-3 ${className} align-middle h-full justify-center`}
      {...props}
    />
  );
}
