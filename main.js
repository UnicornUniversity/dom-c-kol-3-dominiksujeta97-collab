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

    let maleNames = ["Peter", "Martin", "Jakub", "Samuel", "Lukáš", "Michal", "Adam", "Tomáš", "Matej", "Dominik"];
    let femaleNames = ["Lucia", "Kristína", "Natália", "Ema", "Sofia", "Laura", "Monika", "Zuzana", "Veronika", "Katarína"];
    let maleSurnames = ["Novák", "Kováč", "Horváth", "Varga", "Tóth", "Kučera", "Marek", "Bartoš", "Urban", "Šimek"];
    let femaleSurnames = ["Nováková", "Kováčová", "Horváthová", "Vargová", "Tóthová", "Kučerová", "Marková", "Bartošová", "Urbanová", "Šimková"];
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
    let maxYear = today.getFullYear() - minAge;
    let minYear = today.getFullYear() - maxAge;
    let randomYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
    let randomMonth = Math.floor(Math.random() * 12);
    let randomDay = Math.floor(Math.random() * 28) + 1;
    let birthdate = new Date(Date.UTC(randomYear, randomMonth, randomDay));
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