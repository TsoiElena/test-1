const baseUrl = 'https://tmgwebtest.azurewebsites.net/api/textstrings'
const apiKey = '0J/RgNC40LLQtdGC0LjQutC4IQ=='

const Api = { //function 'get information from server'
    async getTextItem(id: number) {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'GET',
            headers: {
                'TMG-Api-Key': apiKey
            }
        })
        return response.json()
    }
}

export default Api