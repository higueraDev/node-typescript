const heroes = [
	{ id: "1", name: "Batman", franchise: "DC" },
	{ id: "2", name: "Ironman", franchise: "Marvel" },
	{ id: "3", name: "Thor", franchise: "Marvel" },
	{ id: "4", name: "Superman", franchise: "DC" },
];

const findHeroById = (id: string) => {
	return heroes.find((hero) => hero.id === id);
};

const hero = findHeroById("2-");
console.log(hero?.name ?? "Hero not found");
