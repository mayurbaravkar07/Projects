let element = document.getElementById('change-text-btn');
element.addEventListener('click', changeText);

function changeText() {
    document.getElementById('info-text').innerText = "This is the manipulates when clicked";
    
    // Correct the tag name in the next line
    document.getElementsByTagName('h1')[0].innerText = "####Welcome to DOM Manipulation!";
}




    let addItemBtn = document.getElementById('add-item-btn');
    addItemBtn.addEventListener('click', addItems);

    function addItems(){
        let addItem = document.createElement('li');
        addItem.innerText = "New Item";
        document.getElementById('item-list').append(addItem);
    }


    let removeItemBtn=document.getElementById('remove-item-btn');
    removeItemBtn.addEventListener('click',removeLast);

    function removeLast(){
        let ul=document.getElementById('item-list');
        
        if(ul.children.length>0){
            ul.removeChild(ul.lastElementChild);
        }
    }