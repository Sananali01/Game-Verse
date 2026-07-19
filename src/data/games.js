// Note: cover art is rendered as generated gradient placeholders (no third-party
// box-art images are bundled). Swap `cover` for a real asset path per game as needed.
const g = (i) => `hsl(${(i * 47) % 360} 70% 45%)`
import gtaV from '../assets/games/GTA 5.jpg'
import gtaVI from '../assets/games/GTA 6.jpg'
import rdr2 from '../assets/games/RDR 2.jpg'
import cyberpunk2077 from '../assets/games/CyberPunk.jpg'
import blackMythWukong from '../assets/games/Wu Kong.jpg'
import eldenRing from '../assets/games/Elden.jpg'
import eldenRingNightreign from '../assets/games/Elden Night.jpg'
import acShadows from '../assets/games/AC Shadows.jpg'
import acMirage from '../assets/games/AC Mirage.jpg'
import codBO6 from '../assets/games/BO6.jpg'
import warzone from '../assets/games/warzone.jpg'
import cs2 from '../assets/games/CS2.jpg'
import valorant from '../assets/games/Valorant.jpg'
import apexLegends from '../assets/games/Apex.jpg'
import pubg from '../assets/games/Pubg.jpg'
import fortnite from '../assets/games/fortnite.jpg'
import forzaHorizon5 from '../assets/games/FH5.jpg'
import fc25 from '../assets/games/FC25.jpg'
import nba2k25 from '../assets/games/NBA.jpg'
import wwe2k25 from '../assets/games/WWE 2K25.jpg'
import hogwartsLegacy from '../assets/games/Hogwarts.jpg'
import witcher3 from '../assets/games/Witcher 3.jpg'
import re4Remake from '../assets/games/RE4.jpg'
import spiderMan2 from '../assets/games/SM2.jpg'
import ghostOfTsushima from '../assets/games/GOT.jpg'
import godOfWarRagnarok from '../assets/games/GOW.jpg'
import horizonForbiddenWest from '../assets/games/Horizon.jpg'
import helldivers2 from '../assets/games/Hell.jpg'
import doomDarkAges from '../assets/games/Doom.jpg'

const covers = {
  'gta-v': gtaV,
  'gta-vi': gtaVI,
  'rdr2': rdr2,
  'cyberpunk-2077': cyberpunk2077,
  'black-myth-wukong': blackMythWukong,
  'elden-ring': eldenRing,
  'elden-ring-nightreign': eldenRingNightreign,
  'ac-shadows': acShadows,
  'ac-mirage': acMirage,
  'cod-bo6': codBO6,
  'warzone': warzone,
  'cs2': cs2,
  'valorant': valorant,
  'apex-legends': apexLegends,
  'pubg': pubg,
  'fortnite': fortnite,
  'forza-horizon-5': forzaHorizon5,
  'fc-25': fc25,
  'nba-2k25': nba2k25,
  'wwe-2k25': wwe2k25,
  'hogwarts-legacy': hogwartsLegacy,
  'witcher-3': witcher3,
  're4-remake': re4Remake,
  'spider-man-2': spiderMan2,
  'ghost-of-tsushima': ghostOfTsushima,
  'god-of-war-ragnarok': godOfWarRagnarok,
  'horizon-forbidden-west': horizonForbiddenWest,
  'helldivers-2': helldivers2,
  'doom-dark-ages': doomDarkAges,
}

