export default function TextOne({
  text,
  classes,
}: {
  text: string;
  classes?: string;
}) {
  return (
    <p className={`text-sm md:text-xl font-bold uppercase ${classes}`}>
      {text}
    </p>
  );
}
