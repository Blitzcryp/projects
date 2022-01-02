import ReverseAString from "../projects/ReverseAString";
import PigLatin from "../projects/PigLatin";
import FizzBuzz from "../projects/FizzBuzz";

const projects = [
    {
      completed: true,
      name: "Reverse a String",
      description: "Enter a string and the program will reverse it and print it out.",
      link: "reverse-a-string",
      element: <ReverseAString/>
    },
    {
      completed: false,
      name: "Pig Latin",
      description: ` Pig Latin is a game of alterations played on the English language game. To create the Pig Latin form of an English word the initial consonant sound is transposed to the end of the word and an ay is affixed (Ex.: "banana" would yield anana-bay). Read Wikipedia for more information on rules.`,
      link: "pig-latin",
      element: <PigLatin/>
    },
    {
      completed: true,
      name: "Fizz Buzz",
      link: "fizz-buzz",
      element: <FizzBuzz/>
    }
  ];

export default projects;