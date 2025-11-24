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
  let minAge = dtoIn.age.min;
  let maxAge = dtoIn.age.max;

  const names = [
    "Peter","Martin","Jakub","Samuel","Lukas","Michal","Adam","Tomas","Matej","Dominik",
    "Filip","Patrik","Andrej","Daniel","Erik","Oliver","Marek","Sebastian","Viktor","Roman",
    "Rastislav","Boris","Jan","Simon","David","Karol","Igor","Norbert","Gabriel","Henrich",
    "Lucia","Kristina","Natalia","Ema","Sofia","Laura","Monika","Zuzana","Veronika","Katarina",
    "Eva","Maria","Barbora","Petra","Simona","Nikola","Tamara","Viktoria","Paulina","Lenka"
  ];

  const surnames = [
    "Novak","Kovac","Horvath","Varga","Toth","Kucera","Marek","Bartok","Urban","Simek",
    "Kral","Klement","Farkas","Klein","Hruska","Sokol","Baran","Roth","Hlavac","Polak",
    "Ford","Keller","Berger","Cerny","Bielik",
    "Novakova","Kovacova","Horvathova","Vargova","Tothova",
    "Kucerova","Markova","Bartosova","Urbanova","Simkova",
    "Kralova","Klementova","Farkasova","Kleinova","Hrusková",
    "Sokolova","Baranova","Rothova","Hlavacova","Polakova"
  ];

  function pickRandom(list) {
    let index = Math.floor(Math.random() * list.length);
    return list[index];
  }

  let usedDates = new Set();

  function generateBirthdate(minAge, maxAge) {
    let birthdate;

    do {
      let today = new Date();

      let latest = new Date(Date.UTC(
        today.getUTCFullYear() - minAge,
        today.getUTCMonth(),
        today.getUTCDate()
      ));

      let earliest = new Date(Date.UTC(
        today.getUTCFullYear() - maxAge,
        today.getUTCMonth(),
        today.getUTCDate()
      ));

      let minTime = earliest.getTime();
      let maxTime = latest.getTime();

      let randomTime = minTime + Math.random() * (maxTime - minTime);

      let d = new Date(randomTime);
      d.setUTCHours(0, 0, 0, 0);
      birthdate = d.toISOString();

    } while (usedDates.has(birthdate)); 

    usedDates.add(birthdate);
    return birthdate;
  }

  let people = [];

  for (let i = 0; i < count; i++) {

    let name = pickRandom(names);
    let surname = pickRandom(surnames);
    let birthdate = generateBirthdate(minAge, maxAge);

    let workloads = [10, 20, 30, 40];
    let workload = pickRandom(workloads);

    let person = {
      name: name,
      surname: surname,
      birthdate: birthdate,
      workload: workload
    };

    people.push(person);
  }

  return people;
}