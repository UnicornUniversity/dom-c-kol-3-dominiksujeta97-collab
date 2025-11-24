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

    let names = [
        "Peter","Martin","Jakub","Samuel","Lukas","Michal","Adam","Tomas","Matej","Dominik",
        "Filip","Patrik","Andrej","Daniel","Erik","Oliver","Marek","Sebastian","Viktor","Roman",
        "Rastislav","Boris","Jan","Simon","David","Karol","Igor","Norbert","Gabriel","Henrich",
        "Lucia","Kristina","Natalia","Ema","Sofia","Laura","Monika","Zuzana","Veronika","Katarina",
        "Eva","Maria","Barbora","Petra","Simona","Nikola","Tamara","Viktoria","Paulina","Lenka"
    ];

    let surnames = [
        "Novak","Kovac","Horvath","Varga","Toth","Kucera","Marek","Bartok","Urban","Simek",
        "Kral","Klement","Farkas","Klein","Hruska","Sokol","Baran","Roth","Hlavac","Polak",
        "Ford","Keller","Berger","Cerny","Bielik",
        "Novakova","Kovacova","Horvathova","Vargova","Tothova",
        "Kucerova","Markova","Bartosova","Urbanova","Simkova",
        "Kralova","Klementova","Farkasova","Kleinova","Hruskova",
        "Sokolova","Baranova","Rothova","Hlavacova","Polakova"
    ];

    let workloads = [10, 20, 30, 40];

    function pickRandom(list) {
        let index = Math.floor(Math.random() * list.length);
        return list[index];
    }

    const MS_IN_YEAR = 365.25 * 24 * 60 * 60 * 1000;

    function generateBirthdate(minAge, maxAge) {
        while (true) {
            let age = minAge + Math.random() * (maxAge - minAge);
            let msAgo = age * MS_IN_YEAR;
            let birthdate = new Date(Date.now() - msAgo);
            birthdate.setUTCHours(0, 0, 0, 0);
            let realAge = (Date.now() - birthdate.getTime()) / MS_IN_YEAR;
            if (realAge > minAge && realAge < maxAge) {
                return birthdate.toISOString();
            }
        }
    }

    let dtoOut = [];

    for (let i = 0; i < count; i++) {

        let gender = Math.random() < 0.5 ? "male" : "female";

        let name = pickRandom(names);
        let surname = pickRandom(surnames);
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