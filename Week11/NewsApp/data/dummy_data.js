import Story from "../models/storyModel";

export const STORIES = [
  new Story(
    1,
    "USNews",
    "President Signs Landmark Education Bill Expanding College Grants",
    "2025-10-27",
    "Olivia Barnes",
    "CNN",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwjT-tPyfBBXHfXbJjVZLLiM05IzSs-amz-ciLCcGICaYHiw_MPwzdrJJEAzCuxHsHR8ayZod0nmgBlsnLpZEzDZNj0La6wFBpA_p6tBEj9IbZqUKjIqFaSX9pl9pcwNKKTM8c0Fg=w270-h312-n-k-no",
    "President Smith signed the 'Higher Access Act' into law today, expanding federal grants for low-income students and providing additional funding for community colleges. The administration says the bill will help over 2 million students nationwide afford higher education."
  ),
  new Story(
    2,
    "WorldNews",
    "Global Climate Summit Reaches Historic Agreement on Emissions",
    "2025-10-26",
    "Daniel Cho",
    "BBC",
    "https://lh3.googleusercontent.com/he0WCYYrMzJXlyqqFZEtvYAnY3H9Csq8aSa0R7WwcBTaH_S3jURlhx9w-m7di_PnxySluH_ZslqecCb8wBVZsqoC_HGTmcTBLW0=e365-pa-nu-s0",
    "World leaders agreed on a binding framework to cut global carbon emissions by 60% by 2040. The deal, reached after two weeks of negotiations in Geneva, marks a major milestone in international climate cooperation."
  ),
  new Story(
    3,
    "SportsNews",
    "Yankees Clinch ALCS Spot After Late-Inning Comeback",
    "2025-10-25",
    "Marcus Reid",
    "ESPN",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxaZhHuvL-HXvIM5oXcV6KR4C5sYeJE7c8qyMiTjHJL9o8TGEVpZIahW_1leye9egpzRBitRnhAz9lFA-uR9NC4EQ-uufpUyLzL7w6PmWMM5zujWhQnu5q8XCrcLg7XaRLGZdlw=w270-h312-n-k-no",
    "The New York Yankees advanced to the ALCS after rallying from a three-run deficit in the 9th inning. Aaron Judge delivered a walk-off home run that sent the crowd at Yankee Stadium into a frenzy."
  ),
  new Story(
    4,
    "USNews",
    "New Federal Policy Targets Affordable Housing Shortage",
    "2025-10-24",
    "Emily Rogers",
    "NBC News",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyVkbof-Pae46RhkgcC0HyR_WHvkJPyWPy_2Weq17P-temWwPN5G8erEDvHnssQEZDmXVA0YJpSXGxu5p3Tm_4sMr8i_JcDWF4qcZz_xNftUnpGKwYhW5_0M5cKlP609xAHbDS8=w243-h174-n-k-no-nu",
    "The Department of Housing and Urban Development announced a $10 billion initiative aimed at increasing affordable housing construction across urban and rural areas. Experts say it’s the most ambitious plan since the 1970s."
  ),
  new Story(
    5,
    "WorldNews",
    "Earthquake Strikes Western Turkey, Causing Widespread Damage",
    "2025-10-23",
    "Mehmet Kaya",
    "Reuters",
    "https://www.iroamly.com/images/weather-in-turkey-cover.webp",
    "A 6.9 magnitude earthquake hit western Turkey early Wednesday morning, toppling buildings and causing power outages. Rescue teams are still searching for survivors as aftershocks continue to shake the region."
  ),
  new Story(
    6,
    "SportsNews",
    "LeBron James Announces Plans for Final NBA Season",
    "2025-10-22",
    "Sophia Delgado",
    "Fox Sports",
    "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTERIELXWC3QMfy-g_rUnG_HAplsff-mSoWU73ZBqKkrgQ2IhbPMnc0bn-57o4-fVM1frgbgj6YEfnCto4",
    "NBA legend LeBron James confirmed that the 2025–26 season will be his last. James expressed gratitude to fans and teammates while hinting at future involvement in coaching or team ownership."
  ),
  new Story(
    7,
    "USNews",
    "Tech Giants Testify Before Congress on AI Regulation",
    "2025-10-21",
    "Jordan Mitchell",
    "The Washington Post",
    "https://www.neilsahota.com/wp-content/uploads/2022/09/What-is-AI-how-does-it-work.jpg",
    "Executives from Google, OpenAI, and Meta faced tough questions in Washington as lawmakers debated new regulations on artificial intelligence. Lawmakers are pushing for stronger safeguards around data use and algorithm transparency."
  ),
  new Story(
    8,
    "WorldNews",
    "UN Approves Ceasefire in Ongoing Middle East Conflict",
    "2025-10-20",
    "Layla Hassan",
    "Al Jazeera",
    "https://cdn.cfr.org/sites/default/files/styles/open_graph/public/image/2025/08/UN_SecurityCouncil_BG%20%281%29.jpg",
    "The United Nations Security Council unanimously voted for a ceasefire agreement between conflicting parties in the Middle East. The resolution calls for immediate humanitarian aid and withdrawal of armed forces from civilian areas."
  ),
  new Story(
    9,
    "SportsNews",
    "LSU Defeats Alabama in Overtime Thriller",
    "2025-10-19",
    "Trevor King",
    "CBS Sports",
    "https://mshanken.imgix.net/cao/bolt/2020-01/lsu-qb-1600.jpg",
    "LSU edged out Alabama 41–38 in an overtime classic that featured four lead changes and record-breaking offensive plays. The win solidifies LSU’s position as a playoff contender this season."
  ),
  new Story(
    10,
    "USNews",
    "NASA Launches Artemis III Mission to the Moon",
    "2025-10-18",
    "Rachel Lin",
    "ABC News",
    "https://www.nasa.gov/wp-content/uploads/2023/02/gateway-with-earth-in-background.webp?w=2048",
    "NASA successfully launched Artemis III, the first crewed lunar mission in over 50 years. The mission aims to establish a long-term lunar base and pave the way for future Mars exploration."
  ),
  new Story(
    11,
    "WorldNews",
    "Record-Breaking Heatwave Sweeps Across Europe",
    "2025-10-17",
    "Luca Moretti",
    "Euronews",
    "https://e3.365dm.com/23/07/1600x900/skynews-europe-heatwave_6220975.jpg?20230717092723",
    "Cities across Europe are experiencing record temperatures this week, with some regions surpassing 45°C. Governments are issuing health warnings as energy grids face immense strain from air conditioning demand."
  ),
  new Story(
    12,
    "SportsNews",
    "Simone Biles Wins Sixth All-Around Gymnastics Title",
    "2025-10-16",
    "Maya Richardson",
    "NBC Sports",
    "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcEmevZ9EVS5YQf8GSHtM9Ha7IjrKI00KJGgRnfEuAFlcG2ZCQ1q9DnYvdIQ_CagG2FbYB8in8y-arnCmdn0wM7b1U-xofU-0HnN.jpg?r=016",
    "Simone Biles added another gold medal to her historic career by capturing her sixth World All-Around title. Her flawless routines earned standing ovations and reaffirmed her as one of the sport’s all-time greats."
  ),
  new Story(
    13,
    "USNews",
    "Supreme Court Hears Landmark Case on Data Privacy",
    "2025-10-15",
    "Ethan Brooks",
    "USA Today",
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsIYBm7OnUpfwAdrr7Jm04olincLc3mXgjY95x5s-1-V1Z3cgLFBn2fkFjOSTC4U_nmtg-u284kmzTdsSLIPw0dzBDc-L5zSlaiJR3QQ",
    "The Supreme Court began hearings in a major case that could redefine digital privacy rights in the United States. The ruling is expected to determine how companies collect and store user data."
  ),
  new Story(
    14,
    "WorldNews",
    "China Announces Ambitious Renewable Energy Expansion Plan",
    "2025-10-14",
    "Wei Zhang",
    "The Guardian",
    "https://www.bakerinstitute.org/sites/default/files/2025-04/CES_China%20Map.png",
    "China unveiled a $500 billion plan to expand its solar and wind energy capacity by 2030, aiming to reduce reliance on coal and become the global leader in clean energy innovation."
  ),
  new Story(
    15,
    "SportsNews",
    "Serena Williams Inducted Into International Tennis Hall of Fame",
    "2025-10-13",
    "Alex Harper",
    "Sky Sports",
    "https://cdn0.scrvt.com/c2465e9022ba946df66d1244a69b1c75/3cc42b661644357a/b8b5c076e162/v/2e3d26c824e3/ITHF_Founders_Flowers_--1-_reduced.jpg",
    "Tennis legend Serena Williams was officially inducted into the International Tennis Hall of Fame in a ceremony celebrating her unmatched career and contributions to women’s sports."
  ),
  new Story(
    16,
    "USNews",
    "Major Winter Storm Expected to Hit Northeast This Weekend",
    "2025-10-12",
    "Noah Clark",
    "Fox News",
    "https://cms.accuweather.com/wp-content/uploads/2022/01/hd25-2.jpeg?w=632",
    "Meteorologists are warning of a powerful winter storm that could dump up to two feet of snow across parts of New York and New England. Airlines have already canceled hundreds of flights in anticipation."
  ),
  new Story(
    17,
    "WorldNews",
    "Japan Lifts Travel Restrictions as Tourism Rebounds",
    "2025-10-11",
    "Aiko Tanaka",
    "NHK",
    "https://www.japan-guide.com/g24/2034_02.jpg",
    "Japan announced the full removal of pandemic-era travel restrictions, marking a major step in its economic recovery. The tourism ministry expects a record 40 million visitors in 2026."
  ),
  new Story(
    18,
    "SportsNews",
    "Patrick Mahomes Leads Chiefs to Victory in Season Opener",
    "2025-10-10",
    "Chris Donovan",
    "NFL Network",
    "https://people.com/thmb/sTNel3b5JnTNySUmZrL4E60fFHc=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/super-bowl-LVIII-highlights-021324-9-1638e17609374c76940aa5a774834995.jpg",
    "Patrick Mahomes threw for 350 yards and four touchdowns as the Kansas City Chiefs opened the season with a dominant 35–14 win over the Baltimore Ravens at Arrowhead Stadium."
  ),
  new Story(
    19,
    "USNews",
    "Electric Vehicle Sales Hit Record High in 2025",
    "2025-10-09",
    "Hannah Lee",
    "Bloomberg",
    "https://www.motortrend.com/files/6793fa7df3811f0008acd379/1-2025-tesla-model-s-front-view.jpg",
    "New data shows that electric vehicles now account for 25% of all new car sales in the U.S., driven by tax incentives and expanded charging infrastructure across major cities."
  ),
  new Story(
    20,
    "WorldNews",
    "Peace Talks Resume Between Rival Factions in Sudan",
    "2025-10-08",
    "Omar Hassan",
    "Associated Press",
    "https://web.acjps.org/wp-content/uploads/2023/12/Saudi-foreign-minister-poses-withthe-respresentatives-of-the-SAF-and-RSF-in-Jeddah-after-the-signing-of-the-huamnitarian-truce-on-May-21-2023-802x485-660x330.jpeg",
    "Negotiations have resumed between rival factions in Sudan after months of violence. Mediators from the African Union are hopeful the talks will lead to a long-term peace agreement."
  ),
];