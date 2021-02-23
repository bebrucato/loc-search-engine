var $textInput = $('#textInput1');
var $submitBtn = $('#submitBtn');

function getAPI(query) {
    console.log(query)
    var queryURL = `https://www.loc.gov/search/?q=${query}&fo=json`;
    fetch(queryURL)
    .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            localStorage.setItem("results", JSON.stringify(data.results))
        })
        .catch(function(err) {
            console.log(err)
        })
    };


$submitBtn.on("click", function(event) {
    event.preventDefault();
    var value = $textInput.val();
    getAPI(value) 
});

