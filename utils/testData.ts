export class TestData {

    //@returns String of random numbers
    static getRandomNumbers(length: number = 10, min: number = 0, max: number = 9): string {
        return Array.from({ length }, () =>
        Math.floor(Math.random() * (min - max + 1 )) + min).join('')
    }

    static getRandomLetters(length: number = 5, isUpperCase = false): string {
        return Array.from({ length }, () => {
            const charCode = Math.floor(Math.random() * 26) + 97 // range from a to z 
            return isUpperCase ? String.fromCharCode(charCode).toUpperCase() :
            String.fromCharCode(charCode);
        }).join('')
    }

    static getRandomSpecialCharacters(length: number): string {
        return Array.from({ length }, () => 
            "!@#$%^&*()_+[]{}|;:',.<>?/`~\\\"-="[Math.floor(Math.random() * 33)]).join('');
    }

    static getRandomBoolean(percentTrue: number = .5): boolean {
        return Math.random() < percentTrue;
    }

    static getRandomFirstname(): string {
        const names = [
          "Alice", "Bob", "Charlie", "Diana", "Edward", "Fiona", "George", "Hannah", "Ian", "Jasmine",
          "Kevin", "Laura", "Michael", "Nina", "Oliver", "Paula", "Quincy", "Rachel", "Steven", "Tina",
          "Uma", "Victor", "Wendy", "Xander", "Yvonne", "Zachary", "Angela", "Brian", "Catherine", "David",
          "Eleanor", "Frank", "Grace", "Harry", "Isla", "Jack", "Karen", "Liam", "Molly", "Nathan",
          "Oscar", "Penelope", "Quinn", "Rebecca", "Samuel", "Teresa", "Ursula", "Vincent", "Willow", "Xenia",
          "Yuri", "Zoe", "Ava", "Benjamin", "Clara", "Daniel", "Eva", "Felix", "Gabriella", "Henry", 
          "Ivy", "Jacob", "Kylie", "Leo", "Mia", "Noah", "Olivia", "Patrick", "Quentin", "Riley", 
          "Sophia", "Thomas", "Ulysses", "Victoria", "Walter", "Ximena", "Yara", "Zane", "Allison", "Brandon", 
          "Camila", "Derek", "Eliza", "Finn", "Gianna", "Harper", "Isaac", "Julia", "Kyle", "Lila"
        ];
      
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
      }

      static getRandomSurname(): string {
        const surnames = [
          "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
          "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
          "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
          "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
          "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts",
          "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes",
          "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper",
          "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson",
          "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes",
          "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez"
        ];
      
        const randomIndex = Math.floor(Math.random() * surnames.length);
        return surnames[randomIndex];
      }

}