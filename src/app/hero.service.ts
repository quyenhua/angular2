import { Hero } from "./hero";
import { Logger } from "./logger.service";

export class HeroService {
    private heroes: Hero[] = [];

    getHeroes() {
        this.heroes = [
            new Hero(1, "Hero name 1"),
            new Hero(2, "Hero name 2"),
            new Hero(3, "Hero name 3")
        ];
        return this.heroes;
    }
}