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

    // 50 zmiešaných mien (bez delenia na muž/žena)
    const names = [
        "Peter", "Martin", "Jakub", "Samuel", "Lukáš", "Michal", "Adam", "Tomáš", "Matej", "Dominik",
        "Filip", "Patrik", "Andrej", "Daniel", "Erik", "Oliver", "Marek", "Sebastián", "Viktor", "Roman",
        "Rastislav", "Boris", "Ján", "Šimon", "Dávid", "Karol", "Igor", "Norbert", "Gabriel", "Henrich",
        "Lucia", "Kristína", "Natália", "Ema", "Sofia", "Laura", "Monika", "Zuzana", "Veronika", "Katarína",
        "Eva", "Mária", "Barbora", "Petra", "Simona", "Nikola", "Tamara", "Viktória", "Paulína", "Lenka"
    ];

    // 50 zmiešaných priezvisk
    const surnames = [
        "Novák", "Kováč", "Horváth", "Varga", "Tóth", "Kučera", "Marek", "Bartoš", "Urban", "Šimek",
        "Král", "Klement", "Farkaš", "Klein", "Hruška", "Sokol", "Baran", "Roth", "Hlaváč", "Polák",
        "Ford", "Keller", "Berger", "Černý", "Bielik",
        "Nováková", "Kováčová", "Horváthová", "Vargová", "Tóthová",
        "Kučerová", "Marková", "Bartošová", "Urbanová", "Šimková",
        "Králová", "Klementová", "Farkašová", "Kleinová", "Hrušková",
        "Sokolová", "Baranová", "Rothová", "Hlaváčová", "Poláková",
        "Dostálová", "Veselá", "Hlavatá", "Kolárová", "Gregorová"
    ];

    let workloads = [10, 20, 30, 40];

    function pickRandom(list) {
        const index = Math.floor(Math.random() * list.length);
        return list[index];
    }

    // unikátne dátumy narodenia
    let usedBirthdates = new Set();

    function generateBirthdate(minAge, maxAge, usedSet) {
        let birthdate;

        do {
            const today = new Date();
            const age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge; // min..max (vrátane)
            const year = today.getUTCFullYear() - age;
            const month = Math.floor(Math.random() * 12);
            const day = Math.floor(Math.random() * 28) + 1;

            const d = new Date(Date.UTC(year, month, day));
            d.setUTCHours(0, 0, 0, 0);
            birthdate = d.toISOString();
        } while (usedSet.has(birthdate));

        usedSet.add(birthdate);
        return birthdate;
    }

    let dtoOut = [];

    for (let i = 0; i < count; i++) {
        // gender môže ostať, aj keď mená sú zmiešané
        let gender = Math.random() < 0.5 ? "male" : "female";

        let name = pickRandom(names);
        let surname = pickRandom(surnames);
        let birthdate = generateBirthdate(ageMin, ageMax, usedBirthdates);
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