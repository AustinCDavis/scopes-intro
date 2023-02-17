// (C is for Cookie)

// (corrected by removing y variable and utilizing locally created variable 'x')

/*
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]


for (let x = 1; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}
*/
//------------------------------------------------------------------

//(Conjunction Function)

//(corrected by moving console.log referencing local function variable within {})

/*
const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    console.log(conjoinedWord)
}

conjunction("Master", "Card")
*/

//----------------------------------------------------------------

//(Mod Squad)

//(Corrected by fixing object array names and punctuations and moving console.log into appropriate group)
/*
{
    const modSquad = {
        members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        series: {
            start: "1968",
            end: "1973"
        },
    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`
    

    modSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`
    })
    console.log(HTMLRepresentation)
}
*/

//-------------------------------------------------------------

//(Simon Says)
//(corrected by moving the invalidLocation variable into the local for scope and adding an or statement)
/*
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (const location of locations) {
   let invalidLocation;

    if (location[0] > 2 || location[1] > 2 ) {
        let invalidLocation = true
        console.log("This location is invalid")
    } 
    if (location[0] < 2 || location[1] < 2 ) {
        let invalidLocation = false
        console.log("This location is valid")
    }
}
*/

//---------------------------------------------------

//(Lambda Llama)
/*
const llamaNamer = () => {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)
    const names = possibleNames[randomizer]

    const namer = (name) => {
        return `${name} the Llama`
    }
    const fullName = namer(`${names}`)
    return fullName
}

let nameMaker = llamaNamer()
console.log(nameMaker)
*/