//! I have never written JS before, please contribute to this, I'm sure it's stupidly inefficient.

// Get relevant fields in DOM
var content_name = document.getElementById('name')

content_name.onkeyup = function(){
    document.getElementById('output').innerHTML = content_name.value;
}

// TODO: Check if content name can be represented in generated URL
// TODO: Generate URLs
// TODO: i18n
// TODO: Generate embed codes
// TODO: Generate text
// TODO: Get user input