import ReverseAString from "../projects/ReverseAString";
import PigLatin from "../projects/PigLatin";
import FizzBuzz from "../projects/FizzBuzz";
import GetMyIp from "../projects/GetMyIp";
import WeatherMaps from "../projects/WeatherMaps";
import SetReadCookie from "../projects/SetReadCookie/SetReadCookie";

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
      element: <FizzBuzz/>,
      description: `Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5.`
    },
    {
      completed: true,
      name: "Get my ip",
      link: "my-ip",
      element: <GetMyIp/>,
      description: "Get my current IP"
    },
    {
      completed: false,
      name: "Weather in Bucharest",
      link: "bucharest-weather",
      element: <WeatherMaps/>,
      description: "Get weather data in Bucharest"
    },
    {
        completed: true,
        name: "Set and read a cookie",
        link: "set-read-cookie",
        element: <SetReadCookie/>,
        description: "Get weather data in Bucharest"
    }

];

export default projects;