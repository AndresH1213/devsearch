let form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        'username': form.username.value,
        'password': form.password.value
    }

    fetch('http://127.0.0.1:8000/api/users/token/', {
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
            window.location = 'file:///C:/Users/57318/Desktop/Django/DjangoProyect-Udemy/Django-2021-Start/frontend/projects-list.html'
        } else {
            alert('User OR password did not work')
        }
    })
})