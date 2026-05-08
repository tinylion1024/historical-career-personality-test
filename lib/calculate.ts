import { questions } from '@/data/questions';
import { characters, Character } from '@/data/characters';

export function calculateResult(answers: number[]): {
  scores: Record<string, number>;
  result: {
    primary: Character;
    secondary: Character;
    shadow: Character;
  };
} {
  const scores: Record<string, number> = {};
  
  // Initialize scores for all characters
  characters.forEach((char) => {
    scores[char.name] = 0;
  });

  // Calculate scores based on answers
  answers.forEach((answerIndex, questionIndex) => {
    if (questionIndex >= 0 && questionIndex < questions.length) {
      const question = questions[questionIndex];
      if (answerIndex >= 0 && answerIndex < question.options.length) {
        const selectedOption = question.options[answerIndex];
        Object.entries(selectedOption.scores).forEach(([charName, points]) => {
          if (scores[charName] !== undefined) {
            scores[charName] += points;
          }
        });
      }
    }
  });

  // Sort characters by score
  const sortedEntries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  
  // Get primary (highest)
  const primaryName = sortedEntries[0][0];
  const primary = characters.find((c) => c.name === primaryName)!;

  // Get secondary (2nd highest)
  const secondaryName = sortedEntries[1][0];
  const secondary = characters.find((c) => c.name === secondaryName)!;

  // Get shadow (highest among bottom 3)
  const bottomThree = sortedEntries.slice(-3);
  const shadowName = bottomThree[0][0];
  const shadow = characters.find((c) => c.name === shadowName)!;

  return {
    scores,
    result: {
      primary,
      secondary,
      shadow,
    },
  };
}
