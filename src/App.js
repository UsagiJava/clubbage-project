import DisplayOpponents from "./components/DisplayOpponents";

const circuitsList = [
    {
        "id": 0,
        "name": "Cruiserweight Elite Circuit",
        "opponents": [
            {
                "id": 0,
                "hp": 50,
                "name": "Gris&aacute;ceo Sieger",
                "rank": 3,
                "ethnicity": "German-Chilean",
                "from": "USA",
                "age": 27,
                "weight": 183,
                "food": "Berliners",
                "wins":1,
                "losses":33,
                "kos":1,
                "tkos":0,
                "sayings": ["Be like water - Delugeonal!", "Grrrr. Affected me deeply?", "&iexcl;Qu&eacute; l&aacute;stima!", "Like ein Berliner? Nein, nicht so sweet."]
            },
            {
                "id": 1,
                "hp": 60,
                "name": "Loquito Carlito",
                "rank": 2,
                "ethnicity": "Filipino",
                "from": "USA",
                "age": 30,
                "weight": 168,
                "food": "Chocolate peanut butter lumpia",
                "wins":5,
                "losses":5,
                "kos":0,
                "tkos":0,
                "sayings": ["Payonpah!", "Psy ay ay...", "My cabbages!", "NO. MORE. SPROUTS."]
            },
            {
                "id": 2,
                "hp": 70,
                "name": "Andre the Uncompliant",
                "rank": 1,
                "ethnicity": "Mexican",
                "from": "USA",
                "age": 29,
                "weight": 198,
                "food": "Flan",
                "wins":18,
                "losses":2,
                "kos":8,
                "tkos":1,
                "sayings": ["NEMESISSSSSSS!", "Fight fair. No screen-looking!", "It's gonna slam like flan!", "You can't stop the Uncompliant!"]
            }
        ]
    },
    {
        "id": 1,
        "name": "Middleweight Championship Circuit",
        "opponents": [
            {
                "id": 0,
                "hp": 0,
                "name": "TBD",
                "rank": 3,
                "ethnicity": "TBD",
                "from": "TBD",
                "age": 0,
                "weight": 0,
                "food": "TBD",
                "wins":0,
                "losses":0,
                "kos":0,
                "tkos":0,
                "sayings": ["TBD", "TBD", "TBD", "TBD"]
            },
            {
                "id": 1,
                "hp": 0,
                "name": "TBD",
                "rank": 2,
                "ethnicity": "TBD",
                "from": "TBD",
                "age": 0,
                "weight": 0,
                "food": "TBD",
                "wins":0,
                "losses":0,
                "kos":0,
                "tkos":0,
                "sayings": ["TBD", "TBD", "TBD", "TBD"]
            },
            {
                "id": 2,
                "hp": 0,
                "name": "TBD",
                "rank": 1,
                "ethnicity": "TBD",
                "from": "TBD",
                "age": 0,
                "weight": 0,
                "food": "TBD",
                "wins":0,
                "losses":0,
                "kos":0,
                "tkos":0,
                "sayings": ["TBD", "TBD", "TBD", "TBD"]
            }
        ]
    },
    {
        "id": 2,
        "name": "Heavyweight World Circuit",
        "opponents": [
            {
                "id": 0,
                "hp": 0,
                "name": "TBD",
                "rank": 3,
                "ethnicity": "TBD",
                "from": "TBD",
                "age": 0,
                "weight": 0,
                "food": "TBD",
                "wins":0,
                "losses":0,
                "kos":0,
                "tkos":0,
                "sayings": ["TBD", "TBD", "TBD", "TBD"]
            },
            {
                "id": 1,
                "hp": 0,
                "name": "TBD",
                "rank": 2,
                "ethnicity": "TBD",
                "from": "TBD",
                "age": 0,
                "weight": 0,
                "food": "TBD",
                "wins":0,
                "losses":0,
                "kos":0,
                "tkos":0,
                "sayings": ["TBD", "TBD", "TBD", "TBD"]
            },
            {
                "id": 2,
                "hp": 0,
                "name": "TBD",
                "rank": 1,
                "ethnicity": "TBD",
                "from": "TBD",
                "age": 0,
                "weight": 0,
                "food": "TBD",
                "wins":0,
                "losses":0,
                "kos":0,
                "tkos":0,
                "sayings": ["TBD", "TBD", "TBD", "TBD"]
            }
        ]
    }
]

function App() {
    return (
        <div>
            <h1>Clubbage!!</h1>
            <ol>
                {
                circuitsList.map((el) => (
                    <DisplayOpponents circuit={el} />
                ))
                }
            </ol>
        </div>
    );
}

export default App;
