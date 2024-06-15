import BlurIn from "@/components/magic-ui/blur-in";
import { CoolMode } from "@/components/magic-ui/cool-mode";
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
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-zinc-100 gap-4">
      <BlurIn word="quizo" />
      <p className="max-w-[300px] text-center">
        Solve it and reveal the secret word.
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

            <DialogDescription className="flex flex-col gap-4">
              <p>Welcome to Quizo!</p>
              <p>
                Solve 10 questions and test yourself. Reveal the secret word.
              </p>
              <p>
                The questions are generated by artificial intelligence. Each day
                10 questions from over 40 topics are randomly generated to test
                yourself.
              </p>
            </DialogDescription>
          </DialogContent>
        </Dialog>

        <Link href="/today">
          <CoolMode>
            <Button size="lg">Play</Button>
          </CoolMode>
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-4 text-zinc-500 text-xs py-1">
        <span>
          Made by <a href="https://twitter.com/furkaneulogy">@furkaneulogy</a>.
          Create shared watchlists on{" "}
          <a href="https://watchandchill.in" target="_blank">
            WatchAndChill
          </a>
        </span>
      </div>
    </div>
  );
}
