import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-zinc-100 gap-4">
      <p className="max-w-[300px] text-center">
        Solve 5 questions daily.
        <br />
      </p>

      <div className="flex gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" variant={"outline"}>
              About
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Whats this?</DialogTitle>
              <DialogClose />
            </DialogHeader>

            <DialogDescription>
              <p>
                This is a simple app to solve 5 questions daily. You can also
                see the history of your solved questions.
              </p>
            </DialogDescription>
          </DialogContent>
        </Dialog>

        <Button size="lg">Play</Button>
      </div>
    </div>
  );
}
