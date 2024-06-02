import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Today() {
  return (
    <div className="bg-zinc-100 min-h-screen flex items-center justify-center">
      <div className="w-[400px] flex flex-col gap-4">
        <div className="flex items-center gap-4 w-full">
          <span className="font-bold text-3xl">#1</span>
          <Progress />
          <span className="whitespace-nowrap">1 / 3</span>
        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          quibusdam fugiat illo sed et dolorem amet veniam quos quidem nulla?
        </div>

        <div>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-3 py-1">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-3 py-1">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="w-full flex justify-between items-center">
          <span>x</span>
          <Button size="lg">Next</Button>
        </div>
      </div>
    </div>
  );
}
