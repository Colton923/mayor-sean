import * as React from "react";
export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  c: "white" | "black";
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ c, className, htmlFor, ...props }, ref) => {
    return (
      <label
        ref={ref}
        htmlFor={htmlFor}
        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-${c}`}
        {...props}
      />
    );
  }
);
Label.displayName = "Label";

export { Label };
