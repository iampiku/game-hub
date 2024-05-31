const RAW_PARENT_PLATFORMS = [
	{
		id: 1,
		name: "PC",
		slug: "pc",
		platforms: [
			{
				id: 4,
				name: "PC",
				slug: "pc",
				games_count: 528009,
				image_background:
					"https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
		],
	},
	{
		id: 2,
		name: "PlayStation",
		slug: "playstation",
		platforms: [
			{
				id: 187,
				name: "PlayStation 5",
				slug: "playstation5",
				games_count: 1060,
				image_background:
					"https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
				image: null,
				year_start: 2020,
				year_end: null,
			},
			{
				id: 18,
				name: "PlayStation 4",
				slug: "playstation4",
				games_count: 6804,
				image_background:
					"https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
			{
				id: 16,
				name: "PlayStation 3",
				slug: "playstation3",
				games_count: 3165,
				image_background:
					"https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
			{
				id: 15,
				name: "PlayStation 2",
				slug: "playstation2",
				games_count: 2033,
				image_background:
					"https://media.rawg.io/media/games/233/233cdc08cce0228f6f35222eca3bff92.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
			{
				id: 27,
				name: "PlayStation",
				slug: "playstation1",
				games_count: 1670,
				image_background:
					"https://media.rawg.io/media/games/6c0/6c00ee85d1344f58c469e8e47fd8ae7c.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
			{
				id: 19,
				name: "PS Vita",
				slug: "ps-vita",
				games_count: 1447,
				image_background:
					"https://media.rawg.io/media/games/e4f/e4fb3fd188f61fabec48dca22e6ef28a.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
			{
				id: 17,
				name: "PSP",
				slug: "psp",
				games_count: 1368,
				image_background:
					"https://media.rawg.io/media/screenshots/c9c/c9c4e6d1792b5e12676819f3b57e5e26.jpeg",
				image: null,
				year_start: null,
				year_end: null,
			},
		],
	},
	{
		id: 3,
		name: "Xbox",
		slug: "xbox",
		platforms: [
			{
				id: 1,
				name: "Xbox One",
				slug: "xbox-one",
				games_count: 5616,
				image_background:
					"https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
			{
				id: 186,
				name: "Xbox Series S/X",
				slug: "xbox-series-x",
				games_count: 917,
				image_background:
					"https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg",
				image: null,
				year_start: 2020,
				year_end: null,
			},
			{
				id: 14,
				name: "Xbox 360",
				slug: "xbox360",
				games_count: 2799,
				image_background:
					"https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
			{
				id: 80,
				name: "Xbox",
				slug: "xbox-old",
				games_count: 736,
				image_background:
					"https://media.rawg.io/media/games/2ee/2eef5ed5e82c28d1299ecc2a0e60f2cb.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
		],
	},
	// {
	// 	id: 4,
	// 	name: "iOS",
	// 	slug: "ios",
	// 	platforms: [
	// 		{
	// 			id: 3,
	// 			name: "iOS",
	// 			slug: "ios",
	// 			games_count: 77242,
	// 			image_background:
	// 				"https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg",
	// 			image: null,
	// 			year_start: null,
	// 			year_end: null,
	// 		},
	// 	],
	// },
	{
		id: 8,
		name: "Android",
		slug: "android",
		platforms: [
			{
				id: 21,
				name: "Android",
				slug: "android",
				games_count: 52345,
				image_background:
					"https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
		],
	},
	// {
	// 	id: 5,
	// 	name: "Apple Macintosh",
	// 	slug: "mac",
	// 	platforms: [
	// 		{
	// 			id: 5,
	// 			name: "macOS",
	// 			slug: "macos",
	// 			games_count: 103698,
	// 			image_background:
	// 				"https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
	// 			image: null,
	// 			year_start: null,
	// 			year_end: null,
	// 		},
	// 		{
	// 			id: 55,
	// 			name: "Classic Macintosh",
	// 			slug: "macintosh",
	// 			games_count: 674,
	// 			image_background:
	// 				"https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg",
	// 			image: null,
	// 			year_start: null,
	// 			year_end: null,
	// 		},
	// 		{
	// 			id: 41,
	// 			name: "Apple II",
	// 			slug: "apple-ii",
	// 			games_count: 424,
	// 			image_background:
	// 				"https://media.rawg.io/media/screenshots/ed5/ed5d628f77ca3d2c16f041fe1267f224.jpg",
	// 			image: null,
	// 			year_start: null,
	// 			year_end: null,
	// 		},
	// 	],
	// },
	{
		id: 6,
		name: "Linux",
		slug: "linux",
		platforms: [
			{
				id: 6,
				name: "Linux",
				slug: "linux",
				games_count: 76690,
				image_background:
					"https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
		],
	},
	{
		id: 7,
		name: "Nintendo",
		slug: "nintendo",
		platforms: [
			{
				id: 7,
				name: "Nintendo Switch",
				slug: "nintendo-switch",
				games_count: 5442,
				image_background:
					"https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
			{
				id: 8,
				name: "Nintendo 3DS",
				slug: "nintendo-3ds",
				games_count: 1694,
				image_background:
					"https://media.rawg.io/media/games/89a/89a700d3c6a76bd0610ca89ccd20da54.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
			{
				id: 9,
				name: "Nintendo DS",
				slug: "nintendo-ds",
				games_count: 2484,
				image_background:
					"https://media.rawg.io/media/games/dc6/dc68ca77e06ad993aade7faf645f5ec2.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
			{
				id: 13,
				name: "Nintendo DSi",
				slug: "nintendo-dsi",
				games_count: 37,
				image_background:
					"https://media.rawg.io/media/screenshots/b45/b452e9b20e969a64d0088ae467d1dcab.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
			{
				id: 10,
				name: "Wii U",
				slug: "wii-u",
				games_count: 1127,
				image_background:
					"https://media.rawg.io/media/games/c47/c4796c4c49e7e06ad328e07aa8944cdd.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
			{
				id: 11,
				name: "Wii",
				slug: "wii",
				games_count: 2231,
				image_background:
					"https://media.rawg.io/media/games/2ee/2eef5ed5e82c28d1299ecc2a0e60f2cb.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
			{
				id: 105,
				name: "GameCube",
				slug: "gamecube",
				games_count: 633,
				image_background:
					"https://media.rawg.io/media/games/83b/83b59a9d512bec8bc8bda6b539b215b2.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
			{
				id: 83,
				name: "Nintendo 64",
				slug: "nintendo-64",
				games_count: 363,
				image_background:
					"https://media.rawg.io/media/screenshots/4cf/4cf1e2b4cd701605225fb443d5e84f77.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
			{
				id: 24,
				name: "Game Boy Advance",
				slug: "game-boy-advance",
				games_count: 952,
				image_background:
					"https://media.rawg.io/media/games/35f/35f815a22c4678b4fe76073f0f56df8e.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
			{
				id: 43,
				name: "Game Boy Color",
				slug: "game-boy-color",
				games_count: 419,
				image_background:
					"https://media.rawg.io/media/games/7ca/7ca0df41799243443a4e3887720fdf2a.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
			{
				id: 26,
				name: "Game Boy",
				slug: "game-boy",
				games_count: 611,
				image_background:
					"https://media.rawg.io/media/games/e40/e4043e92866d08ec9fdd212dcd3a1224.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
			{
				id: 79,
				name: "SNES",
				slug: "snes",
				games_count: 969,
				image_background:
					"https://media.rawg.io/media/games/18f/18f130a198e4c6f1970ad1f36dda7d1f.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
			{
				id: 49,
				name: "NES",
				slug: "nes",
				games_count: 984,
				image_background:
					"https://media.rawg.io/media/games/a9a/a9a2472f862b041d2980103ddbb61c91.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
		],
	},
	{
		id: 14,
		name: "Web",
		slug: "web",
		platforms: [
			{
				id: 171,
				name: "Web",
				slug: "web",
				games_count: 260087,
				image_background:
					"https://media.rawg.io/media/screenshots/fa5/fa5614030bcda5f7eb5403c681aec7a6.jpg",
				image: null,
				year_start: null,
				year_end: null,
			},
		],
	},
] as const;

const RAW_GENRES = [
	{
		id: 4,
		name: "Action",
		slug: "action",
		games_count: 179173,
		image_background:
			"https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
		games: [
			{
				id: 3498,
				slug: "grand-theft-auto-v",
				name: "Grand Theft Auto V",
				added: 20640,
			},
			{
				id: 3328,
				slug: "the-witcher-3-wild-hunt",
				name: "The Witcher 3: Wild Hunt",
				added: 19907,
			},
			{
				id: 5286,
				slug: "tomb-raider",
				name: "Tomb Raider (2013)",
				added: 16270,
			},
			{
				id: 13536,
				slug: "portal",
				name: "Portal",
				added: 15979,
			},
			{
				id: 12020,
				slug: "left-4-dead-2",
				name: "Left 4 Dead 2",
				added: 15833,
			},
			{
				id: 5679,
				slug: "the-elder-scrolls-v-skyrim",
				name: "The Elder Scrolls V: Skyrim",
				added: 15531,
			},
		],
	},
	{
		id: 51,
		name: "Indie",
		slug: "indie",
		games_count: 63723,
		image_background:
			"https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
		games: [
			{
				id: 1030,
				slug: "limbo",
				name: "Limbo",
				added: 13167,
			},
			{
				id: 422,
				slug: "terraria",
				name: "Terraria",
				added: 12130,
			},
			{
				id: 3272,
				slug: "rocket-league",
				name: "Rocket League",
				added: 12009,
			},
			{
				id: 9767,
				slug: "hollow-knight",
				name: "Hollow Knight",
				added: 10573,
			},
			{
				id: 3612,
				slug: "hotline-miami",
				name: "Hotline Miami",
				added: 10136,
			},
			{
				id: 3790,
				slug: "outlast",
				name: "Outlast",
				added: 10058,
			},
		],
	},
	{
		id: 3,
		name: "Adventure",
		slug: "adventure",
		games_count: 138764,
		image_background:
			"https://media.rawg.io/media/games/0af/0af85e8edddfa55368e47c539914a220.jpg",
		games: [
			{
				id: 3439,
				slug: "life-is-strange-episode-1-2",
				name: "Life is Strange",
				added: 14757,
			},
			{
				id: 23027,
				slug: "the-walking-dead",
				name: "The Walking Dead: Season 1",
				added: 10959,
			},
			{
				id: 19487,
				slug: "alan-wake",
				name: "Alan Wake",
				added: 9741,
			},
			{
				id: 13668,
				slug: "amnesia-the-dark-descent",
				name: "Amnesia: The Dark Descent",
				added: 9729,
			},
			{
				id: 4386,
				slug: "saints-row-the-third",
				name: "Saints Row: The Third",
				added: 9655,
			},
			{
				id: 29177,
				slug: "detroit-become-human",
				name: "Detroit: Become Human",
				added: 9534,
			},
		],
	},
	{
		id: 5,
		name: "RPG",
		slug: "role-playing-games-rpg",
		games_count: 55521,
		image_background:
			"https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg",
		games: [
			{
				id: 3328,
				slug: "the-witcher-3-wild-hunt",
				name: "The Witcher 3: Wild Hunt",
				added: 19907,
			},
			{
				id: 5679,
				slug: "the-elder-scrolls-v-skyrim",
				name: "The Elder Scrolls V: Skyrim",
				added: 15531,
			},
			{
				id: 802,
				slug: "borderlands-2",
				name: "Borderlands 2",
				added: 14746,
			},
			{
				id: 3070,
				slug: "fallout-4",
				name: "Fallout 4",
				added: 13077,
			},
			{
				id: 41494,
				slug: "cyberpunk-2077",
				name: "Cyberpunk 2077",
				added: 12361,
			},
			{
				id: 278,
				slug: "horizon-zero-dawn",
				name: "Horizon Zero Dawn",
				added: 12292,
			},
		],
	},
	{
		id: 10,
		name: "Strategy",
		slug: "strategy",
		games_count: 55862,
		image_background:
			"https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg",
		games: [
			{
				id: 13633,
				slug: "civilization-v",
				name: "Sid Meier's Civilization V",
				added: 9084,
			},
			{
				id: 10243,
				slug: "company-of-heroes-2",
				name: "Company of Heroes 2",
				added: 9059,
			},
			{
				id: 13910,
				slug: "xcom-enemy-unknown",
				name: "XCOM: Enemy Unknown",
				added: 8034,
			},
			{
				id: 10065,
				slug: "cities-skylines",
				name: "Cities: Skylines",
				added: 7960,
			},
			{
				id: 5525,
				slug: "brutal-legend",
				name: "Brutal Legend",
				added: 7958,
			},
			{
				id: 11147,
				slug: "ark-survival-of-the-fittest",
				name: "ARK: Survival Of The Fittest",
				added: 7841,
			},
		],
	},
	{
		id: 2,
		name: "Shooter",
		slug: "shooter",
		games_count: 59474,
		image_background:
			"https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
		games: [
			{
				id: 4200,
				slug: "portal-2",
				name: "Portal 2",
				added: 18784,
			},
			{
				id: 4291,
				slug: "counter-strike-global-offensive",
				name: "Counter-Strike: Global Offensive",
				added: 16344,
			},
			{
				id: 12020,
				slug: "left-4-dead-2",
				name: "Left 4 Dead 2",
				added: 15833,
			},
			{
				id: 4062,
				slug: "bioshock-infinite",
				name: "BioShock Infinite",
				added: 14977,
			},
			{
				id: 802,
				slug: "borderlands-2",
				name: "Borderlands 2",
				added: 14746,
			},
			{
				id: 13537,
				slug: "half-life-2",
				name: "Half-Life 2",
				added: 14212,
			},
		],
	},
	{
		id: 40,
		name: "Casual",
		slug: "casual",
		games_count: 52222,
		image_background:
			"https://media.rawg.io/media/games/11f/11fd681c312c14644ab360888dba3486.jpg",
		games: [
			{
				id: 9721,
				slug: "garrys-mod",
				name: "Garry's Mod",
				added: 9412,
			},
			{
				id: 326292,
				slug: "fall-guys",
				name: "Fall Guys: Ultimate Knockout",
				added: 8266,
			},
			{
				id: 9830,
				slug: "brawlhalla",
				name: "Brawlhalla",
				added: 7290,
			},
			{
				id: 356714,
				slug: "among-us",
				name: "Among Us",
				added: 6981,
			},
			{
				id: 1959,
				slug: "goat-simulator",
				name: "Goat Simulator",
				added: 6120,
			},
			{
				id: 16343,
				slug: "a-story-about-my-uncle",
				name: "A Story About My Uncle",
				added: 5752,
			},
		],
	},
	{
		id: 14,
		name: "Simulation",
		slug: "simulation",
		games_count: 69000,
		image_background:
			"https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg",
		games: [
			{
				id: 10035,
				slug: "hitman",
				name: "Hitman",
				added: 10281,
			},
			{
				id: 654,
				slug: "stardew-valley",
				name: "Stardew Valley",
				added: 9659,
			},
			{
				id: 9721,
				slug: "garrys-mod",
				name: "Garry's Mod",
				added: 9412,
			},
			{
				id: 9882,
				slug: "dont-starve-together",
				name: "Don't Starve Together",
				added: 8914,
			},
			{
				id: 22509,
				slug: "minecraft",
				name: "Minecraft",
				added: 8211,
			},
			{
				id: 10065,
				slug: "cities-skylines",
				name: "Cities: Skylines",
				added: 7960,
			},
		],
	},
	{
		id: 7,
		name: "Puzzle",
		slug: "puzzle",
		games_count: 97269,
		image_background:
			"https://media.rawg.io/media/games/00b/00b164224ebaf381104d0b215a37afb3.jpg",
		games: [
			{
				id: 4200,
				slug: "portal-2",
				name: "Portal 2",
				added: 18784,
			},
			{
				id: 13536,
				slug: "portal",
				name: "Portal",
				added: 15979,
			},
			{
				id: 1030,
				slug: "limbo",
				name: "Limbo",
				added: 13167,
			},
			{
				id: 19709,
				slug: "half-life-2-episode-two",
				name: "Half-Life 2: Episode Two",
				added: 10590,
			},
			{
				id: 1450,
				slug: "inside",
				name: "INSIDE",
				added: 7767,
			},
			{
				id: 3853,
				slug: "trine-2-complete-story",
				name: "Trine 2: Complete Story",
				added: 7002,
			},
		],
	},
	{
		id: 11,
		name: "Arcade",
		slug: "arcade",
		games_count: 22656,
		image_background:
			"https://media.rawg.io/media/games/a57/a57e3c73ca46cbf55b526c828e3545c0.jpg",
		games: [
			{
				id: 3612,
				slug: "hotline-miami",
				name: "Hotline Miami",
				added: 10136,
			},
			{
				id: 17540,
				slug: "injustice-gods-among-us-ultimate-edition",
				name: "Injustice: Gods Among Us Ultimate Edition",
				added: 9175,
			},
			{
				id: 22509,
				slug: "minecraft",
				name: "Minecraft",
				added: 8211,
			},
			{
				id: 4003,
				slug: "grid-2",
				name: "GRID 2",
				added: 7238,
			},
			{
				id: 3408,
				slug: "hotline-miami-2-wrong-number",
				name: "Hotline Miami 2: Wrong Number",
				added: 5927,
			},
			{
				id: 58753,
				slug: "forza-horizon-4",
				name: "Forza Horizon 4",
				added: 5843,
			},
		],
	},
	{
		id: 83,
		name: "Platformer",
		slug: "platformer",
		games_count: 100776,
		image_background:
			"https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
		games: [
			{
				id: 1030,
				slug: "limbo",
				name: "Limbo",
				added: 13167,
			},
			{
				id: 422,
				slug: "terraria",
				name: "Terraria",
				added: 12130,
			},
			{
				id: 9767,
				slug: "hollow-knight",
				name: "Hollow Knight",
				added: 10573,
			},
			{
				id: 41,
				slug: "little-nightmares",
				name: "Little Nightmares",
				added: 10465,
			},
			{
				id: 3144,
				slug: "super-meat-boy",
				name: "Super Meat Boy",
				added: 9127,
			},
			{
				id: 17572,
				slug: "batman-aa-goty",
				name: "Batman: Arkham Asylum Game of the Year Edition",
				added: 7813,
			},
		],
	},
	{
		id: 1,
		name: "Racing",
		slug: "racing",
		games_count: 24655,
		image_background:
			"https://media.rawg.io/media/games/fc0/fc076b974197660a582abd34ebccc27f.jpg",
		games: [
			{
				id: 3272,
				slug: "rocket-league",
				name: "Rocket League",
				added: 12009,
			},
			{
				id: 4003,
				slug: "grid-2",
				name: "GRID 2",
				added: 7238,
			},
			{
				id: 2572,
				slug: "dirt-rally",
				name: "DiRT Rally",
				added: 6528,
			},
			{
				id: 58753,
				slug: "forza-horizon-4",
				name: "Forza Horizon 4",
				added: 5843,
			},
			{
				id: 5578,
				slug: "grid",
				name: "GRID (2008)",
				added: 5284,
			},
			{
				id: 19491,
				slug: "burnout-paradise-the-ultimate-box",
				name: "Burnout Paradise: The Ultimate Box",
				added: 4572,
			},
		],
	},
	{
		id: 59,
		name: "Massively Multiplayer",
		slug: "massively-multiplayer",
		games_count: 3579,
		image_background:
			"https://media.rawg.io/media/games/45b/45b57ed59de4b84effd8f6bc4b7bf515.jpg",
		games: [
			{
				id: 10213,
				slug: "dota-2",
				name: "Dota 2",
				added: 12011,
			},
			{
				id: 766,
				slug: "warframe",
				name: "Warframe",
				added: 11873,
			},
			{
				id: 10533,
				slug: "path-of-exile",
				name: "Path of Exile",
				added: 9600,
			},
			{
				id: 10142,
				slug: "playerunknowns-battlegrounds",
				name: "PlayerUnknown’s Battlegrounds",
				added: 9494,
			},
			{
				id: 362,
				slug: "for-honor",
				name: "For Honor",
				added: 9073,
			},
			{
				id: 326292,
				slug: "fall-guys",
				name: "Fall Guys: Ultimate Knockout",
				added: 8266,
			},
		],
	},
	{
		id: 15,
		name: "Sports",
		slug: "sports",
		games_count: 21323,
		image_background:
			"https://media.rawg.io/media/games/cb4/cb487ab3c54b81cb685388bab42ec848.jpeg",
		games: [
			{
				id: 3272,
				slug: "rocket-league",
				name: "Rocket League",
				added: 12009,
			},
			{
				id: 326292,
				slug: "fall-guys",
				name: "Fall Guys: Ultimate Knockout",
				added: 8266,
			},
			{
				id: 2572,
				slug: "dirt-rally",
				name: "DiRT Rally",
				added: 6528,
			},
			{
				id: 53341,
				slug: "jet-set-radio-2012",
				name: "Jet Set Radio",
				added: 5010,
			},
			{
				id: 9575,
				slug: "vrchat",
				name: "VRChat",
				added: 4455,
			},
			{
				id: 715,
				slug: "steep",
				name: "Steep",
				added: 3881,
			},
		],
	},
	{
		id: 6,
		name: "Fighting",
		slug: "fighting",
		games_count: 11753,
		image_background:
			"https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg",
		games: [
			{
				id: 17540,
				slug: "injustice-gods-among-us-ultimate-edition",
				name: "Injustice: Gods Among Us Ultimate Edition",
				added: 9175,
			},
			{
				id: 108,
				slug: "mortal-kombat-x",
				name: "Mortal Kombat X",
				added: 8480,
			},
			{
				id: 28179,
				slug: "sega-mega-drive-and-genesis-classics",
				name: "SEGA Mega Drive and Genesis Classics",
				added: 7805,
			},
			{
				id: 9830,
				slug: "brawlhalla",
				name: "Brawlhalla",
				added: 7290,
			},
			{
				id: 274480,
				slug: "mortal-kombat-11",
				name: "Mortal Kombat 11",
				added: 5193,
			},
			{
				id: 44525,
				slug: "yakuza-kiwami",
				name: "Yakuza Kiwami",
				added: 4374,
			},
		],
	},
	{
		id: 19,
		name: "Family",
		slug: "family",
		games_count: 5395,
		image_background:
			"https://media.rawg.io/media/games/9a1/9a18c226cf379272c698f26d2b79b3da.jpg",
		games: [
			{
				id: 3254,
				slug: "journey",
				name: "Journey",
				added: 8208,
			},
			{
				id: 3350,
				slug: "broken-age",
				name: "Broken Age",
				added: 4891,
			},
			{
				id: 3729,
				slug: "lego-the-hobbit",
				name: "LEGO The Hobbit",
				added: 4886,
			},
			{
				id: 1259,
				slug: "machinarium",
				name: "Machinarium",
				added: 4427,
			},
			{
				id: 1140,
				slug: "world-of-goo",
				name: "World of Goo",
				added: 4327,
			},
			{
				id: 4331,
				slug: "sonic-generations",
				name: "Sonic Generations",
				added: 4061,
			},
		],
	},
	{
		id: 28,
		name: "Board Games",
		slug: "board-games",
		games_count: 8373,
		image_background:
			"https://media.rawg.io/media/screenshots/8ff/8ffe8f19d2e764867c8ed625ddf4e368.jpg",
		games: [
			{
				id: 23557,
				slug: "gwent-the-witcher-card-game",
				name: "Gwent: The Witcher Card Game",
				added: 4600,
			},
			{
				id: 327999,
				slug: "dota-underlords",
				name: "Dota Underlords",
				added: 3881,
			},
			{
				id: 2055,
				slug: "adventure-capitalist",
				name: "AdVenture Capitalist",
				added: 3258,
			},
			{
				id: 758,
				slug: "hue",
				name: "Hue",
				added: 2342,
			},
			{
				id: 2306,
				slug: "poker-night-2",
				name: "Poker Night 2",
				added: 2012,
			},
			{
				id: 3187,
				slug: "armello",
				name: "Armello",
				added: 1954,
			},
		],
	},
	{
		id: 34,
		name: "Educational",
		slug: "educational",
		games_count: 15673,
		image_background:
			"https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg",
		games: [
			{
				id: 1358,
				slug: "papers-please",
				name: "Papers, Please",
				added: 6661,
			},
			{
				id: 1140,
				slug: "world-of-goo",
				name: "World of Goo",
				added: 4327,
			},
			{
				id: 2778,
				slug: "surgeon-simulator-cpr",
				name: "Surgeon Simulator",
				added: 3814,
			},
			{
				id: 9768,
				slug: "gameguru",
				name: "GameGuru",
				added: 2471,
			},
			{
				id: 13777,
				slug: "sid-meiers-civilization-iv-colonization",
				name: "Sid Meier's Civilization IV: Colonization",
				added: 2259,
			},
			{
				id: 6885,
				slug: "pirates-3",
				name: "Sid Meier's Pirates!",
				added: 2182,
			},
		],
	},
	{
		id: 17,
		name: "Card",
		slug: "card",
		games_count: 4526,
		image_background:
			"https://media.rawg.io/media/games/742/7424c1f7d0a8da9ae29cd866f985698b.jpg",
		games: [
			{
				id: 28121,
				slug: "slay-the-spire",
				name: "Slay the Spire",
				added: 4678,
			},
			{
				id: 23557,
				slug: "gwent-the-witcher-card-game",
				name: "Gwent: The Witcher Card Game",
				added: 4600,
			},
			{
				id: 18852,
				slug: "poker-night-at-the-inventory",
				name: "Poker Night at the Inventory",
				added: 2678,
			},
			{
				id: 8923,
				slug: "faeria",
				name: "Faeria",
				added: 2110,
			},
			{
				id: 332,
				slug: "the-elder-scrolls-legends",
				name: "The Elder Scrolls: Legends",
				added: 2084,
			},
			{
				id: 2306,
				slug: "poker-night-2",
				name: "Poker Night 2",
				added: 2012,
			},
		],
	},
] as const;

export { RAW_GENRES, RAW_PARENT_PLATFORMS };
