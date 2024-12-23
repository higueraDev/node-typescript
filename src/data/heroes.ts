export interface Hero {
	id: string;
	name: string;
	franchise: string;
}

export const heroes: Hero[] = [
	{ id: "1", name: "Batman", franchise: "DC" },
	{ id: "2", name: "Ironman", franchise: "Marvel" },
	{ id: "3", name: "Thor", franchise: "Marvel" },
	{ id: "4", name: "Superman", franchise: "DC" },
];
