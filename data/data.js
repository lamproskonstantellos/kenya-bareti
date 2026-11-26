/* The same data as the three JSON files in this folder, as JavaScript objects.
   The pages load this file with a script tag, so they also work when they are
   opened from the disk. On a web server the pages read the JSON files and this
   file is the fallback. If you change a JSON file, make the same change here. */

window.BARETI_DATA = {};

/* copy of site_config.json */
window.BARETI_DATA.config = {
 "site": {
  "title": "BARETI Module 1: Sustainable Energy Planning Training",
  "place": "Ibis Hotel, Nairobi, Kenya",
  "dates": "10 to 11 November 2026",
  "programme": "BARETI Kenya – Bavarian Renewable Energy Training Initiative",
  "organisers": [
   "bbw international, the international division of Bildungswerk der Bayerischen Wirtschaft (bbw) gGmbH",
   "Delegation of German Industry and Commerce for Eastern Africa (AHK Eastern Africa)"
  ],
  "repository_name": "kenya-bareti",
  "last_update": "2026-11-26",
  "footer_note": "Documentation by the trainers. Not an official website of the organisers."
 },
 "trainers": [
  {
   "name": "Lampros Konstantellos",
   "role": "Research Associate and doctoral candidate, Technical University of Munich (TUM)",
   "affiliation": [],
   "sessions": [
    "Fundamentals and Methods of Integrated Energy Planning (Day 1)",
    "Energy Modelling at National Scale (Day 2)"
   ],
   "portrait": "Portrait_Lampros_Konstantellos.png",
   "email": "lampros.konstantellos@tum.de",
   "linkedin": "https://www.linkedin.com/in/lampros-konstantellos",
   "website": "https://www.mep.tum.de/mep/coses/team/lampros-konstantellos/",
   "lines": [
    "Research Associate and doctoral candidate, Technical University of Munich (TUM)",
    "M.Eng. Electrical and Computer Engineering, University of Patras"
   ]
  },
  {
   "name": "Tim Lorenz",
   "role": "Research Assistant, Technical University of Munich (TUM)",
   "affiliation": [],
   "sessions": [
    "Integration of Renewable Energy (Day 1)",
    "Energy Modelling at Household Level (Day 2)"
   ],
   "portrait": "Portrait_Tim_Lorenz.jpg",
   "email": "ti.lorenz@tum.de",
   "linkedin": "https://www.linkedin.com/in/tim-lorenz-518513231/",
   "website": "",
   "lines": [
    "Research Assistant, Technical University of Munich (TUM)",
    "Freelance lecturer, Bildungswerk der Bayerischen Wirtschaft (bbw)",
    "M.Sc. Environmental Engineering, Technical University of Munich (TUM)"
   ]
  }
 ],
 "links": {
  "kenya_power_planning_lab": "https://lamproskonstantellos.github.io/kenya-lab/",
  "kenya_power_planning_lab_run_the_grid": "https://lamproskonstantellos.github.io/kenya-lab/#grid",
  "kenya_power_planning_lab_class_board": "https://lamproskonstantellos.github.io/kenya-lab/#board",
  "kenya_power_planning_lab_source": "https://github.com/lamproskonstantellos/kenya-lab",
  "miro_board": "https://miro.com/app/board/uXjVEPB0LM4=",
  "miro_password": "bareti-2026",
  "show_miro_password": true,
  "investment_simulation": "",
  "household_energy_lab": "",
  "coses": "https://www.mep.tum.de/mep/coses/",
  "onedrive_shared_folder": ""
 },
 "downloads": [
  {
   "name": "Slides, Day 1",
   "content": "Introductions, Methods of integrated energy planning, Integrating wind and solar into a power system",
   "format": "PDF",
   "file": "downloads/BARETI_Module1_Day1_Slides.pdf",
   "url": ""
  },
  {
   "name": "Slides, Day 2",
   "content": "Household modelling for PV and battery, Energy system modelling at national scale",
   "format": "PDF",
   "file": "downloads/BARETI_Module1_Day2_Slides.pdf",
   "url": ""
  },
  {
   "name": "Agenda",
   "content": "The two-day schedule",
   "format": "PDF",
   "file": "downloads/BARETI_Module1_Agenda.pdf",
   "url": ""
  }
 ],
 "tum_open_source_tools": {
  "intro": "Open-source tools of the Chair of Renewable and Sustainable Energy Systems (ENS) at the Technical University of Munich (TUM). All of them are free to use. The descriptions follow the README of each repository.",
  "organisation": "https://github.com/tum-ens",
  "tools": [
   {
    "name": "urbs",
    "url": "https://github.com/tum-ens/urbs",
    "license": "GNU General Public License v3 or later",
    "in_the_training": "The optimisation behind the household energy lab of Day 2 (through its web interface webURBS). Named on the slide of free tools on Day 2.",
    "description": "A linear optimisation model for distributed energy systems. It plans capacity expansion and unit commitment and finds the system with the lowest cost that meets given demand time series, for electricity and other commodities. It works with hourly time steps by default and has a focus on the sizing and use of storage. It is written in Python on Pandas and Pyomo."
   },
   {
    "name": "pyGRETA",
    "url": "https://github.com/tum-ens/pyGRETA",
    "license": "GNU General Public License v3",
    "in_the_training": "Named on the slide of free tools on Day 2.",
    "description": "The python Generator of REnewable Time series and mAps. It produces high-resolution potential maps and time series for onshore wind, offshore wind, solar photovoltaics (PV) and concentrated solar power, for any region of the world that the user defines with a shapefile. It uses MERRA-2 weather data and takes land use, topography, slope and the distance to urban areas into account."
   },
   {
    "name": "pylovo",
    "url": "https://github.com/tum-ens/pylovo",
    "license": "MIT License",
    "in_the_training": "",
    "description": "A Python tool that generates synthetic low-voltage distribution grids from open data for a region the user defines: transformers, feeder cables and house connections, with grid statistics. The grids are pandapower models. The current data pipeline uses German open data (3D building models, census data and OpenStreetMap)."
   },
   {
    "name": "InfDB",
    "url": "https://github.com/tum-ens/InfDB",
    "license": "Apache License 2.0",
    "in_the_training": "",
    "description": "A modular data and tool infrastructure for energy and infrastructure modelling. It runs in containers, imports open datasets by configuration into a PostgreSQL and PostGIS database and gives tools one standard way to reach the data. It is meant for energy system modelling, municipal heat and infrastructure planning, and geospatial analysis."
   },
   {
    "name": "SurroGrid",
    "url": "https://github.com/tum-ens/SurroGrid",
    "license": "See the licence files in the repository",
    "in_the_training": "",
    "description": "A deep learning surrogate model that predicts the net demand at the transformer of low-voltage grids. One workflow (GridExpand) creates simulation data for many grids with urbs and power flow calculations. A second workflow (GridForecast) trains neural networks on these data as fast forecasters. It was developed for German low-voltage grids."
   }
  ]
 }
};

