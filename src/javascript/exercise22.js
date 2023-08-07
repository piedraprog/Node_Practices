
let bots = [
    {
        "channels": [
            
        ],
        "entryConditionEntityIds": [],
        "entryCondition": "new",
    },
    {
        "channels": [
        ],
        "entryConditionEntityIds": [],
        "entryCondition": "new",
    },
    {
        "channels": [
            
        ],
        "entryConditionEntityIds": [],
        "entryCondition": "new",
    },
    {
        "channels": [
        ],
        "entryConditionEntityIds": [],
        "entryCondition": "new",
    },
    {
        "channels": [
        ],
        "entryConditionEntityIds": [],
        "entryCondition": "new",
    },
    {
        "channels": [
        ],
        "entryConditionEntityIds": [],
        "entryCondition": "new",
    },
    {
        "channels": [

        ],
        "entryConditionEntityIds": [],
        "entryCondition": "new",
    },
    {
        "channels": [

        ],
        "entryConditionEntityIds": [],
        "entryCondition": "new",
    },
    {
        "channels": [

        ],
        "entryConditionEntityIds": [],
        "entryCondition": "new",
    },
    {
        "channels": [
        ],
        "entryConditionEntityIds": [],
        "entryCondition": "new",
    },
]


let comparativa = 
    {
        "entryCondition": "new",
        "entryConditionEntityIds": [],
        "channels": [

        ]
    }


let hasSame = false;

function verificarCoincidencia(bots, comparativa) {

    arrHasSameChannels = [];
    arrHasSameEntryCondition = [];
    arrHasSameEntryConditionEntityIds = [];

    if(comparativa.entryCondition !== 'new' && comparativa.entryConditionEntityIds.length === 0) return false;
    bots.map((bot) => { 
        
        comparativa.channels.map((channel) => {
            console.log(bot.channels.includes(channel));
            arrHasSameChannels.push(bot.channels.includes(channel));
        });

        arrHasSameEntryCondition.push(bot.entryCondition === comparativa.entryCondition);
        console.log(comparativa.entryCondition !== "new")
        if(comparativa.entryCondition !== "new") arrHasSameEntryConditionEntityIds.push(bot.entryConditionEntityIds.join(",") === comparativa.entryConditionEntityIds.join(","));

    });


    const hasSameChannels = someTrue(arrHasSameChannels);

    if(hasSameChannels) hasSame = true;

    const hasSameEntryCondition = someTrue(arrHasSameEntryCondition);
    const hasSameEntryConditionEntityIds = someTrue(arrHasSameEntryConditionEntityIds);

    // tiene los mismos canales, pero no tiene la misma condición de entrada ni los mismos entryConditionEntityIds
    if(hasSameChannels && !hasSameEntryCondition && !hasSameEntryConditionEntityIds ) {
        return false;
    }

    // tiene los mismos canales, la misma condición de entrada y esta es un nuevo tikket
    if(hasSameChannels && hasSameEntryCondition && comparativa.entryCondition === "new") {
        return true;
    } 
    
    // tiene los mismos canales, la misma condición de entrada y los mismos entryConditionEntityIds y es un entryCondition distinto a new
    if(hasSameChannels && hasSameEntryCondition && hasSameEntryConditionEntityIds && comparativa.entryCondition !== "new") {
        return true;
    } 

    return false;
}

const someTrue = (theArr) => {
    return theArr.some(element => element === true)
}

const coincidencia = verificarCoincidencia(bots, comparativa);

console.log( hasSame);
console.log("¿Se encontró una coincidencia?", coincidencia);







