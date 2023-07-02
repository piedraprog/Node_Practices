let campañasNodeCounts = [
    {
        "campaignId": "562339d9219d",
        "completed_count": 0,
        "entered_count": 100,
        "aaaaaa":"a"
    },
    {
        "campaignId": "1ac1e334aed7",
        "completed_count": 0,
        "entered_count": 0
    },
    {
        "campaignId": "9733775dfa31",
        "completed_count": 0,
        "entered_count": 0
    },
    {
        "campaignId": "74a9c053572a",
        "completed_count": 0,
        "entered_count": 213
    }
]

let campañasCompletas = [
    {
        "id": "74a9c053572a",
        "completed_count": 0,
        "entered_count": 0
    },
    {
        "id": "1ac1e334aed7",
        "completed_count": 0,
        "entered_count": 0
    },
    {
        "id": "9733775dfa31",
        "completed_count": 0,
        "entered_count": 0,
        "AAAA":"AAAAAA"
    },
    {
        "id": "562339d9219d",
        "completed_count": 0,
        "entered_count": 0
    },
    
]

let result = campañasCompletas.map((item) => {
    
    let updatedItem = { ...item };

    campañasNodeCounts.forEach((item2) => { 
        if(item.id === item2.campaignId){

            
            updatedItem.completed_count = item2.completed_count
            updatedItem.entered_count = item2.entered_count
        }
    })

    return updatedItem
});

console.log(result)