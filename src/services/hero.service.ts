import { Hero, heroes } from "../data/heroes";

export const findHeroById = (id: Hero["id"]) => {
	return heroes.find((hero) => hero.id === id);
};
