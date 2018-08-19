// window.onload = function() {
// console.log(document.getElementById('add'));
// }


// function buttonClick(){ console.log('button clicked!')}

// document.getElementById('add').addEventListener('click', buttonClick);

// User clicked on the add button.
// If there is any text inside the item field, add the text to the todo list
document.getElementById('add').addEventListener('click', function(){
    var value = document.getElementById('item').value;

    if(value){
      console.log('woo');
    }
});
