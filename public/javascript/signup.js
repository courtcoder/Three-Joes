async function signupFormHandler(event) {
      event.preventDefault();
    
      const username = document.querySelector("#username-signup").value.trim();
      const first_name = document.querySelector("#first-name-signup").value.trim();
      const last_name = document.querySelector("#last-name-signup").value.trim();
      const email = document.querySelector("#email-signup").value.trim();
      const password = document.querySelector("#password-signup").value.trim();
    
      if (username && first_name && last_name && email && password) {
        const response = await fetch("/api/users", {
          method: "post",
          body: JSON.stringify({
            username,
            first_name,
            last_name,
            email,
            password
          }),
          headers: { "Content-Type": "application/json" },
        });
    
        if (response.ok) {
          document.location.replace("/menu/");
        } else {
          alert(response.statusText);
        }
      }
    }


document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
