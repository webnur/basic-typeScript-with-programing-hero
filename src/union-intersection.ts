type NoobDeveloper = {
    name: string,
}

// type JuniorDeveloper = {
//     name: string,
//     expertise: string,
//     experience: number
// }

type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number
}

type NextLevelDevelopers = JuniorDeveloper & {
    leaderShipExperience: number,
    level: Level
}

enum Level {
    junior = 'junior',
    mid = 'mid',
    senior = 'senior'
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'MR. Nur',
    expertise: 'javascript',
    experience: 30,
}

const developer: NextLevelDevelopers = {
    name: 'musliha islam',
    expertise: 'typescript',
    experience: 23,
    leaderShipExperience: 45,
    level: Level.junior
}