/* copy of report_tables.json */
window.BARETI_DATA.tables = {
 "source": "Tables used by the site",
 "tables": [
  {
   "caption": "Table 3: Programme of the session Fundamentals and Methods of Integrated Energy Planning on Day 1",
   "header": [
    "Part",
    "Content",
    "Activity and check"
   ],
   "rows": [
    [
     "Opening",
     "Four learning outcomes. How we work together: the participants bring their system and its data, the trainer brings methods and comparisons.",
     "Quiz 1: Kenya in key numbers (six questions)."
    ],
    [
     "Part 1: The planning cycle and Kenya's plans",
     "Planning as a loop of nine steps, from objectives to review. What makes planning integrated. Kenya's plans with their horizons, owners and tools: the Integrated National Energy Plan (INEP), the LCPDP and the Transmission Master Plan (TMP). How Chile, Germany and South Africa organise planning.",
     "The weakest link: which step of the cycle is weakest in your experience? By show of hands."
    ],
    [
     "Part 2: Demand forecasting",
     "Five past plans all forecast the 2023 peak too high, by 1% to 30%. Three ways to forecast demand: top-down, bottom-up or a mix of both. The LCPDP's formula from energy sold to the peak. Kenya's three scenarios, from 5 to 13.5 GW by 2043.",
     "Worked example in pairs: the 2030 peak with an own growth rate and loss level. The possible answers span 1,062 MW, the scenarios of the TMP 1,189 MW."
    ],
    [
     "Part 3: What a kWh costs",
     "The LCOE the LCPDP way, from the capital recovery factor. How many hours Kenya's plants run. Screening curves: geothermal beats oil engines above about 6,100 hours a year at the plan's rate of 12.8%. The plan's ranking at 12.8% and at 8%. What the LCOE leaves out: the value to the system.",
     "Quick vote: which is cheaper per kWh in Kenya, geothermal or solar photovoltaics (PV)? Answered at the end of the part with the plan's numbers."
    ],
    [
     "Part 4: The least-cost system and its robustness",
     "What an expansion model minimises. The four parts of an optimisation model and one new decision: how much to build. Linear program (LP) or mixed-integer linear program (MILP). A real MILP from the trainer's own work: battery dispatch at a Greek PV plant with 4.5 MW of PV and a battery of 4.5 MW and 9 MWh. Four measures of reliability. A tornado chart of the assumptions. Minimax regret.",
     "Build Kenya's 2035 mix in the Kenya Power Planning Lab, then three shock cards."
    ],
    [
     "Wrap-up",
     "Four messages to take away. Handover to Tim Lorenz with one open question: what is a battery worth in the daily dispatch?",
     "Quiz 2: planning methods (seven questions). Fist to five for each outcome."
    ]
   ]
  },
  {
   "caption": "Table 4: Programme of the session Integration of Renewable Energy on Day 1",
   "header": [
    "Part",
    "Content",
    "Activity"
   ],
   "rows": [
    [
     "Part 1: Why integration? Kenya today",
     "Kenya's record demand day of 23 July 2025, with a peak of 2,362 MW: a surplus at night and a tight evening on the same day. Studies of the future mix, from 3.3 GW installed today to between 13 and about 100 GW. Capacity is not energy: full-load hours by technology. An illustrative day in 2030, when solar peaks at noon and demand after sunset. The six properties of wind and PV: fluctuating, uncertain, location-bound, modular and decentral, inverter-connected, and close to zero marginal cost. The phases of integration of the International Energy Agency (IEA), with Kenya in phase 3.",
     "Input with Kenyan data."
    ],
    [
     "Part 2a: Physical integration, where?",
     "Suitable sites: the best wind in the far north, good solar on about 80% of the land, geothermal tied to the Rift. Where electricity is generated and where it is used: the Nairobi region uses 44% and the Coast 16 to 18%. Chile as the case: a top solar resource 1,300 km from the load, more than 6 TWh curtailed in 2025, and storage as the fastest answer once a law let it earn money.",
     "Investment Simulation, phase 1: groups of two to four invest USD 200 million in solar, wind and geothermal plants. They choose size and location and aim for the highest cumulative cash flow by 2038 under a fixed power purchase agreement (PPA)."
    ],
    [
     "Part 2b: Physical integration, when?",
     "Integration on every time scale, from milliseconds to years. Monthly wind output in Kenya varies by a factor of about two: 114 GWh in March against 216 GWh in November. Dark and calm spells, with evidence from Europe.",
     "Investment Simulation, phase 2: after 2038 the fixed contracts end and the price depends on the choices of all groups. Groups that chose the same technology in the same region lower the price for each other."
    ],
    [
     "Part 2c: Physical integration, the toolbox",
     "Four levers. Plant: sites near the load, wind farms spread over regions, PV facing west, hybrids with storage. Grid: regional pooling with Ethiopia, Uganda and Tanzania. Storage: which technology fits which time scale, and how batteries overtook pumped hydro between 2010 and 2025. Demand: shifting loads and sector coupling. Uruguay as the case: about 40% wind in a hydro system of Kenya's size.",
     "Input with Kenyan data."
    ],
    [
     "Part 3: System integration",
     "From spinning machines to power electronics: inertia and primary control. The lines of defence of the frequency. The blackouts of South Australia in 2016 and of the Iberian Peninsula in 2025. Batteries as fast frequency response. South Australia as the case: about 77% wind and solar after three fixes.",
     "Input with examples from Kenya: the blackouts of 25 August 2023 and 6 September 2024."
    ],
    [
     "Part 4: Market integration",
     "Vietnam: a feed-in tariff that added solar faster than the grid could follow. The merit order and the capacity market, with their strengths and limits at high shares of wind and solar. India: time-of-day tariffs and auctions for firm renewable supply. The system view: a strong backbone combined with flexibility close to the customer.",
     "Investment Simulation, phase 3: one add-on for each PV and wind project, chosen from battery storage, green hydrogen and export transmission. Discussion in pairs: how should Kenya pay for flexibility? Four ideas, then a vote."
    ],
    [
     "Wrap-up",
     "Questions and discussion. Joint closing of Day 1 with a short introduction of the EduGrid project.",
     ""
    ]
   ]
  },
  {
   "caption": "Table 5: Programme of the session Energy Modelling at Household Level on Day 2",
   "header": [
    "Step",
    "Content",
    "Group exercise in the lab"
   ],
   "rows": [
    [
     "Opening",
     "One household, many energy flows: what the grid sees is the residual demand. Households use about one third of Kenya's electricity and shape the evening peak. How customers of rural mini-grids use electricity: most of them peak after dark.",
     "Kahoot game: Power at Home (five questions)."
    ],
    [
     "Step 1: Demand",
     "Four ways to model household demand: top-down, bottom-up, stochastic and data-driven. Three questions behind every demand model. How to build the profile of one household type.",
     "Groups of three to four build the demand of one household: appliances, their power and their hours of use. The app shows the energy per day and the peak."
    ],
    [
     "Step 2: Energy system",
     "PV yield in Kenya, with Lodwar and Taveta as examples. What a battery does over a day. Purchase and feed-in prices, with the Kenyan tariffs. Three households, three boundaries: grid-connected, off-grid and weak grid (Figure 3). Price estimates for PV, battery and inverter in Kenya.",
     "The groups choose a house type and guess the PV size in kWp and the battery size in kWh for Nairobi."
    ],
    [
     "Step 3: Simulation",
     "A simulation shows how one chosen design behaves, hour by hour. It does not show whether a better design exists.",
     "The app simulates the guess of each group: self-sufficiency, grid purchase and annual cost."
    ],
    [
     "Step 4: Optimisation",
     "How webURBS works: demand, sun and prices go in, and one linear optimisation over the 8,760 hours of a year returns the sizes with the lowest annual cost. Optimisation methods and their solving effort.",
     "The guess against the optimum for the house type. Within each house type, the group closest to its optimum wins."
    ],
    [
     "Optimise it yourself",
     "Three levels: reduce demand, shift loads to sunny hours, then size PV and battery.",
     "The groups shift a share of their night demand to the day and run the optimisation again."
    ],
    [
     "Wrap-up",
     "The bigger picture: what a well-designed household system means for the household, the grid and the country.",
     ""
    ]
   ]
  },
  {
   "caption": "Table 6: Programme of the session Energy Modelling at National Scale on Day 2",
   "header": [
    "Part",
    "Content",
    "Activity and check"
   ],
   "rows": [
    [
     "Opening",
     "Four learning outcomes. One Miro board for all table activities, one laptop per table.",
     "Quiz 3: Kenya and the world (nine questions)."
    ],
    [
     "Part 1: Kenya and the world",
     "Kenya next to other countries: Uruguay's system has about the same size, and both run almost entirely on renewables. Supply in the financial year 2025/26: 15,693 GWh, of which 1,914 GWh imported. A record peak of 2,514 MW on 29 June 2026, and losses above 20%. Steam vented at night, engines and imports in the evening. Five countries, five lessons, with Germany and Greece in detail.",
     "One word per table: Kenya's biggest power system challenge to 2035 (Miro). Which lesson matters most for Kenya? (Miro). Poll: your home and power (12 questions)."
    ],
    [
     "Part 2: How a model sees the system",
     "A power system in layers. What goes into a model and what comes out. Why model a country. Three kinds of model and where Kenya uses them: capacity expansion, dispatch, and network and dynamic studies. A student model of Kenya in PyPSA-Earth. The four parts of an optimisation model: decision variables, objective, constraints and parameters. Why linear models are useful. Method slides: a power flow on three buses, N-1 and losses, the swing equation and the frequency nadir. Six duties that a grid code asks of wind and solar plants. The 2026 debate on a 15% benchmark for wind and solar.",
     "Your data for a national model: which data would your organisation supply, and who owns it? (Miro)."
    ],
    [
     "Part 3: One day on the grid",
     "The merit order. The system lambda, the cost of the next MWh: about 87 USD at the evening peak, about zero at night. How electricity is priced in a market and in Kenya. Europe's target model. The value of water. Four sources of flexibility: hydro, storage, demand response and trade.",
     "Follow-up material: the lab exercise Run Kenya's grid for a day."
    ],
    [
     "Part 4: From household to national",
     "With Tim Lorenz: the household model next to the national model.",
     "Think, pair, share: where would household data improve the national plan?"
    ],
    [
     "Wrap-up",
     "Free tools to start with: OSeMOSYS, PyPSA-Earth, urbs, pyGRETA, LEAP and the lab.",
     "Quiz 4: methods and models (nine questions). Fist to five for each outcome."
    ]
   ]
  },
  {
   "caption": "Table 7: Activities with a record",
   "header": [
    "Day",
    "Activity",
    "Tool",
    "Record"
   ],
   "rows": [
    [
     "Day 1",
     "Who is in the room? (with Tim Lorenz)",
     "Kahoot",
     "37 players"
    ],
    [
     "Day 1",
     "Quiz 1: Kenya in key numbers",
     "Kahoot",
     "38 players"
    ],
    [
     "Day 1",
     "Build Kenya's 2035 mix",
     "Lab",
     "9 plans on the class board"
    ],
    [
     "Day 1",
     "Quiz 2: Planning methods",
     "Kahoot",
     "30 players"
    ],
    [
     "Day 2",
     "Power at Home (Tim Lorenz)",
     "Kahoot",
     "30 players"
    ],
    [
     "Day 2",
     "Quiz 3: Kenya and the world",
     "Kahoot",
     "31 players"
    ],
    [
     "Day 2",
     "One word per table",
     "Miro",
     "47 notes"
    ],
    [
     "Day 2",
     "Which lesson matters most for Kenya?",
     "Miro",
     "13 answers from 15 tables"
    ],
    [
     "Day 2",
     "Poll: your home and power",
     "Kahoot",
     "33 players"
    ],
    [
     "Day 2",
     "Your data for a national model",
     "Miro",
     "17 notes from 15 tables"
    ],
    [
     "Day 2",
     "Quiz 4: Methods and models",
     "Kahoot",
     "33 players"
    ]
   ]
  },
  {
   "caption": "Table 13: One word per table, the notes by theme",
   "header": [
    "Theme",
    "Notes",
    "Words on the notes"
   ],
   "rows": [
    [
     "Finance",
     "8",
     "Exploitative, High interests, high (twice), expensive, Limited private sector engagement, High Cost of Local Capital, Opaque"
    ],
    [
     "Reliability and flexibility",
     "7",
     "Grid Inadequacy, Grid Transmission Constraints, Constrained, Aged transmission system, Grid unreliability, Ethics, Aging"
    ],
    [
     "Losses",
     "7",
     "Illegal connections, Vandalism, Poor load balancing within the feeders, moderate, Load center far from generation sites, Visibility, Grid Stability"
    ],
    [
     "Access",
     "6",
     "High Connection Cost, Right of Way/Wayleaves, Unaffordability, Cost-reflective, Undeveloped areas, Tedious"
    ],
    [
     "Demand growth",
     "5",
     "Poor Infrastructure, Variability, Growth of e-mobility, Planning, Lack of Sector Coupling"
    ],
    [
     "Other answers",
     "14",
     "Review of Education Sector, Lobbying, Geopolitics, Grid codes requirements, Indigenous Practice, Outer Space, corruption, High cost, poor tariffs, Government policies, Distance from the nearest transformer, Land compensations, Weather unpredictable, Go Renewable Energy"
    ]
   ]
  },
  {
   "caption": "Table 14: Which lesson matters most for Kenya? The notes of the tables in their own words",
   "header": [
    "Table",
    "Green note",
    "Pink note"
   ],
   "rows": [
    [
     "1",
     "Government Policies",
     "Investing on generation without consideration of the grid"
    ],
    [
     "2",
     "Developing a standard and coherent policy.",
     "Building generation without considering the grid."
    ],
    [
     "3",
     "Chile - Plan Generation and Grid together.",
     "The grid plan must follow the energy plan."
    ],
    [
     "4",
     "Implementation of batteries within the solar plants",
     "Consider new technology interruption as the plant ages"
    ],
    [
     "5",
     "Grid plan to follow energy plan: Germany",
     "Plan for both DEMAND AND GENERATION TOGETHER"
    ],
    [
     "6",
     "Uruguay - Power auction Policy",
     "Germany - Grid congestion"
    ],
    [
     "7 and 17",
     "Public Awareness:",
     "Inaccurate demand forecasts"
    ],
    [
     "8",
     "To have long term and transparent PPA",
     "political influences"
    ],
    [
     "9",
     "Implement auctions",
     "Overreliance on hydro and thermals"
    ],
    [
     "10 and 13",
     "Lack of Funding",
     "poor upgrade planning: South Africa"
    ],
    [
     "12",
     "Plan generation and investment jointly:",
     "Concentrating generation in one particular area"
    ],
    [
     "18",
     "To have a transparent review of long term PPAs",
     "Find the balance between investing in renewable power sources and upgrading the grid"
    ],
    [
     "20",
     "Copy: Uruguay - predictable/stable IPP rates",
     "Avoid: Chile - situating generation far from demand. South Africa - rehabilitate power plants. Germany - interconnection of new generation to the existing grid in time. Greece - battery storage and interconnectors"
    ]
   ]
  },
  {
   "caption": "Table 15: Your data for a national model, the notes grouped by kind of data",
   "header": [
    "Data",
    "Owner named by the tables",
    "Tables"
   ],
   "rows": [
    [
     "Dispatch data and dispatch hours",
     "Kenya Power (KPLC), National Control Centre (NCC), KETRACO, KenGen, EPRA",
     "1, 8, 13, 18"
    ],
    [
     "Network and transmission data, load centres, plant locations and capacities",
     "KETRACO, Kenya Power, NCC, KenGen, other IPPs",
     "1, 2, 4, 14"
    ],
    [
     "Grid stability",
     "NCC",
     "5, 12"
    ],
    [
     "Capacity expansion",
     "KenGen, Kenya Power, IPPs, the Ministry of Energy and Petroleum (MoE), EPRA, the Nuclear Power and Energy Agency (NuPEA), the Geothermal Development Company (GDC)",
     "1, 9"
    ],
    [
     "Energy policies, tariffs and unit cost per kWh",
     "EPRA, KPLC",
     "6, 11"
    ],
    [
     "Usage data",
     "Companies and industries",
     "7"
    ],
    [
     "Feasibility studies",
     "KenGen",
     "3"
    ],
    [
     "Institutions without a data type",
     "MoE, NCC, EPRA, KPLC, KETRACO, KenGen, major IPPs",
     "20"
    ]
   ]
  },
  {
   "caption": "Table 16: Build Kenya's 2035 mix: the nine plans on the class board and the least-cost plan of the model. New capacity and margin in MW, investment and yearly cost in USD billion. A negative margin is rented",
   "header": [
    "Plan",
    "Geothermal",
    "Large hydro",
    "Wind",
    "Solar PV",
    "Batteries",
    "Imports",
    "Oil engines",
    "Investment",
    "Yearly cost",
    "Margin to the reserve rule"
   ],
   "rows": [
    [
     "A",
     "2,000",
     "693",
     "0",
     "0",
     "500",
     "300",
     "500",
     "10.9",
     "2.65",
     "+67"
    ],
    [
     "B",
     "2,000",
     "511",
     "600",
     "1,100",
     "350",
     "300",
     "400",
     "12.4",
     "2.81",
     "-56"
    ],
    [
     "C",
     "2,000",
     "693",
     "1,900",
     "0",
     "0",
     "300",
     "500",
     "13.9",
     "3.08",
     "+417"
    ],
    [
     "D",
     "950",
     "392",
     "1,350",
     "1,450",
     "550",
     "250",
     "0",
     "9.8",
     "3.15",
     "-1,313"
    ],
    [
     "E",
     "2,000",
     "693",
     "1,150",
     "1,400",
     "750",
     "200",
     "200",
     "14.7",
     "3.19",
     "+62"
    ],
    [
     "F",
     "1,050",
     "644",
     "400",
     "2,350",
     "150",
     "50",
     "200",
     "10.3",
     "3.19",
     "-1,344"
    ],
    [
     "G",
     "1,950",
     "693",
     "1,550",
     "1,500",
     "250",
     "300",
     "150",
     "14.7",
     "3.21",
     "+30"
    ],
    [
     "H",
     "1,550",
     "693",
     "1,500",
     "2,900",
     "1,000",
     "300",
     "400",
     "16.2",
     "3.45",
     "+50"
    ],
    [
     "I",
     "200",
     "200",
     "1,150",
     "300",
     "850",
     "200",
     "500",
     "5.7",
     "3.83",
     "-1,747"
    ],
    [
     "Model",
     "2,000",
     "600",
     "0",
     "0",
     "0",
     "300",
     "500",
     "9.9",
     "2.58",
     "-132"
    ]
   ]
  }
 ]
};

