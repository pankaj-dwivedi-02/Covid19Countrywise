
window.onload = function(){
    loadcont();
    }
    
function loadcont(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET',"https://pomber.github.io/covid19/timeseries.json",true);

    xhr.onload = function(){
        if(this.status == 200){
            var countries = JSON.parse(this.responseText);
            var output = '';
            for(var i in countries){
                var active = (countries[i][Object.keys(countries[i]).length-1].confirmed - countries[i][Object.keys(countries[i]).length-1].recovered - countries[i][Object.keys(countries[i]).length-1].deaths);
                var confirmed = countries[i][Object.keys(countries[i]).length-1].confirmed;
                var recovered = countries[i][Object.keys(countries[i]).length-1].recovered;
                var deaths = countries[i][Object.keys(countries[i]).length-1].deaths;
                output += 
            '<div class="country-names">' +
                
                '<div class="innerdiv">'+
                '<h3 class="headings">'+i+'</h3>'+
                '<div class="confirm">Confirm: '+confirmed+'</div>'+
                '<div class="active">Active: '+active+'</div>'+
                '<div class="recovered">Recovered: '+recovered+'</div>'+
                '<div class="deaths">Deaths: '+deaths+'</div>'+
                '</div>'+
            '</div>';
            }
            document.getElementById("country").innerHTML = output;
        }
    }
    xhr.send();
}



const search_fun =() => {
    let input = document.getElementById('country-name').value.toLowerCase() ;
    let divi = document.getElementsByClassName('innerdiv'); 

    for(var i=0;i<divi.length;i++){
    let name = divi[i].getElementsByClassName('headings');
    if(name){
        let name_value = name[0].textContent || name[0].innerHTML;
        if(name_value.toLowerCase().indexOf(input) > -1){

            divi[i].style.display = "";

        }else{
            divi[i].style.display = "none";
        }
    }

    }
}

