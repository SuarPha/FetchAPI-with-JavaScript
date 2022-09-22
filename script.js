
function fetchData() {
  fetch("https://reqres.in/api/users")
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const html = data.data
        .map((user) => {
          return `
            <div class='user'>
              <div class='col-sm-4'>
                <p><img src="${user.avatar}" alt="${user.first_name}"/></p>
                <h2>Name: ${user.first_name} ${user.last_name}</h2>
                <p> <a class=button href="${user.email}">Contact</a></p>
                </div>
              </div>
        `;
        })
        
        .join("");

      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    })
  
    .catch((error) => {
      console.log(error);
    });
}
fetchData();



