import Location from "../models/locations";
import Destination from "../models/destinations";

export const LOCATIONS = [
  new Location("l1", "Bali, Indonesia", "#ff6f61"), // Coral
  new Location("l2", "Paris, France", "#6a5acd"), // Slate Blue
  new Location("l3", "Santorini, Greece", "#00bfff"), // Deep Sky Blue
  new Location("l4", "Kyoto, Japan", "#8b0000"), // Dark Red
  new Location("l5", "Maui, Hawaii", "#ffb347"), // Peach
  new Location("l6", "Maldives", "#20b2aa"), // Light Sea Green
  new Location("l7", "Rome, Italy", "#b22222"), // Firebrick
  new Location("l8", "Banff, Canada", "#4682b4"), // Steel Blue
  new Location("l9", "Phuket, Thailand", "#ff69b4"), // Hot Pink
  new Location("l10", "Dubai, UAE", "#daa520"), // Goldenrod
];

export const DESTINATIONS = [
  new Destination(
    "d1",
    "l1",
    "Ubud Rice Terraces",
    75,
    2015,
    4.8,
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrB5wCCoe6sNCxIQsi_2nRUm-YqE4WC1TrcGPT8vWSaWO_vi2mm8mBgQLDKaGu3N8zEvAH7vj5BCkOLgWwv8cG0w1nUG1ycyaSVnuf7Wq-8EKvOlxeGel6yDGUYD63smFqlCXmf=s1360-w1360-h1020-rw"
  ),
  new Destination(
    "d2",
    "l2",
    "Eiffel Tower",
    100,
    1889,
    4.9,
    ""
  ),
  new Destination(
    "d3",
    "l3",
    "Oia Sunset Point",
    60,
    2010,
    4.7,
    ""
  ),
  new Destination(
    "d4",
    "l4",
    "Fushimi Inari Shrine",
    50,
    711,
    4.9,
    ""
  ),
  new Destination(
    "d5",
    "l5",
    "Haleakalā National Park",
    55,
    1916,
    4.8,
    ""
  ),
  new Destination(
    "d6",
    "l6",
    "Vaadhoo Island (Sea of Stars)",
    30,
    2008,
    4.9,
    ""
  ),
  new Destination(
    "d7",
    "l7",
    "Colosseum",
    80,
    80,
    4.8,
    ""
  ),
  new Destination(
    "d8",
    "l8",
    "Lake Louise",
    65,
    1890,
    4.7,
    ""
  ),
  new Destination(
    "d9",
    "l9",
    "Phi Phi Islands",
    70,
    2004,
    4.6,
    ""
  ),
  new Destination(
    "d10",
    "l10",
    "Burj Khalifa",
    120,
    2010,
    4.9,
    ""
  ),
  new Destination(
    "d11",
    "l1",
    "Tanah Lot Temple",
    45,
    1500,
    4.6,
    ""
  ),
  new Destination(
    "d12",
    "l2",
    "Louvre Museum",
    90,
    1793,
    4.9,
    ""
  ),
  new Destination(
    "d13",
    "l3",
    "Red Beach",
    40,
    2000,
    4.5,
    ""
  ),
  new Destination(
    "d14",
    "l4",
    "Arashiyama Bamboo Grove",
    35,
    1600,
    4.8,
    ""
  ),
  new Destination(
    "d15",
    "l5",
    "Road to Hana",
    50,
    1950,
    4.7,
    ""
  ),
  new Destination(
    "d16",
    "l6",
    "Male Atoll",
    60,
    1972,
    4.8,
    ""
  ),
  new Destination(
    "d17",
    "l7",
    "Trevi Fountain",
    55,
    1762,
    4.8,
    ""
  ),
  new Destination(
    "d18",
    "l8",
    "Moraine Lake",
    45,
    1899,
    4.9,
    ""
  ),
  new Destination(
    "d19",
    "l9",
    "Big Buddha",
    40,
    2004,
    4.7,
    ""
  ),
  new Destination(
    "d20",
    "l10",
    "Palm Jumeirah",
    95,
    2007,
    4.6,
    ""
  ),
];