import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { FootballCoach } from "./FootballCoach";

let myCricketCoach = new CricketCoach();
let myFootballCoach = new FootballCoach();

let coaches : Coach[] = [];

coaches.push(myCricketCoach);
coaches.push(myFootballCoach);

for(let coach of coaches){
    console.log(coach.getDailyWorkout())
}