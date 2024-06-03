import { Button } from "@/components/ui/button";

export default function Option() {
  return (
    <Button
      variant="outline"
      className="w-full justify-between items-center p-6"
      size="lg"
    >
      <span>Argentina</span>
      <span className="w-5 h-5 rounded-full border border-primary"></span>
    </Button>
  );
}
