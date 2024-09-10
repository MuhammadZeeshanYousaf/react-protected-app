function ProtectedAccess({ children }) {
  let isPasswordValidated = false;
  try {
    let [username, password] = [
      localStorage.getItem("username"),
      localStorage.getItem("password"),
    ];
    do {
      if (username === process.env.PROTECTED_USERNAME && password === process.env.PROTECTED_PASSWORD) {
        isPasswordValidated = true;
        return children;
      } else {
        let enteredUsername = prompt("Username");
        let enteredPassword = prompt("Password");

        enteredUsername = btoa(enteredUsername);
        enteredPassword = btoa(enteredPassword);

        // Set username and password
        localStorage.setItem("username", enteredUsername);
        localStorage.setItem("password", enteredPassword);
        [username, password] = [enteredUsername, enteredPassword];
      }
    } while (!isPasswordValidated);
  } catch (e) {
    alert(e.message);
    return null;
  }
}

export default ProtectedAccess;
