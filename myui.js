// -------------------------------UI CLASS----------------------------------

class UI {
    constructor() {
        this.profile = document.getElementById('stats');
    }


    showStats(player) {
        const searchFirst = document.getElementById("searchFirst").value;
        for (let i = 0; i < 5; i++) {
            if (player[i].firstName === searchFirst){
                const correctPlayer = player[i];

        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-9">
            <span class="badge badge-danger">First Name: ${correctPlayer.firstName}</span>
            <span class="badge badge-danger">Last Name: ${correctPlayer.lastName}</span>
            <span class="badge badge-danger">NBA Start: ${correctPlayer.startNba}</span>
            <span class="badge badge-danger">Years Pro: ${correctPlayer.yearsPro}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Country: ${correctPlayer.country}</li>
              <li class="list-group-item">Height(in meters): ${correctPlayer.heightInMeters}</li>
              <li class="list-group-item">Weight(in kilos): ${correctPlayer.weightInKilograms}</li>
            </ul>
          </div>
        </div>
      </div>
        `

        console.log(correctPlayer)
             }
        };

    }

    clearProfile(){
        this.profile.innerHTML = ''
    }

}
