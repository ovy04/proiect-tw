CREATE TABLE clients(
    id INTEGER PRIMARY KEY,
    prenume TEXT,
    nume TEXT,
    dateOfBirth TEXT,
    gender TEXT,
    email TEXT,
    password TEXT
);

CREATE TABLE perfumes(
    id INTEGER PRIMARY KEY,
    nume TEXT,
    quantity INTEGER,
    ingredients TEXT,
    price TEXT,
    size INTEGER,
    tags TEXT,
    relatedPerfumes TEXT,
    ocazie TEXT,
    season TEXT,
    sex TEXT
);

CREATE TABLE commands(
    id INTEGER PRIMARY KEY,
    clientId INTEGER,
    products TEXT,
    address TEXT,
    isPresent TEXT
);

INSERT INTO perfumes VALUES(NULL, "Allure Homme", 100, "mosc, iasomie, pin",150, 100 ,"men, strong","L'Homme","zi","toamna","man");
INSERT INTO perfumes VALUES(NULL, "Black Orchid", 50, "liliac, trandafir",350,150,"women, strong, dainty","Chanel no.5","seara","iarna","woman");
INSERT INTO perfumes VALUES(NULL, "Bleu de Chanel", 70, "iasomie, orhidee",400, 75,"women, soft, fresh","Coco Mademoiselle","casual","primavara","woman");
INSERT INTO perfumes VALUES(NULL, "Candy", 200, "bujor, caramel, vanilie",70, 300,"women, sweet, strong","La Femme","zi","vara","woman");
INSERT INTO perfumes VALUES(NULL, "Chanel No 5", 30, "mosc, iasomie",500, 100,"women, classic, signature","Coco Mademoiselle","seara","toamna","woman");
INSERT INTO perfumes VALUES(NULL, "Girl of now forever", 400, "chocolate, vanilla",150, 250,"women, sweet, young","L'Homme","seara","iarna","woman");
INSERT INTO perfumes VALUES(NULL, "Grey Vetiver", 100, "mosc, pin",150, 400,"men, strong","L'Homme","seara","vara","man");
INSERT INTO perfumes VALUES(NULL, "Guilty black pour homme", 100, "mosc, iasomie",150, 300,"men, strong","L'Homme","zi","toamna","man");
INSERT INTO perfumes VALUES(NULL, "Homme Cologne", 300, "mosc, iasomie",150,150,"men, strong","L'Homme","seara","iarna","man");
INSERT INTO perfumes VALUES(NULL, "Jasmine Rouge", 50, "trandafir, liliac, caramel",600, 50,"women, sensual, strong","Candy","zi","vara","woman");
INSERT INTO perfumes VALUES(NULL, "L'Homme", 700, "mosc, iasomie, pin",150, 250,"men, strong","L'Homme","seara","toamna","man");
INSERT INTO perfumes VALUES(NULL, "La femme", 333, "iasomie",1000, 250,"women, strong","Black Orchid","zi","primavara","woman");
INSERT INTO perfumes VALUES(NULL, "Le parfum", 10, "chocolate, vanilla, roses",500, 50,"women, light, spring","Bleu de Chanel","seara","vara","woman");
INSERT INTO perfumes VALUES(NULL, "Luna Rossa", 60, "portocale, fructe de padure",440, 50,"women, sweet","Candy","zi","primavara","woman");
INSERT INTO perfumes VALUES(NULL, "Miss Dior", 50, "mosc, iasomie, liliac, trandafir",550, 70,"women, strong","Jasmine Rouge","seara","toamna","woman");
INSERT INTO perfumes VALUES(NULL, "Pure Poison", 33, "mosc, iasomie, caramel",650, 70,"women, strong","La femme","seara","iarna","woman");
INSERT INTO perfumes VALUES(NULL, "Rush", 88, "mosc, iasomie, pin",150, 250,"men, strong","L'Homme","zi","primavara","man");
INSERT INTO perfumes VALUES(NULL, "Sauvage", 100, "mosc, iasomie, pin",150, 250,"men, strong","L'Homme","seara","iarna","man");
INSERT INTO perfumes VALUES(NULL, "Soleil Blanc", 100, "mosc, iasomie, pin",150, 250,"men, strong","L'Homme","seara","primavara","man");
INSERT INTO perfumes VALUES(NULL, "Coco Mademoiselle", 100, "mosc, iasomie, pin",150, 250,"women, strong","L'Homme","zi","vara","woman");










