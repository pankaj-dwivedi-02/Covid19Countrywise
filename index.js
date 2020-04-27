
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
                output += 
            '<div class="country-names">' +
                
                '<div class="innerdiv">'+
                '<h3 class="headings">'+i+'</h3>'+
                '<div class="confirm">Confirm: '+countries[i][Object.keys(countries[i]).length-1].confirmed+'</div>'+
                '<div class="recovered">Recovered: '+countries[i][Object.keys(countries[i]).length-1].recovered+'</div>'+
                '<div class="deaths">Deaths: '+countries[i][Object.keys(countries[i]).length-1].deaths+'</div>'+
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

