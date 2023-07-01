var nameInput = document.querySelector('#name')
var nbtn = document.querySelector('.nbtn')
var searchInput = document.querySelector('#search')
var sbtn = document.querySelector('.sbtn')
var array = []
var nameValue = nameInput.value
var ulName = document.querySelector('.nameList')
var ulsearch = document.querySelector('.searchList')
nbtn.addEventListener('click', function(){
    var nameValue = nameInput.value.replace(/\s/g, "").toLowerCase()
    notRepeat(nameValue)
})


function notRepeat(name){
    var flag = true
    for(let i = 0;i < array.length;i++){
        if(array[i] == name){
            flag = false;
        }else if(name == ''){
            flag = false
        }
    }
    if(flag == true){
        array.push(name)
        ulName.innerHTML += `<li>${name}</li>`
    }

}

searchInput.addEventListener('keyup', function(){
    var searchValue = searchInput.value.trim().toLowerCase()
    var filteredArray = array.filter(function(name) {
        return name.startsWith(searchValue);
    });
    ulsearch.innerHTML = '';
    for(let i = 0;i < filteredArray.length;i++){
        ulsearch.innerHTML += `<li>${filteredArray[i]}</li>`;
    }
})