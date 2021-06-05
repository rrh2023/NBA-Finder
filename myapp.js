// init nba
const nba = new NBA;

const ui = new UI;

// search input 


const searchLast = document.getElementById("searchLast");

// search input event lister
searchLast.addEventListener('keyup', (e) => {
    // get input text

    const userText = e.target.value;

    if(userText !== ''){
        // make http call
        nba.getPlayer(userText)
        .then(data =>{
           if(data.profile.api.players.length === 0){
                // show alert
           } else {
                ui.showStats(data.profile.api.players);
           }
        })
    } else {
        // ui.clearProfile();
    }
});



