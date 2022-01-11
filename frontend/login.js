let form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        'username': form.username.value,
        'password': form.password.value
    }

    fetch('https://devsearchapp.herokuapp.com/api/users/token/', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(formData) 
    }).then(resp => resp.json())
    .then(data => {
        console.log('token', data.access)
        if (data.access) {
            localStorage.setItem('token', data.access)
            window.location = 'https://devsearchapp.herokuapp.com/api/projects/'
        } else {
            alert('User OR password did not work')
        }
    })
})