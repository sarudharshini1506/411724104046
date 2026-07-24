const btn = document.getElementById("fetchBtn");
const status = document.getElementById("status");
const usersDiv = document.getElementById("users");
btn.addEventListener("click", () => {
    status.innerHTML = "Loading...";
    usersDiv.innerHTML = "";
    setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                data.forEach(user => {
                    usersDiv.innerHTML += `
                        <div class="user">
                            <h3>${user.name}</h3>
                            <p><strong>Email:</strong> ${user.email}</p>
                            <p><strong>Phone:</strong> ${user.phone}</p>
                        </div>
                    `;
                });
                status.innerHTML = "Loaded successfully";
            })
            .catch(error => {
                status.innerHTML = "Error loading data";
                console.log(error);
            });
    }, 2000);
});