import { Coach } from "./Coach";

export class FootballCoach implements Coach{

    getDailyWorkout(): string {
       return 'Practice bicycle kick today.';
    }

}