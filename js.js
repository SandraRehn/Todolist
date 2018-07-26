let input = document.getElementById('input');
let checkbox = document.querySelector('.checkbox');
//let checkID = document.getElementById('idcheck');
let wrapper = document.querySelector('.wrapper');
let list = document.querySelector('.list');
let checkArr = [];
checkArr.push()

wrapper.addEventListener('keypress', function(e){
    let key = e.which || e.keyCode;
    console.log(e.target);
    if(key === 13){
       // let node = document.createElement("LI");
        let count = 2;
       // let textnode = document.createTextNode("");
        let test = 
        `<li>
            <input type="checkbox" id="checkbox`+count+`" name="feature" onlick = "myFunc()"/>
                <label for="checkbox">
                 <input type="text" name="" id="`+count+`">
             </label>
        </li>`;
        
        document.querySelector('.list').insertAdjacentHTML('beforeend', test);
        let checkboxListener = document.getElementById('checkbox'+count);
        (function (count){
            checkboxListener.addEventListener('click', function(){
                document.getElementById(count).value = '';
            });
        })(count);
        count++;

    }
    document.querySelector('.list:last-child').focus();
})


function myFunc(){

    
    
}




