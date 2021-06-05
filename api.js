//--------------API-------------
class NBA {
	async getPlayer(userText) {
		const profileResponse = await fetch(`https://api-nba-v1.p.rapidapi.com/players/lastName/${userText}`, {
			"method": "GET",
			"headers": {
				"x-rapidapi-key": "2923fa5c29msh4ed871febec1a25p14cdd2jsn2e8162ce8038",
				"x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
			}
		})

		const profile = await profileResponse.json()

		return {
			profile
		}

	}
}

