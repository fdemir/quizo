import { Button } from "@/components/ui/button";

export default function Results() {
  return (
    <div className="max-w-[300px] mx-auto md:my-32 my-4 flex items-center justify-center gap-10 flex-col">
      <h1 className="text-3xl font-bold">Congratz!</h1>

      <p className="text-lg text-center">
        You have completed the quiz and found the secret word!
      </p>

      <div>
        <Button size="lg" className="w-full" variant="outline">
          Share
        </Button>
      </div>
    </div>
  );
}
