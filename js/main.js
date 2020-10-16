(() => {
    // make an AJAX request using the Fetch API
    fetch('./data/classData.json')
        .then(res => res.json())
        .then(data => {

            debugger;
        console.log(data);

        debugger;

        let currentUserText = currentUser.querySelector('.profPanelText').children;

        currentUserText[1].textContent = Team[user].coursename;
        currentUserText[2].textContent = Team[user].role;
        currentUserText[3].textContent = Team[user].nickname;

        // handleData
        // here's where you would call the function that puts the pieces on the page
    })
    .catch((err) => {
        console.log(err);
    })

})();