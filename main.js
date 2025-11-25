//TODO add imports if needed
//TODO doc
/**
 * The main function which calls the application.
 * Generates a list of employees with random data based on dtoIn.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} dtoOut - list of employees
 */

//Hlavna funkcia na vytvorenie zoznamu zamestnancov
export function main(dtoIn) {

    //Pocet zamestnancov, ktory vytvarame
    let count = dtoIn.count;

    //Minimalny a maximalny vek
    let ageMin = dtoIn.age.min;
    let ageMax = dtoIn.age.max;

    //Zoznam nahodnych mien
    let names = [
        "Peter", "Martin", "Jakub", "Samuel", "Lukas", "Michal", "Adam", "Tomas", "Matej", "Dominik",
        "Filip", "Patrik", "Andrej", "Daniel", "Erik", "Oliver", "Marek", "Sebastian", "Viktor", "Roman",
        "Rastislav", "Boris", "Jan", "Simon", "David", "Karol", "Igor", "Norbert", "Gabriel", "Henrich",
        "Lucia", "Kristina", "Natalia", "Ema", "Sofia", "Laura", "Monika", "Zuzana", "Veronika", "Katarina",
        "Eva", "Maria", "Barbora", "Petra", "Simona", "Nikola", "Tamara", "Viktoria", "Paulina", "Lenka"
    ];

    //Zoznam nahodnych priezvisk
    let surnames = [
        "Novak", "Kovac", "Horvath", "Varga", "Toth", "Kucera", "Marek", "Bartok", "Urban", "Simek",
        "Kral", "Klement", "Farkas", "Klein", "Hruska", "Sokol", "Baran", "Roth", "Hlavac", "Polak",
        "Ford", "Keller", "Berger", "Cerny", "Bielik",
        "Novakova", "Kovacova", "Horvathova", "Vargova", "Tothova",
        "Kucerova", "Markova", "Bartosova", "Urbanova", "Simkova",
        "Kralova", "Klementova", "Farkasova", "Kleinova", "Hruskova",
        "Sokolova", "Baranova", "Rothova", "Hlavacova", "Polakova"
    ];

    //Mozny pracovny uvazok
    let workloads = [10, 20, 30, 40];

    //Funkcia pre nahodny vyber z pola
    function pickRandom(list) {
        let index = Math.floor(Math.random() * list.length);
        return list[index];
    }

    //Set na uz pouzite datumy narodenia - zabezpecenie jedinecnosti datumu
    let usedBirthdates = new Set();

    //Funkcia na vypocet veku podla datumu s premenou na milisekundy - testy mi zial padali pri pocitani kalendarnych rokov, preto praca s milisekundami
    function getAgeFromDate(date) {
        let diffMs = Date.now() - date.getTime();
        let years = diffMs / (365.25 * 24 * 60 * 60 * 1000);
        return years;
    }

    //Funkcia na generaciu nahodneho datumu narodenia pri opakovani, ak uz bol datum pouzity
    //Prevod do ISO formatu
    function generateBirthdate(minAge, maxAge) {
        while (true) {
            let age = minAge + Math.random() * (maxAge - minAge);

            let diffMs = age * 365.25 * 24 * 60 * 60 * 1000;
            let birthday = new Date(Date.now() - diffMs);
            birthday.setUTCHours(0, 0, 0, 0);

            let iso = birthday.toISOString();

            if (usedBirthdates.has(iso)) {
                continue;
            }
            //Overenie veku
            let realAge = getAgeFromDate(birthday);
            if (realAge > minAge && realAge < maxAge) {
                usedBirthdates.add(iso);
                return iso;
            }
        }
    }

    //Vystup
    let dtoOut = [];

    //Cyklus na vytvorenie nahodnych zamestnancov
    for (let i = 0; i < count; i++) {

        let gender;
        if (Math.random() < 0.5) {
            gender = "male";
        } else {
            gender = "female";
        }

        let name = pickRandom(names);
        let surname = pickRandom(surnames);
        let birthdate = generateBirthdate(ageMin, ageMax);
        let workload = pickRandom(workloads);

        //Vytvorenie zamestnanaca
        let employee = {
            gender: gender,
            birthdate: birthdate,
            name: name,
            surname: surname,
            workload: workload
        };

        dtoOut.push(employee); //Pridame do generovaneho vystupneho zoznamu
    }

    return dtoOut;
}