(() => {
    // make an AJAX request using the Fetch API
    fetch('./data/classData.json')
        .then(res => res.json())
        .then(data => {

            debugger;
        console.log(data);

        debugger;

        document.getElementById("courseN").innerHTML = data.coursename + " - " + data.coursecode;
        debugger;

        document.getElementById("profname").innerHTML = "Profesor - " + data.profname;
        debugger;

        document.getElementById("time").innerHTML = "🕐" + data.classtime[0] + "&emsp;" + "🕘" + data.classtime[1];
        debugger;
        // handleData
        // here's where you would call the function that puts the pieces on the page
    })
    .catch((err) => {
        console.log(err);
    })

})();