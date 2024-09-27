
document.addEventListener('DOMContentLoaded', () => {
  const signUpForm = document.querySelector('.sign-up-form');

  signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = signUpForm.querySelector('input[placeholder="Tên đăng kí"]').value;
    const email = signUpForm.querySelector('input[placeholder="Địa chỉ Email"]').value;
    const password = signUpForm.querySelector('input[placeholder="Mật khẩu"]').value;

    const user = {
      username,
      email,
      password
    };

    localStorage.setItem(username, JSON.stringify(user));
    alert('Đăng ký thành công!');

    signUpForm.reset();
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const signInForm = document.querySelector('.sign-in-form');
  const signInButton = signInForm.querySelector('input[type="button"]');

  signInButton.addEventListener('click', () => {
    const username = signInForm.querySelector('input[placeholder="Tên đăng nhập"]').value;
    const password = signInForm.querySelector('input[placeholder="Mật khẩu"]').value;

    const storedUser = JSON.parse(localStorage.getItem(username));

    if (storedUser && storedUser.password === password) {
      localStorage.setItem('loggedInUser', username);
      alert('Đăng nhập thành công!');
      window.location.href = "../index.html"; // Chuyển hướng đến trang chủ
    } else {
      alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
  });
});