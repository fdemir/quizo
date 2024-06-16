import { getTodaySecretWord } from "../today/action";
import ResultsContent from "./_components/content";

export default async function Results() {
  const secretWord = await getTodaySecretWord();

  return <ResultsContent secretWord={secretWord} />;
}
