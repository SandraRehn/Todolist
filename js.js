let nyrad = document.getElementById('input');
let checkbox = document.getElementById('checkbox');
let wrapper = document.querySelector('.wrapper');
let list = document.querySelector('.list');

wrapper.addEventListener('keypress', function(e){
    let key = e.which || e.keyCode;
    console.log(e.target);
    if(key === 13){
       // let node = document.createElement("LI");
        //let textnode = document.createTextNode("hejdu");
        let test = `<li><input type="checkbox" id="checkbox" name="feature"/><label for="checkbox"><input type="text" name="" id="input"></label></li>`;
       // node.appendChild(test);
        document.querySelector('.list').appendChild(test);

    }
})