export const games = [
  {
    id: 'gta-v',
    title: 'GTA V',
    genre: 'Action',
    platform: ['PC', 'PS5', 'Xbox'],
    price: 29.99,
    discount: 40,
    rating: 4.8,
    reviews: 128430,
    tags: ['Open World', 'Action'],
    desc: 'Experience the lives of three unforgettable criminals as they pull off daring heists across the massive city of Los Santos. Explore a living open world filled with action, fast cars, side missions, and endless opportunities for adventure.'
  },
  {
    id: 'gta-vi',
    title: 'GTA VI',
    genre: 'Action',
    platform: ['PS5', 'Xbox'],
    price: 69.99,
    discount: 0,
    rating: 4.9,
    reviews: 4021,
    tags: ['Open World', 'Action'],
    desc: 'Return to the iconic streets of Vice City in Rockstar’s biggest adventure yet. Discover a massive world packed with crime, unforgettable characters, realistic gameplay, and a thrilling modern story.'
  },
  {
    id: 'rdr2',
    title: 'Red Dead Redemption 2',
    genre: 'Adventure',
    platform: ['PC', 'PS5', 'Xbox'],
    price: 39.99,
    discount: 50,
    rating: 4.9,
    reviews: 210044,
    tags: ['Open World', 'Western'],
    desc: 'Become Arthur Morgan and survive the final days of the Wild West. Explore breathtaking landscapes, build relationships, hunt wildlife, and experience one of the greatest stories ever told in gaming.'
  },
  {
    id: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    genre: 'RPG',
    platform: ['PC', 'PS5', 'Xbox'],
    price: 49.99,
    discount: 60,
    rating: 4.5,
    reviews: 189220,
    tags: ['RPG', 'Open World'],
    desc: 'Enter the futuristic streets of Night City where every decision shapes your future. Upgrade your cybernetic abilities, complete dangerous contracts, and become a legend in a stunning open-world RPG.'
  },
  {
    id: 'black-myth-wukong',
    title: 'Black Myth: Wukong',
    genre: 'Action RPG',
    platform: ['PC', 'PS5'],
    price: 59.99,
    discount: 10,
    rating: 4.7,
    reviews: 62110,
    tags: ['RPG', 'Action'],
    desc: 'Journey through a breathtaking world inspired by Chinese mythology. Master powerful abilities, battle legendary creatures, and uncover ancient secrets in an unforgettable fantasy adventure.'
  },
  {
    id: 'elden-ring',
    title: 'Elden Ring',
    genre: 'RPG',
    platform: ['PC', 'PS5', 'Xbox'],
    price: 59.99,
    discount: 20,
    rating: 4.9,
    reviews: 302011,
    tags: ['RPG', 'Open World'],
    desc: 'Rise as the Tarnished and explore the mysterious Lands Between. Face terrifying bosses, discover hidden dungeons, and forge your own path through an epic open-world fantasy.'
  },
  {
    id: 'elden-ring-nightreign',
    title: 'Elden Ring Nightreign',
    genre: 'Action RPG',
    platform: ['PC', 'PS5', 'Xbox'],
    price: 39.99,
    discount: 0,
    rating: 4.4,
    reviews: 18040,
    tags: ['RPG', 'Co-op'],
    desc: 'Experience a fresh cooperative adventure in the Elden Ring universe. Team up with allies, defeat deadly enemies, and uncover mysterious new challenges together.'
  },
  {
    id: 'ac-shadows',
    title: "Assassin's Creed Shadows",
    genre: 'Action',
    platform: ['PC', 'PS5', 'Xbox'],
    price: 69.99,
    discount: 15,
    rating: 4.3,
    reviews: 41220,
    tags: ['Open World', 'Stealth'],
    desc: 'Explore feudal Japan through the eyes of two unique heroes. Master stealth, sword combat, and exploration while uncovering a gripping tale of honor and revenge.'
  },
  {
    id: 'ac-mirage',
    title: "Assassin's Creed Mirage",
    genre: 'Action',
    platform: ['PC', 'PS5', 'Xbox'],
    price: 39.99,
    discount: 45,
    rating: 4.2,
    reviews: 55210,
    tags: ['Stealth', 'Action'],
    desc: 'Return to the classic Assassin’s Creed experience in the bustling streets of Baghdad. Use stealth, parkour, and hidden blades to eliminate your targets with precision.'
  },
  {
    id: 'cod-bo6',
    title: 'Call of Duty: Black Ops 6',
    genre: 'FPS',
    platform: ['PC', 'PS5', 'Xbox'],
    price: 69.99,
    discount: 10,
    rating: 4.4,
    reviews: 98040,
    tags: ['FPS', 'Multiplayer'],
    desc: 'Join covert operations across cinematic battlefields with fast-paced combat and new movement mechanics. Enjoy an action-packed campaign, multiplayer, and thrilling online battles.'
  },
  {
    id: 'warzone',
    title: 'Warzone',
    genre: 'Battle Royale',
    platform: ['PC', 'PS5', 'Xbox'],
    price: 0,
    discount: 0,
    rating: 4.1,
    reviews: 402100,
    tags: ['Battle Royale', 'FPS'],
    desc: 'Drop into a massive battlefield where every match tells a different story. Loot powerful gear, complete contracts, and fight to become the last squad standing.'
  },
  {
    id: 'cs2',
    title: 'Counter-Strike 2',
    genre: 'FPS',
    platform: ['PC'],
    price: 0,
    discount: 0,
    rating: 4.5,
    reviews: 512300,
    tags: ['FPS', 'Esports'],
    desc: 'Counter-Strike returns with upgraded visuals, realistic smoke physics, and smoother gameplay. Test your teamwork, precision, and tactical skills in competitive matches.'
  },
  {
    id: 'valorant',
    title: 'Valorant',
    genre: 'FPS',
    platform: ['PC'],
    price: 0,
    discount: 0,
    rating: 4.4,
    reviews: 341200,
    tags: ['FPS', 'Esports'],
    desc: 'Combine precise gunplay with unique Agent abilities in intense tactical battles. Master teamwork and strategy while climbing the competitive ranks.'
  },
  {
    id: 'apex-legends',
    title: 'Apex Legends',
    genre: 'Battle Royale',
    platform: ['PC', 'PS5', 'Xbox'],
    price: 0,
    discount: 0,
    rating: 4.3,
    reviews: 288100,
    tags: ['Battle Royale', 'FPS'],
    desc: 'Choose from a diverse roster of powerful Legends and battle across dynamic arenas. Work with your squad, master unique abilities, and claim victory together.'
  },
  {
    id: 'pubg',
    title: 'PUBG: Battlegrounds',
    genre: 'Battle Royale',
    platform: ['PC', 'PS5', 'Xbox'],
    price: 0,
    discount: 0,
    rating: 4.0,
    reviews: 190400,
    tags: ['Battle Royale'],
    desc: 'Fight for survival on huge battlefields where every decision matters. Search for weapons, outsmart opponents, and become the last player standing.'
  },
  {
    id: 'fortnite',
    title: 'Fortnite',
    genre: 'Battle Royale',
    platform: ['PC', 'PS5', 'Xbox'],
    price: 0,
    discount: 0,
    rating: 4.2,
    reviews: 501200,
    tags: ['Battle Royale', 'Sandbox'],
    desc: 'Build, battle, and create your own adventures in Fortnite’s ever-changing universe. Enjoy exciting live events, creative modes, and collaborations with famous franchises.'
  },
    {
    id: 'fc-25',
    title: 'EA Sports FC 25',
    genre: 'Sports',
    platform: ['PC', 'PS5', 'Xbox'],
    price: 59.99,
    discount: 20,
    rating: 4.2,
    reviews: 88300,
    tags: ['Sports'],
    desc: 'EA Sports FC 25 delivers realistic football gameplay with improved passing, smarter AI, and authentic stadium atmospheres. Build your dream squad in Ultimate Team, manage your favorite club in Career Mode, and compete online against players worldwide.'
  },
  {
    id: 'nba-2k25',
    title: 'NBA 2K25',
    genre: 'Sports',
    platform: ['PC', 'PS5', 'Xbox'],
    price: 59.99,
    discount: 25,
    rating: 4.0,
    reviews: 51200,
    tags: ['Sports'],
    desc: 'NBA 2K25 brings enhanced player animations, realistic gameplay mechanics, and an expanded MyCareer experience. Dominate the court with your custom player or manage legendary franchises through multiple NBA seasons.'
  },
  {
    id: 'wwe-2k25',
    title: 'WWE 2K25',
    genre: 'Sports',
    platform: ['PC', 'PS5', 'Xbox'],
    price: 59.99,
    discount: 30,
    rating: 3.9,
    reviews: 28400,
    tags: ['Sports', 'Fighting'],
    desc: 'Step into the ring with WWE 2K25 featuring an expanded superstar roster, smoother gameplay, and exciting match types. Create your own wrestler, relive iconic rivalries, and compete for championship gold.'
  },
  {
    id: 'hogwarts-legacy',
    title: 'Hogwarts Legacy',
    genre: 'RPG',
    platform: ['PC', 'PS5', 'Xbox'],
    price: 49.99,
    discount: 40,
    rating: 4.6,
    reviews: 176200,
    tags: ['RPG', 'Open World'],
    desc: 'Explore Hogwarts School of Witchcraft and Wizardry in the 1800s as a student with unique magical abilities. Attend classes, master powerful spells, discover hidden secrets, and shape the future of the wizarding world.'
  },
  {
    id: 'witcher-3',
    title: 'The Witcher 3',
    genre: 'RPG',
    platform: ['PC', 'PS5', 'Xbox'],
    price: 39.99,
    discount: 60,
    rating: 4.9,
    reviews: 402100,
    tags: ['RPG', 'Open World'],
    desc: 'Become Geralt of Rivia, a monster hunter searching for his adopted daughter across a vast fantasy world. Complete unforgettable quests, battle deadly creatures, and make choices that shape the fate of kingdoms.'
  },
  {
    id: 're4-remake',
    title: 'Resident Evil 4 Remake',
    genre: 'Horror',
    platform: ['PC', 'PS5', 'Xbox'],
    price: 49.99,
    discount: 30,
    rating: 4.8,
    reviews: 96200,
    tags: ['Horror', 'Action'],
    desc: 'Experience the survival horror classic rebuilt with modern visuals, refined gameplay, and enhanced storytelling. Rescue the president daughter while surviving terrifying enemies, resource management, and intense combat encounters'
  },
  {
    id: 'spider-man-2',
    title: "Marvel's Spider-Man 2",
    genre: 'Action',
    platform: ['PS5'],
    price: 69.99,
    discount: 15,
    rating: 4.8,
    reviews: 152300,
    tags: ['Action', 'Open World'],
    desc: 'Swing through a larger New York City as both Peter Parker and Miles Morales. Face powerful villains including Venom, unlock new abilities, and experience an emotional superhero adventure packed with action.'
  },
  {
    id: 'ghost-of-tsushima',
    title: 'Ghost of Tsushima',
    genre: 'Action',
    platform: ['PC', 'PS5'],
    price: 49.99,
    discount: 25,
    rating: 4.8,
    reviews: 141200,
    tags: ['Open World', 'Action'],
    desc: 'Fight to save Tsushima Island from the Mongol invasion as samurai Jin Sakai. Master honorable sword combat or embrace stealth tactics while exploring breathtaking landscapes inspired by feudal Japan.'
  },
  {
    id: 'god-of-war-ragnarok',
    title: 'God of War Ragnarök',
    genre: 'Action',
    platform: ['PS5'],
    price: 59.99,
    discount: 20,
    rating: 4.9,
    reviews: 210500,
    tags: ['Action', 'Adventure'],
    desc: 'Join Kratos and Atreus on an epic journey across the Nine Realms as Ragnarök approaches. Face powerful Norse gods, solve ancient mysteries, and experience one of gaming&nsbp;s most emotional father-son stories.'
  },
  {
    id: 'horizon-forbidden-west',
    title: 'Horizon Forbidden West',
    genre: 'RPG',
    platform: ['PC', 'PS5'],
    price: 49.99,
    discount: 30,
    rating: 4.7,
    reviews: 132100,
    tags: ['RPG', 'Open World'],
    desc: 'Travel across the mysterious Forbidden West as Aloy in search of answers that could save humanity. Hunt massive robotic creatures, uncover forgotten civilizations, and explore a stunning post-apocalyptic world.'
  },
  {
    id: 'helldivers-2',
    title: 'Helldivers 2',
    genre: 'Shooter',
    platform: ['PC', 'PS5'],
    price: 39.99,
    discount: 0,
    rating: 4.6,
    reviews: 176300,
    tags: ['Co-op', 'FPS'],
    desc: 'Team up with friends in explosive cooperative missions to defend Super Earth from alien threats. Coordinate powerful stratagems, survive overwhelming enemy forces, and spread managed democracy across the galaxy.'
  },
  {
    id: 'doom-dark-ages',
    title: 'Doom: The Dark Ages',
    genre: 'FPS',
    platform: ['PC', 'PS5', 'Xbox'],
    price: 69.99,
    discount: 0,
    rating: 4.7,
    reviews: 46100,
    tags: ['FPS', 'Action'],
    desc: 'Discover the brutal origin story of the Doom Slayer in a dark medieval world filled with demons. Wield devastating weapons, including the Shield Saw, and unleash relentless combat against the armies of Hell.'
  }
].map((game, i) => ({
  ...game,
  color: g(i),
  cover: covers[game.id],
  slug: game.id,
  finalPrice: +(game.price * (1 - game.discount / 100)).toFixed(2),
  screenshots: 4,
}))

export const getGameBySlug = (slug) => games.find((g) => g.slug === slug)
