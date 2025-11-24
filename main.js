//TODO add imports if needed
//TODO doc
/**
 * The main function which calls the application.
 * Generates a list of employees with random data based on dtoIn.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} dtoOut - list of employees
 */
export function main(dtoIn) {

    let count = dtoIn.count;
    let ageMin = dtoIn.age.min;
    let ageMax = dtoIn.age.max;

    let maleNames = [
        "Peter", "Martin", "Jakub", "Samuel", "Lukáš", "Michal", "Adam", "Tomáš", "Matej", "Dominik",
        "Filip", "Patrik", "Andrej", "Daniel", "Erik", "Oliver", "Marek", "Sebastián", "Viktor", "Roman",
        "Rastislav", "Boris", "Ján", "Šimon", "Dávid", "Karol", "Igor", "Norbert", "Gabriel", "Henrich",
        "Marcel", "Alan", "Teodor", "Richard", "Leonard", "Juraj", "Pavol", "Robo", "Miloš", "Tibor",
        "Oliver", "Eduard", "Branislav", "Radovan", "Metod", "Tadeáš", "Benedikt", "Frederik", "Kornel", "Vojtech"
    ];
    let femaleNames = [
        "Lucia", "Kristína", "Natália", "Ema", "Sofia", "Laura", "Monika", "Zuzana", "Veronika", "Katarína",
        "Eva", "Mária", "Barbora", "Petra", "Simona", "Nikola", "Tamara", "Viktória", "Paulína", "Lenka",
        "Jana", "Diana", "Ela", "Nina", "Bianka", "Tatiana", "Andrea", "Gabriela", "Alžbeta", "Tereza",
        "Sara", "Vanesa", "Stela", "Renáta", "Sabina", "Marína", "Bohdana", "Timea", "Rebeka", "Júlia",
        "Karolína", "Kristiána", "Linda", "Romana", "Mia", "Dominika", "Helena", "Adriana", "Ružena", "Beáta"
    ];
    let maleSurnames = [
        "Novák", "Kováč", "Horváth", "Varga", "Tóth", "Kučera", "Marek", "Bartoš", "Urban", "Šimek",
        "Král", "Klement", "Farkaš", "Klein", "Hruška", "Sokol", "Baran", "Roth", "Hlaváč", "Polák",
        "Ford", "Keller", "Berger", "Černý", "Bielik", "Potočný", "Mašek", "Dostál", "Veselý", "Hlavatý",
        "Kráľ", "Červeň", "Dvořák", "Kubík", "Roth", "Benko", "Hrdlička", "Zima", "Ševčík",
        "Hájek", "Holub", "Štěpánek", "Kolár", "Bernard", "Gregor", "Kovář", "Majer", "Ondrej", "Kadlec"
    ];
    let femaleSurnames = [
        "Nováková", "Kováčová", "Horváthová", "Vargová", "Tóthová", "Kučerová", "Marková", "Bartošová", "Urbanová", "Šimková",
        "Králová", "Klementová", "Farkašová", "Kleinová", "Hrušková", "Sokolová", "Baranová", "Rothová", "Hlaváčová", "Poláková",
        "Fordová", "Kellerová", "Bergerová", "Černá", "Bieliková", "Potočná", "Mašková", "Dostálová", "Veselá", "Hlavatá",
        "Kráľová", "Červeňová", "Dvořáková", "Kubíková", "Benkoová", "Hrdličková", "Zimová", "Ševčíková",
        "Hájková", "Holubová", "Štěpánková", "Kolárová", "Bernardová", "Gregorová", "Kovářová", "Majerová", "Ondrejová", "Kadlecová"
    ];
    let workloads = [10, 20, 30, 40];

    function pickRandom(list) {
        let elementCount = list.length;
        let random = Math.random();
        let number = random * elementCount;
        let index = Math.floor(number);
        return list[index];
    }

    function generateBirthdate(minAge, maxAge) {
        let today = new Date();
        let age = Math.floor(Math.random() * (maxAge - minAge)) + minAge;
        let year = today.getUTCFullYear() - age;
        let month = Math.floor(Math.random() * 12);
        let day = Math.floor(Math.random() * 28) + 1;
        let birthdate = new Date(Date.UTC(year, month, day));
        birthdate.setUTCHours(0, 0, 0, 0);

        return birthdate.toISOString();
    }

    let dtoOut = [];
    for (let i = 0; i < count; i++) {

        let randomGender = Math.random();
        let gender;

        if (randomGender < 0.5) {
            gender = "male";
        } else {
            gender = "female";
        }

        let name;
        if (gender === "male") {
            name = pickRandom(maleNames);
        } else {
            name = pickRandom(femaleNames);
        }

        let surname;
        if (gender === "male") {
            surname = pickRandom(maleSurnames);
        } else {
            surname = pickRandom(femaleSurnames);
        }

        let birthdate = generateBirthdate(ageMin, ageMax);
        let workload = pickRandom(workloads);

        let employee = {
            gender: gender,
            birthdate: birthdate,
            name: name,
            surname: surname,
            workload: workload
        };

        dtoOut.push(employee);
    }
    return dtoOut;
}