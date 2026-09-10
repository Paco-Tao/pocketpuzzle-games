export type Game = {
  slug: string;
  name: string;
  category: string;
  description: string;
  controls: string;
  deviceNote: string;
  updatedAt: string;
  thumbnail: string;
  imageUrl?: string;
  embedUrl?: string;
  embedApproved?: boolean;
  editorialStatus: 'preview-draft' | 'editorial-approved';
  rightsApproved: boolean;
  sourceUrl?: string;
  tips: string[];
  faqs: { question: string; answer: string }[];
};

export const games: Game[] = [
  {
    "slug": "daily-sudoku",
    "name": "Daily Sudoku",
    "category": "puzzle",
    "description": "Daily Sudoku gives a familiar number puzzle a regular place in your day. Play Daily Sudoku in your browser on Pocket Puzzle. Explore the rules and practical.",
    "controls": "Play: Select a cell, then use the game\u2019s number controls.",
    "deviceNote": "",
    "updatedAt": "2026-09-04",
    "thumbnail": "url(\"https://cdn.htmlgames.com/DailySudoku/img/icon/image-300x200.jpg\") center / cover",
    "imageUrl": "https://cdn.htmlgames.com/DailySudoku/img/icon/image-300x200.jpg",
    "embedUrl": "https://cdn.htmlgames.com/DailySudoku/index.html?lang=en",
    "embedApproved": true,
    "editorialStatus": "editorial-approved",
    "rightsApproved": true,
    "sourceUrl": "https://www.htmlgames.com/game/Daily+Sudoku",
    "tips": [
      "Start with a nearly complete row or box.",
      "Check the column before placing a digit.",
      "Use missing digits to narrow each cell\u2019s options.",
      "Try a different difficulty when you want a different challenge."
    ],
    "faqs": [
      {
        "question": "Which digits are used?",
        "answer": "The grid uses digits 1 through 9."
      },
      {
        "question": "What is the main rule?",
        "answer": "Each digit appears once in each row, column and 3\u00d73 box."
      },
      {
        "question": "Can I choose the difficulty?",
        "answer": "The provider offers four difficulty levels."
      },
      {
        "question": "Are older puzzles available?",
        "answer": "The game includes an archive covering several months."
      }
    ]
  },
  {
    "slug": "daily-nonograms",
    "name": "Daily Nonograms",
    "category": "puzzle",
    "description": "Daily Nonograms turns a set of number clues into a visual reasoning exercise. Play Daily Nonograms in your browser on Pocket Puzzle. Explore the rules and.",
    "controls": "Play: Use the in-game marking controls on the grid.",
    "deviceNote": "",
    "updatedAt": "2026-09-04",
    "thumbnail": "url(\"https://www.htmlgames.com/uploaded/game/thumb500/dailynonograms500.webp\") center / cover",
    "imageUrl": "https://www.htmlgames.com/uploaded/game/thumb500/dailynonograms500.webp",
    "embedUrl": "https://cdn.htmlgames.com/DailyNonograms/index.html?lang=en",
    "embedApproved": true,
    "editorialStatus": "editorial-approved",
    "rightsApproved": true,
    "sourceUrl": "https://www.htmlgames.com/game/Daily+Nonograms",
    "tips": [
      "Read both sets of clues before marking.",
      "Work from the lines that give you the most information.",
      "Check each change against the crossing line.",
      "Choose a smaller grid while learning the clue system."
    ],
    "faqs": [
      {
        "question": "Where are the clues?",
        "answer": "They are provided for the rows and columns."
      },
      {
        "question": "Are there different sizes?",
        "answer": "The provider lists puzzles in different sizes."
      },
      {
        "question": "Is this a daily puzzle?",
        "answer": "Yes, Daily Nonograms is part of the provider\u2019s daily puzzle collection."
      },
      {
        "question": "What am I trying to solve?",
        "answer": "Use the row and column hints to determine the grid pattern."
      }
    ]
  },
  {
    "slug": "daily-word-search",
    "name": "Daily Word Search",
    "category": "puzzle",
    "description": "Daily Word Search pairs a letter grid with a list of words to find. Play Daily Word Search in your browser on Pocket Puzzle. Explore the rules and practical.",
    "controls": "Play: Select matching letter sequences using the game\u2019s word-selection controls.",
    "deviceNote": "",
    "updatedAt": "2026-09-04",
    "thumbnail": "url(\"https://www.htmlgames.com/uploaded/game/thumb500/dailywordsearch500.webp\") center / cover",
    "imageUrl": "https://www.htmlgames.com/uploaded/game/thumb500/dailywordsearch500.webp",
    "embedUrl": "https://cdn.htmlgames.com/DailyWordSearch/index.html?lang=en",
    "embedApproved": true,
    "editorialStatus": "editorial-approved",
    "rightsApproved": true,
    "sourceUrl": "https://www.htmlgames.com/game/Daily+Word+Search",
    "tips": [
      "Start with one word instead of scanning for everything.",
      "Look for a distinctive letter in your target.",
      "Check the entire spelling before selecting.",
      "Return to the list regularly to track remaining targets."
    ],
    "faqs": [
      {
        "question": "What do I need to find?",
        "answer": "Find every word indicated by the puzzle."
      },
      {
        "question": "Do I need to make up words?",
        "answer": "No. The puzzle provides the words to search for."
      },
      {
        "question": "Is there a daily level?",
        "answer": "The provider describes a new word-search level each day."
      },
      {
        "question": "How do I know what remains?",
        "answer": "Refer to the word list displayed inside the game."
      }
    ]
  },
  {
    "slug": "daily-bridges",
    "name": "Daily Bridges",
    "category": "puzzle",
    "description": "Daily Bridges is a network puzzle built around numbered islands. Play Daily Bridges in your browser on Pocket Puzzle. Explore the rules and practical tips.",
    "controls": "Play: Use the game\u2019s bridge controls to connect aligned islands.",
    "deviceNote": "",
    "updatedAt": "2026-09-04",
    "thumbnail": "url(\"https://www.htmlgames.com/uploaded/game/thumb500/dailybridges500.webp\") center / cover",
    "imageUrl": "https://www.htmlgames.com/uploaded/game/thumb500/dailybridges500.webp",
    "embedUrl": "https://cdn.htmlgames.com/DailyBridges/index.html?lang=en",
    "embedApproved": true,
    "editorialStatus": "editorial-approved",
    "rightsApproved": true,
    "sourceUrl": "https://www.htmlgames.com/game/Daily+Bridges",
    "tips": [
      "Count both ends of a proposed connection.",
      "Check the islands with fewer possible neighbors first.",
      "Remember the two-bridge limit between a pair.",
      "Review the overall network as well as individual totals."
    ],
    "faqs": [
      {
        "question": "What do the island numbers mean?",
        "answer": "They specify how many bridges connect to that island."
      },
      {
        "question": "Can bridges run diagonally?",
        "answer": "No. Connections are horizontal or vertical."
      },
      {
        "question": "How many bridges can join two islands?",
        "answer": "No more than two."
      },
      {
        "question": "What is the goal?",
        "answer": "Connect the islands in a network while satisfying their numbers."
      }
    ]
  },
  {
    "slug": "1010-sudoku",
    "name": "1010 Sudoku",
    "category": "puzzle",
    "description": "1010 Sudoku combines block placement with the three by three regions associated with Sudoku. Play 1010 Sudoku in your browser on Pocket Puzzle. Explore the.",
    "controls": "Play: Drag blocks onto the grid.",
    "deviceNote": "",
    "updatedAt": "2026-09-04",
    "thumbnail": "url(\"https://www.htmlgames.com/uploaded/game/thumb500/1010sudoku500300.webp\") center / cover",
    "imageUrl": "https://www.htmlgames.com/uploaded/game/thumb500/1010sudoku500300.webp",
    "embedUrl": "https://cdn.htmlgames.com/1010Sudoku/index.html?lang=en",
    "embedApproved": true,
    "editorialStatus": "editorial-approved",
    "rightsApproved": true,
    "sourceUrl": "https://www.htmlgames.com/game/1010+Sudoku",
    "tips": [
      "Look for placements that help more than one line.",
      "Keep useful open spaces available.",
      "Check the 3\u00d73 regions as well as the rows.",
      "Compare possible positions before dragging a block."
    ],
    "faqs": [
      {
        "question": "How do I place pieces?",
        "answer": "Drag blocks onto the grid."
      },
      {
        "question": "What shapes am I trying to fill?",
        "answer": "Rows, columns and 3\u00d73 regions."
      },
      {
        "question": "Why is Sudoku in the name?",
        "answer": "The game uses a 3\u00d73 region rule alongside block placement."
      },
      {
        "question": "Is this a number-entry Sudoku?",
        "answer": "The provider describes dragging blocks, rather than filling the grid with digits."
      }
    ]
  },
  {
    "slug": "traffic-puzzle",
    "name": "Traffic Puzzle",
    "category": "puzzle",
    "description": "Traffic Puzzle asks you to solve a traffic arrangement by choosing cars in the correct order. Play Traffic Puzzle in your browser on Pocket Puzzle. Explore.",
    "controls": "Play: Click cars in the correct order.",
    "deviceNote": "",
    "updatedAt": "2026-09-04",
    "thumbnail": "url(\"https://www.htmlgames.com/uploaded/game/thumb500/trafficpuzzle500300.webp\") center / cover",
    "imageUrl": "https://www.htmlgames.com/uploaded/game/thumb500/trafficpuzzle500300.webp",
    "embedUrl": "https://cdn.htmlgames.com/TrafficPuzzle/index.html?lang=en",
    "embedApproved": true,
    "editorialStatus": "editorial-approved",
    "rightsApproved": true,
    "sourceUrl": "https://www.htmlgames.com/game/Traffic+Puzzle",
    "tips": [
      "Study the arrangement before your first selection.",
      "Think about which move helps the next one.",
      "Watch what changes after selecting a car.",
      "Reassess the remaining sequence after each step."
    ],
    "faqs": [
      {
        "question": "What is the objective?",
        "answer": "Solve the traffic arrangement."
      },
      {
        "question": "What is the main control?",
        "answer": "Click the cars."
      },
      {
        "question": "Does order matter?",
        "answer": "Yes. The provider specifies selecting cars in the correct order."
      },
      {
        "question": "What kind of puzzle is this?",
        "answer": "It is a visual sequencing puzzle based on a traffic layout."
      }
    ]
  }
];
export const categories = [
  {
    "slug": "puzzle",
    "name": "Puzzle Games",
    "intro": "Browse verified puzzle games with practical controls, original guides, and direct browser play."
  }
] as const;
export const site = {
  name: "Pocket Puzzle",
  url: "https://pocketpuzzle.games",
  description: "Play Pocket Puzzle and a curated collection of free browser games with practical guides and instant access."
};

export const bySlug = (slug: string) => games.find((game) => game.slug === slug);
export const isAbsoluteHttpsUrl = (value?: string) => {
  if (!value) return false;
  try { return new URL(value).protocol === 'https:'; } catch { return false; }
};
export const isGamePublishable = (game: Game) =>
  game.editorialStatus === 'editorial-approved' &&
  game.rightsApproved &&
  game.embedApproved === true &&
  isAbsoluteHttpsUrl(game.embedUrl) &&
  isAbsoluteHttpsUrl(game.imageUrl) &&
  isAbsoluteHttpsUrl(game.sourceUrl);
export const relatedTo = (game: Game) => games
  .filter((item) => item.slug !== game.slug)
  .sort((left, right) => Number(right.category === game.category) - Number(left.category === game.category))
  .slice(0, 5);