/* copy of kahoot_results.json */
window.BARETI_DATA.kahoot = {
 "note": "Aggregated results, no player names. Counts are phones, not persons.",
 "games": [
  {
   "id": "room",
   "title": "Day 1, Who is in the room? (both trainers)",
   "trainer": "Tim Lorenz and Lampros Konstantellos",
   "type": "poll",
   "players": 37,
   "questions": [
    {
     "n": 1,
     "question": "Your age group?",
     "seconds": 30,
     "answered": 29,
     "options": [
      {
       "text": "18 to 24",
       "count": 7,
       "correct": null
      },
      {
       "text": "25 to 34",
       "count": 13,
       "correct": null
      },
      {
       "text": "35 to 49",
       "count": 8,
       "correct": null
      },
      {
       "text": "50 or older",
       "count": 1,
       "correct": null
      }
     ]
    },
    {
     "n": 2,
     "question": "Your gender?",
     "seconds": 30,
     "answered": 33,
     "options": [
      {
       "text": "Woman",
       "count": 16,
       "correct": null
      },
      {
       "text": "Man",
       "count": 17,
       "correct": null
      },
      {
       "text": "Prefer not to say",
       "count": 0,
       "correct": null
      }
     ]
    },
    {
     "n": 3,
     "question": "Where do you work?",
     "seconds": 30,
     "answered": 33,
     "options": [
      {
       "text": "Public authority or regulator",
       "count": 1,
       "correct": null
      },
      {
       "text": "Consultant, university, NGO or other",
       "count": 4,
       "correct": null
      },
      {
       "text": "Utility (Kenya Power, KenGen, KETRACO, REREC)",
       "count": 14,
       "correct": null
      },
      {
       "text": "Private company: IPP, developer or EPC",
       "count": 14,
       "correct": null
      }
     ]
    },
    {
     "n": 4,
     "question": "Your role?",
     "seconds": 30,
     "answered": 32,
     "options": [
      {
       "text": "Research, teaching or other",
       "count": 2,
       "correct": null
      },
      {
       "text": "Planning and strategy",
       "count": 5,
       "correct": null
      },
      {
       "text": "Management and policy",
       "count": 6,
       "correct": null
      },
      {
       "text": "Engineering, design or operations",
       "count": 19,
       "correct": null
      }
     ]
    },
    {
     "n": 5,
     "question": "Years in the energy sector?",
     "seconds": 30,
     "answered": 33,
     "options": [
      {
       "text": "Under 3",
       "count": 7,
       "correct": null
      },
      {
       "text": "3 to 5",
       "count": 9,
       "correct": null
      },
      {
       "text": "6 to 10",
       "count": 9,
       "correct": null
      },
      {
       "text": "More than 10",
       "count": 8,
       "correct": null
      }
     ]
    },
    {
     "n": 6,
     "question": "Which part of the system do you work on most?",
     "seconds": 30,
     "answered": 31,
     "options": [
      {
       "text": "Customers, mini-grids and off-grid",
       "count": 10,
       "correct": null
      },
      {
       "text": "Distribution",
       "count": 2,
       "correct": null
      },
      {
       "text": "Generation",
       "count": 18,
       "correct": null
      },
      {
       "text": "Transmission",
       "count": 1,
       "correct": null
      }
     ]
    },
    {
     "n": 7,
     "question": "What do you want most from these two days?",
     "seconds": 30,
     "answered": 30,
     "options": [
      {
       "text": "What other countries learned",
       "count": 5,
       "correct": null
      },
      {
       "text": "Contacts and exchange",
       "count": 2,
       "correct": null
      },
      {
       "text": "Hands-on tools and models",
       "count": 14,
       "correct": null
      },
      {
       "text": "Methods I can use at work",
       "count": 9,
       "correct": null
      }
     ]
    }
   ]
  },
  {
   "id": "q1",
   "title": "Day 1, Quiz 1: Kenya in key numbers",
   "trainer": "Lampros Konstantellos",
   "type": "quiz",
   "players": 38,
   "questions": [
    {
     "n": 1,
     "question": "Renewables' share of Kenya's DOMESTIC generation in FY2025/26 was about",
     "seconds": 20,
     "answered": 24,
     "options": [
      {
       "text": "70%",
       "count": 4,
       "correct": false
      },
      {
       "text": "98%",
       "count": 0,
       "correct": false
      },
      {
       "text": "90%",
       "count": 6,
       "correct": true
      },
      {
       "text": "80%",
       "count": 14,
       "correct": false
      }
     ]
    },
    {
     "n": 2,
     "question": "Most of Kenya's electricity imports in FY2025/26 came from",
     "seconds": 20,
     "answered": 35,
     "options": [
      {
       "text": "Tanzania",
       "count": 0,
       "correct": false
      },
      {
       "text": "Uganda",
       "count": 10,
       "correct": false
      },
      {
       "text": "Rwanda",
       "count": 1,
       "correct": false
      },
      {
       "text": "Ethiopia",
       "count": 24,
       "correct": true
      }
     ]
    },
    {
     "n": 3,
     "question": "True or false: Kenya's thermal (HFO) plants mostly run in the night hours",
     "seconds": 20,
     "answered": 35,
     "options": [
      {
       "text": "True",
       "count": 19,
       "correct": false
      },
      {
       "text": "False",
       "count": 16,
       "correct": true
      }
     ]
    },
    {
     "n": 4,
     "question": "Household (domestic) electricity use in Kenya in FY2025/26 grew by about",
     "seconds": 20,
     "answered": 34,
     "options": [
      {
       "text": "19%",
       "count": 8,
       "correct": true
      },
      {
       "text": "30%",
       "count": 19,
       "correct": false
      },
      {
       "text": "8%",
       "count": 7,
       "correct": false
      },
      {
       "text": "3%",
       "count": 0,
       "correct": false
      }
     ]
    },
    {
     "n": 5,
     "question": "Electricity used for e-mobility in Kenya in FY2025/26 grew by about",
     "seconds": 20,
     "answered": 34,
     "options": [
      {
       "text": "450%",
       "count": 6,
       "correct": false
      },
      {
       "text": "15%",
       "count": 12,
       "correct": false
      },
      {
       "text": "45%",
       "count": 10,
       "correct": false
      },
      {
       "text": "145%",
       "count": 6,
       "correct": true
      }
     ]
    },
    {
     "n": 6,
     "question": "Which plan is meant to cover ALL energy sectors in Kenya over 20 years?",
     "seconds": 20,
     "answered": 34,
     "options": [
      {
       "text": "Transmission Master Plan",
       "count": 4,
       "correct": false
      },
      {
       "text": "INEP",
       "count": 8,
       "correct": true
      },
      {
       "text": "National Electrification Strategy",
       "count": 13,
       "correct": false
      },
      {
       "text": "LCPDP",
       "count": 9,
       "correct": false
      }
     ]
    }
   ],
   "answers": 196,
   "correct_answers": 68
  },
  {
   "id": "q2",
   "title": "Day 1, Quiz 2: Planning methods",
   "trainer": "Lampros Konstantellos",
   "type": "quiz",
   "players": 30,
   "questions": [
    {
     "n": 1,
     "question": "In energy planning, what is a scenario?",
     "seconds": 20,
     "answered": 22,
     "options": [
      {
       "text": "The most likely future",
       "count": 6,
       "correct": false
      },
      {
       "text": "A consistent what-if story",
       "count": 10,
       "correct": true
      },
      {
       "text": "A forecast with error bands",
       "count": 2,
       "correct": false
      },
      {
       "text": "A policy target the plan must meet",
       "count": 4,
       "correct": false
      }
     ]
    },
    {
     "n": 2,
     "question": "GDP grows 6.3% a year. With the LCPDP elasticity of about 0.56, how fast does large power grow?",
     "seconds": 30,
     "answered": 29,
     "options": [
      {
       "text": "About 6.9% a year",
       "count": 7,
       "correct": false
      },
      {
       "text": "About 0.6% a year",
       "count": 2,
       "correct": false
      },
      {
       "text": "About 3.5% a year",
       "count": 11,
       "correct": true
      },
      {
       "text": "About 6.3% a year",
       "count": 9,
       "correct": false
      }
     ]
    },
    {
     "n": 3,
     "question": "Which method builds demand from connections x consumption per customer?",
     "seconds": 20,
     "answered": 30,
     "options": [
      {
       "text": "Load-flow analysis",
       "count": 6,
       "correct": false
      },
      {
       "text": "End-use (bottom-up)",
       "count": 20,
       "correct": true
      },
      {
       "text": "Econometric (top-down)",
       "count": 4,
       "correct": false
      },
      {
       "text": "Time-series trend",
       "count": 0,
       "correct": false
      }
     ]
    },
    {
     "n": 4,
     "question": "In the LCPDP ranking, which candidate gains most when the rate falls from 12.8% to 8%?",
     "seconds": 20,
     "answered": 23,
     "options": [
      {
       "text": "Solar PV",
       "count": 4,
       "correct": false
      },
      {
       "text": "Imports from Ethiopia",
       "count": 2,
       "correct": false
      },
      {
       "text": "Oil engines",
       "count": 9,
       "correct": false
      },
      {
       "text": "Large hydro (High Grand Falls)",
       "count": 8,
       "correct": true
      }
     ]
    },
    {
     "n": 5,
     "question": "Which of these does the LCOE of a plant leave out?",
     "seconds": 20,
     "answered": 29,
     "options": [
      {
       "text": "Its lifetime",
       "count": 9,
       "correct": false
      },
      {
       "text": "Its fuel cost",
       "count": 4,
       "correct": false
      },
      {
       "text": "What its power is worth at the evening peak",
       "count": 10,
       "correct": true
      },
      {
       "text": "The discount rate",
       "count": 6,
       "correct": false
      }
     ]
    },
    {
     "n": 6,
     "question": "What does a loss of load expectation of 3 hours a year mean?",
     "seconds": 20,
     "answered": 27,
     "options": [
      {
       "text": "A reserve margin of 3%",
       "count": 2,
       "correct": false
      },
      {
       "text": "On average 3 hours a year of expected shortfall",
       "count": 19,
       "correct": true
      },
      {
       "text": "Three outages a year",
       "count": 4,
       "correct": false
      },
      {
       "text": "3 hours of blackout every year",
       "count": 2,
       "correct": false
      }
     ]
    },
    {
     "n": 7,
     "question": "When does an expansion model need binary variables and become a MILP?",
     "seconds": 20,
     "answered": 24,
     "options": [
      {
       "text": "When demand is uncertain",
       "count": 9,
       "correct": false
      },
      {
       "text": "When the plan has a budget limit",
       "count": 2,
       "correct": false
      },
      {
       "text": "When a unit is built whole or not at all",
       "count": 5,
       "correct": true
      },
      {
       "text": "When the model runs hour by hour, not in time slices",
       "count": 8,
       "correct": false
      }
     ]
    }
   ],
   "answers": 184,
   "correct_answers": 83
  },
  {
   "id": "q3",
   "title": "Day 2, Quiz 3: Kenya and the world",
   "trainer": "Lampros Konstantellos",
   "type": "quiz",
   "players": 31,
   "questions": [
    {
     "n": 1,
     "question": "What share of Kenya's electricity supply came from geothermal in FY2025/26?",
     "seconds": 20,
     "answered": 27,
     "options": [
      {
       "text": "About 60%",
       "count": 12,
       "correct": false
      },
      {
       "text": "About 40%",
       "count": 10,
       "correct": true
      },
      {
       "text": "About 30%",
       "count": 2,
       "correct": false
      },
      {
       "text": "About 50%",
       "count": 3,
       "correct": false
      }
     ]
    },
    {
     "n": 2,
     "question": "At night Kenya often has more power than it needs. What happens to spare geothermal steam?",
     "seconds": 20,
     "answered": 26,
     "options": [
      {
       "text": "It is exported to Uganda",
       "count": 0,
       "correct": false
      },
      {
       "text": "The wells are throttled, nothing is lost",
       "count": 6,
       "correct": false
      },
      {
       "text": "It charges battery storage",
       "count": 0,
       "correct": false
      },
      {
       "text": "It is vented, so the energy is lost",
       "count": 20,
       "correct": true
      }
     ]
    },
    {
     "n": 3,
     "question": "When does the wind at Lake Turkana usually blow strongest?",
     "seconds": 20,
     "answered": 29,
     "options": [
      {
       "text": "In the late afternoon",
       "count": 4,
       "correct": false
      },
      {
       "text": "Evenly over the day",
       "count": 3,
       "correct": false
      },
      {
       "text": "At night, around 03:00 to 06:00",
       "count": 18,
       "correct": true
      },
      {
       "text": "Around midday",
       "count": 4,
       "correct": false
      }
     ]
    },
    {
     "n": 4,
     "question": "Kenya's demand peaks around 19:00 to 21:00. What mainly covers the extra load then?",
     "seconds": 20,
     "answered": 30,
     "options": [
      {
       "text": "Solar PV with batteries",
       "count": 1,
       "correct": false
      },
      {
       "text": "Hydro, thermal plants and imports",
       "count": 25,
       "correct": true
      },
      {
       "text": "More geothermal output",
       "count": 1,
       "correct": false
      },
      {
       "text": "Demand response by industry",
       "count": 3,
       "correct": false
      }
     ]
    },
    {
     "n": 5,
     "question": "In mid-2026 Kenya's peak demand passed a new mark for the first time. Which one?",
     "seconds": 20,
     "answered": 30,
     "options": [
      {
       "text": "2,750 MW",
       "count": 9,
       "correct": false
      },
      {
       "text": "2,000 MW",
       "count": 0,
       "correct": false
      },
      {
       "text": "2,500 MW",
       "count": 13,
       "correct": true
      },
      {
       "text": "2,250 MW",
       "count": 8,
       "correct": false
      }
     ]
    },
    {
     "n": 6,
     "question": "Uruguay is often cited for its clean power. How big is its system compared with Kenya's?",
     "seconds": 20,
     "answered": 30,
     "options": [
      {
       "text": "About twice as big",
       "count": 5,
       "correct": false
      },
      {
       "text": "About half the size",
       "count": 8,
       "correct": false
      },
      {
       "text": "About five times bigger",
       "count": 13,
       "correct": false
      },
      {
       "text": "About the same size",
       "count": 4,
       "correct": true
      }
     ]
    },
    {
     "n": 7,
     "question": "Chile curtailed 6.1 TWh of wind and solar in 2025. Kenya supplied 15.7 TWh. What share of Kenya's supply is that?",
     "seconds": 30,
     "answered": 31,
     "options": [
      {
       "text": "About 15%",
       "count": 3,
       "correct": false
      },
      {
       "text": "About 80%",
       "count": 6,
       "correct": false
      },
      {
       "text": "About 5%",
       "count": 6,
       "correct": false
      },
      {
       "text": "About 40%",
       "count": 16,
       "correct": true
      }
     ]
    },
    {
     "n": 8,
     "question": "Germany paid about EUR 3.1 billion for grid congestion in 2025. What is the main cause?",
     "seconds": 20,
     "answered": 22,
     "options": [
      {
       "text": "Wind in the north, demand in the south, lines built late",
       "count": 8,
       "correct": true
      },
      {
       "text": "Electricity demand fell sharply",
       "count": 6,
       "correct": false
      },
      {
       "text": "Too few power plants for the evening peak",
       "count": 5,
       "correct": false
      },
      {
       "text": "Too many imports from its neighbours",
       "count": 3,
       "correct": false
      }
     ]
    },
    {
     "n": 9,
     "question": "Greece curtailed 1.9 TWh of renewables in 2025. What was the main reason?",
     "seconds": 20,
     "answered": 29,
     "options": [
      {
       "text": "Old coal plants failed too often",
       "count": 3,
       "correct": false
      },
      {
       "text": "Storage and links did not keep pace with solar",
       "count": 14,
       "correct": true
      },
      {
       "text": "The wind was weaker than usual",
       "count": 3,
       "correct": false
      },
      {
       "text": "Demand came in far above the forecast",
       "count": 9,
       "correct": false
      }
     ]
    }
   ],
   "answers": 254,
   "correct_answers": 128
  },
  {
   "id": "poll",
   "title": "Day 2, Poll: your home and power",
   "trainer": "Lampros Konstantellos",
   "type": "poll",
   "players": 33,
   "questions": [
    {
     "n": 1,
     "question": "Where is your home?",
     "seconds": 20,
     "answered": 29,
     "options": [
      {
       "text": "Another town",
       "count": 6,
       "correct": null
      },
      {
       "text": "Nairobi, apartment",
       "count": 9,
       "correct": null
      },
      {
       "text": "Nairobi, house",
       "count": 6,
       "correct": null
      },
      {
       "text": "Rural area",
       "count": 8,
       "correct": null
      }
     ]
    },
    {
     "n": 2,
     "question": "How many power cuts did you have at home last month?",
     "seconds": 20,
     "answered": 32,
     "options": [
      {
       "text": "10 or more",
       "count": 4,
       "correct": null
      },
      {
       "text": "5 to 9",
       "count": 8,
       "correct": null
      },
      {
       "text": "0 to 1",
       "count": 9,
       "correct": null
      },
      {
       "text": "2 to 4",
       "count": 11,
       "correct": null
      }
     ]
    },
    {
     "n": 3,
     "question": "How long does a typical power cut last?",
     "seconds": 20,
     "answered": 32,
     "options": [
      {
       "text": "Under 30 min",
       "count": 6,
       "correct": null
      },
      {
       "text": "2 to 6 h",
       "count": 8,
       "correct": null
      },
      {
       "text": "More than 6 h",
       "count": 5,
       "correct": null
      },
      {
       "text": "30 min to 2 h",
       "count": 13,
       "correct": null
      }
     ]
    },
    {
     "n": 4,
     "question": "What was your longest power cut this year?",
     "seconds": 20,
     "answered": 31,
     "options": [
      {
       "text": "6 to 24 h",
       "count": 17,
       "correct": null
      },
      {
       "text": "More than 3 days",
       "count": 1,
       "correct": null
      },
      {
       "text": "Under 6 h",
       "count": 6,
       "correct": null
      },
      {
       "text": "1 to 3 days",
       "count": 7,
       "correct": null
      }
     ]
    },
    {
     "n": 5,
     "question": "When the power goes, what do you mainly use?",
     "seconds": 20,
     "answered": 32,
     "options": [
      {
       "text": "Solar lantern or power bank",
       "count": 3,
       "correct": null
      },
      {
       "text": "Inverter with battery",
       "count": 6,
       "correct": null
      },
      {
       "text": "Generator",
       "count": 2,
       "correct": null
      },
      {
       "text": "Nothing, I wait",
       "count": 21,
       "correct": null
      }
     ]
    },
    {
     "n": 6,
     "question": "What does your household spend on electricity per month?",
     "seconds": 20,
     "answered": 32,
     "options": [
      {
       "text": "KES 1,000 to 3,500",
       "count": 15,
       "correct": null
      },
      {
       "text": "Under KES 1,000",
       "count": 4,
       "correct": null
      },
      {
       "text": "Over KES 7,000",
       "count": 3,
       "correct": null
      },
      {
       "text": "KES 3,500 to 7,000",
       "count": 10,
       "correct": null
      }
     ]
    },
    {
     "n": 7,
     "question": "What do you cook with on most days?",
     "seconds": 20,
     "answered": 31,
     "options": [
      {
       "text": "Charcoal or firewood",
       "count": 1,
       "correct": null
      },
      {
       "text": "Electricity",
       "count": 1,
       "correct": null
      },
      {
       "text": "LPG and electricity",
       "count": 3,
       "correct": null
      },
      {
       "text": "LPG",
       "count": 26,
       "correct": null
      }
     ]
    },
    {
     "n": 8,
     "question": "Do you have solar at home?",
     "seconds": 20,
     "answered": 31,
     "options": [
      {
       "text": "Rooftop, no battery",
       "count": 0,
       "correct": null
      },
      {
       "text": "Rooftop, with battery",
       "count": 6,
       "correct": null
      },
      {
       "text": "Small kit (lights, phone)",
       "count": 2,
       "correct": null
      },
      {
       "text": "No",
       "count": 23,
       "correct": null
      }
     ]
    },
    {
     "n": 9,
     "question": "Would you run washing, ironing or water heating at cheaper hours?",
     "seconds": 20,
     "answered": 28,
     "options": [
      {
       "text": "Yes, if the saving is clear",
       "count": 8,
       "correct": null
      },
      {
       "text": "Yes, I already do",
       "count": 5,
       "correct": null
      },
      {
       "text": "No, not practical",
       "count": 10,
       "correct": null
      },
      {
       "text": "Maybe",
       "count": 5,
       "correct": null
      }
     ]
    },
    {
     "n": 10,
     "question": "If it paid back in 3 years, what would you buy first?",
     "seconds": 20,
     "answered": 28,
     "options": [
      {
       "text": "An app that shows my use",
       "count": 3,
       "correct": null
      },
      {
       "text": "Electric pressure cooker",
       "count": 1,
       "correct": null
      },
      {
       "text": "Rooftop solar",
       "count": 14,
       "correct": null
      },
      {
       "text": "Battery backup",
       "count": 10,
       "correct": null
      }
     ]
    },
    {
     "n": 11,
     "question": "In a power cut, what would you most want to keep running?",
     "seconds": 20,
     "answered": 30,
     "options": [
      {
       "text": "Fridge",
       "count": 8,
       "correct": null
      },
      {
       "text": "TV",
       "count": 1,
       "correct": null
      },
      {
       "text": "Wi-Fi and laptop",
       "count": 11,
       "correct": null
      },
      {
       "text": "Lights and phone",
       "count": 10,
       "correct": null
      }
     ]
    },
    {
     "n": 12,
     "question": "How much would you pay per month for a battery that keeps your home running in a power cut?",
     "seconds": 30,
     "answered": 32,
     "options": [
      {
       "text": "KES 1,000 to 2,500",
       "count": 9,
       "correct": null
      },
      {
       "text": "Over KES 2,500",
       "count": 15,
       "correct": null
      },
      {
       "text": "Under KES 1,000",
       "count": 6,
       "correct": null
      },
      {
       "text": "Nothing",
       "count": 2,
       "correct": null
      }
     ]
    }
   ]
  },
  {
   "id": "q4",
   "title": "Day 2, Quiz 4: Methods and models",
   "trainer": "Lampros Konstantellos",
   "type": "quiz",
   "players": 33,
   "questions": [
    {
     "n": 1,
     "question": "A model that chooses which plants to build at the lowest total cost is a...",
     "seconds": 20,
     "answered": 30,
     "options": [
      {
       "text": "Capacity expansion model",
       "count": 7,
       "correct": true
      },
      {
       "text": "Econometric demand model",
       "count": 12,
       "correct": false
      },
      {
       "text": "Load-flow model",
       "count": 1,
       "correct": false
      },
      {
       "text": "Production cost (dispatch) model",
       "count": 10,
       "correct": false
      }
     ]
    },
    {
     "n": 2,
     "question": "True or false: a national planning model represents every customer and every distribution line.",
     "seconds": 20,
     "answered": 32,
     "options": [
      {
       "text": "True",
       "count": 19,
       "correct": false
      },
      {
       "text": "False",
       "count": 13,
       "correct": true
      }
     ]
    },
    {
     "n": 3,
     "question": "Which software does Kenya's LCPDP 2024-2043 use for generation expansion planning?",
     "seconds": 20,
     "answered": 29,
     "options": [
      {
       "text": "LIPS-XP",
       "count": 11,
       "correct": true
      },
      {
       "text": "PLEXOS",
       "count": 5,
       "correct": false
      },
      {
       "text": "PyPSA",
       "count": 4,
       "correct": false
      },
      {
       "text": "LEAP",
       "count": 9,
       "correct": false
      }
     ]
    },
    {
     "n": 4,
     "question": "At Kenya's evening peak an oil engine is the marginal unit. What does the next MWh cost?",
     "seconds": 20,
     "answered": 27,
     "options": [
      {
       "text": "1,000 USD, the cost of unserved demand",
       "count": 3,
       "correct": false
      },
      {
       "text": "11 USD, the geothermal steam charge",
       "count": 13,
       "correct": false
      },
      {
       "text": "0 USD, the steam is paid anyway",
       "count": 2,
       "correct": false
      },
      {
       "text": "87 USD, the engine's fuel and O and M",
       "count": 9,
       "correct": true
      }
     ]
    },
    {
     "n": 5,
     "question": "In the lab, what is the value of water?",
     "seconds": 30,
     "answered": 31,
     "options": [
      {
       "text": "The fixed O and M of the dams",
       "count": 4,
       "correct": false
      },
      {
       "text": "The cost of the vented steam",
       "count": 3,
       "correct": false
      },
      {
       "text": "The cost saved by one more MWh of water for the day",
       "count": 11,
       "correct": true
      },
      {
       "text": "The tariff Kenya Power pays for hydro",
       "count": 13,
       "correct": false
      }
     ]
    },
    {
     "n": 6,
     "question": "In a DC power flow, what decides how 900 MW splits between two parallel paths?",
     "seconds": 30,
     "answered": 30,
     "options": [
      {
       "text": "The reactance of each path",
       "count": 16,
       "correct": true
      },
      {
       "text": "The length of each line alone",
       "count": 10,
       "correct": false
      },
      {
       "text": "The contract between the plants",
       "count": 3,
       "correct": false
      },
      {
       "text": "The control room's choice",
       "count": 1,
       "correct": false
      }
     ]
    },
    {
     "n": 7,
     "question": "During a short voltage dip, what does Kenya's grid code ask a wind or solar plant to do?",
     "seconds": 20,
     "answered": 27,
     "options": [
      {
       "text": "Disconnect at once to protect itself",
       "count": 8,
       "correct": false
      },
      {
       "text": "Switch over to its battery",
       "count": 3,
       "correct": false
      },
      {
       "text": "Stay connected and ride through it",
       "count": 6,
       "correct": true
      },
      {
       "text": "Raise its output to the maximum",
       "count": 10,
       "correct": false
      }
     ]
    },
    {
     "n": 8,
     "question": "In the lab's best plan for a wet day, when do the oil engines run?",
     "seconds": 20,
     "answered": 24,
     "options": [
      {
       "text": "Around midday",
       "count": 1,
       "correct": false
      },
      {
       "text": "All day long",
       "count": 6,
       "correct": false
      },
      {
       "text": "At the evening peak",
       "count": 12,
       "correct": true
      },
      {
       "text": "At night, h = 0 to 5",
       "count": 5,
       "correct": false
      }
     ]
    },
    {
     "n": 9,
     "question": "Which of these is a decision variable in the lab's dispatch model, not a parameter?",
     "seconds": 20,
     "answered": 20,
     "options": [
      {
       "text": "The wind profile",
       "count": 5,
       "correct": false
      },
      {
       "text": "The load in each hour",
       "count": 5,
       "correct": false
      },
      {
       "text": "The engine cost per MWh",
       "count": 5,
       "correct": false
      },
      {
       "text": "The hydro output in each hour",
       "count": 5,
       "correct": true
      }
     ]
    }
   ],
   "answers": 250,
   "correct_answers": 90
  },
  {
   "id": "power_at_home",
   "title": "Day 2, Power at Home: Solar, Batteries and Blackouts",
   "trainer": "Tim Lorenz",
   "type": "poll",
   "players": 30,
   "questions": [
    {
     "n": 1,
     "question": "Who has PV at home?",
     "seconds": null,
     "answered": 26,
     "options": [
      {
       "text": "I do",
       "count": 15,
       "correct": null
      },
      {
       "text": "I do not",
       "count": 11,
       "correct": null
      }
     ]
    },
    {
     "n": 2,
     "question": "Who has a battery at home?",
     "seconds": null,
     "answered": 28,
     "options": [
      {
       "text": "I do",
       "count": 15,
       "correct": null
      },
      {
       "text": "I do not",
       "count": 13,
       "correct": null
      }
     ]
    },
    {
     "n": 3,
     "question": "Who has an off-grid house?",
     "seconds": null,
     "answered": 27,
     "options": [
      {
       "text": "I do",
       "count": 8,
       "correct": null
      },
      {
       "text": "I do not",
       "count": 19,
       "correct": null
      }
     ]
    },
    {
     "n": 4,
     "question": "Blackouts in the last year",
     "seconds": null,
     "answered": 27,
     "options": [
      {
       "text": "0",
       "count": 4,
       "correct": null
      },
      {
       "text": "1",
       "count": 1,
       "correct": null
      },
      {
       "text": "2 to 5",
       "count": 11,
       "correct": null
      },
      {
       "text": "More than 5",
       "count": 11,
       "correct": null
      }
     ]
    },
    {
     "n": 5,
     "question": "The longest blackout",
     "seconds": null,
     "answered": 27,
     "options": [
      {
       "text": "Under 1 min",
       "count": 4,
       "correct": null
      },
      {
       "text": "1 to 10 min",
       "count": 0,
       "correct": null
      },
      {
       "text": "10 to 30 min",
       "count": 2,
       "correct": null
      },
      {
       "text": "More than 30 min",
       "count": 21,
       "correct": null
      }
     ]
    }
   ]
  }
 ]
};
