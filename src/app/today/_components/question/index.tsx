import Option from "./option";

export default function Question({
  text,
  options,
  correctKey,
}: {
  text: string;
  options: { key: string; option: string }[];
  correctKey: string;
}) {
  return (
    <>
      <div>{text}</div>

      <div className="flex flex-col gap-4">
        <Option />
        <Option />
        <Option />
      </div>
    </>
  );
}
