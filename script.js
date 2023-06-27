const userArr = JSON.parse(localStorage.getItem('user')) || [];
class BankUser {
  constructor(accName, email, accProfileImg, accNumber, accBalance) {
    this.accName = accName;
    this.email = email;
    this.accProfileImg = accProfileImg;
    this.accNumber = accNumber;
    this.accBalance = accBalance;
  }

  static createUser() {
    // e.preventDefault()
    console.log("You have submitted the form");
    const nameInput = document.getElementById("name-input");
    const emailInput = document.getElementById("email-input");
    const imagePath = document.getElementById("image-input");

    const name = nameInput.value;
    const email = emailInput.value;
    const img = imagePath.value;
    // let random;
    // for(let i = 0; i < 10; i++){
    //   random += i;
    // }
    // const random = (number) => {
    //   for(let i = 0; i < 10; i++) {
    //     number += i;
    //     return number;
    //   }
    // }
    // const accNum = random(accNumber)
    const accBalance = 500

    if (name && email) {
      const user = new BankUser(name, email, img, accNum, accBalance); // Create new object
      userArr.push(user);
      console.log(userArr);
      localStorage.setItem('user', JSON.stringify(userArr))
      BankUser.displayUser();
    }
  }

  static displayUser() {
    usersList.innerHTML = "";
    userArr.forEach((user, index) => {
      usersList.innerHTML += `
        <div class="user d-flex align-items-center gap-5">
          <img src="${user.accProfileImg}" width="60" class="rounded-circle" alt="">
          <div class="user-name mt-3 d-flex flex-column">
            <h5>${user.accName}</h5>
            <p class="text-muted">${user.accNumber}</p>
          </div>

        </div>
      `;
    });
  }

  static newUserForm() {
    userForm.style.transform = `scale${0}px`;
  }
}

const userForm = document.getElementById("user-form");
userForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // console.log('')
  BankUser.createUser();
});
