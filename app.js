document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Form Submitted");
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const hobbies = document.getElementById('hobbies').value;

    const userData = {
        name: name,
        age: age,
        email: email,
        hobbies: hobbies
    };

    const jsonOutput = JSON.stringify(userData, null, 2);
    document.body.innerHTML += `<pre>${jsonOutput}</pre>`;
});
