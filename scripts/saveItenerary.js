//saves to local database

const localAPI = {
    saveJournalEntry: (newEntryObject) => {
        return fetch("http://localhost:8088/itineraries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        })
    }
}

export default localAPI