import {
  googleRegister, newUserCollection, registerEmailAndPassword, onGetUsers,
} from '../../firebase';
import { validate } from './registerValidate';
// eslint-disable-next-line import/no-cycle

export const Register = (onNavigate) => {
  const register = document.createElement('section');
  register.setAttribute('id', 'register');

  const Home = document.createElement('form');
  Home.setAttribute('id', 'home');

  const title = document.createElement('h1');
  title.innerText = '<Laboratorians Music>';
  title.id = 'title';

  const welcome = document.createElement('p');
  welcome.innerText = 'Regístrate para compartir música con la comunidad de Laboratoria.';

  const userDiv = document.createElement('div');
  const user = document.createElement('label');
  user.innerText = 'Usuario';

  const userInput = document.createElement('input');
  userInput.setAttribute('name', 'user');
  userInput.setAttribute('required', '');
  userInput.ariaRequired = 'rellena este campo';
  userInput.placeholder = 'Ingresa tu usuario';
  userInput.id = 'userInput';
  userInput.setAttribute('class', 'inputForm');
  const errorUser = document.createElement('h6');
  errorUser.innerText = 'El nombre debe tener entre 3 y 16 caracteres, puede contener números, _ y - .';
  errorUser.setAttribute('class', 'error');
  errorUser.setAttribute('id', 'message-error-user-1');
  const errorUserExist = document.createElement('h5');
  errorUserExist.innerText = 'Este nombre de usuario ya existe';
  errorUserExist.setAttribute('class', 'errorUserExist');

  const emailDiv = document.createElement('div');
  const email = document.createElement('label');
  email.innerText = 'Correo';

  const emailInput = document.createElement('input');
  emailInput.setAttribute('class', 'inputForm');
  emailInput.setAttribute('name', 'email1');
  emailInput.setAttribute('required', '');
  emailInput.placeholder = 'Ingresa tu correo';
  emailInput.id = 'emailInput';
  emailInput.setAttribute('type', 'email');
  const errorEmail = document.createElement('h6');
  errorEmail.innerText = 'Ejemplo: example@correo.com';
  errorEmail.setAttribute('class', 'error');
  errorEmail.setAttribute('id', 'message-error-mail-1');

  // const emailInput2 = document.createElement('input');
  // emailInput2.setAttribute('class', 'inputForm');
  // emailInput2.setAttribute('name', 'email2');
  // emailInput2.setAttribute('required', '');
  // emailInput2.placeholder = 'Válida tu correo';
  // emailInput2.id = 'emailInput2';
  // emailInput2.setAttribute('type', 'email');
  // const errorEmail2 = document.createElement('h6');
  // errorEmail2.innerText = 'Ambos correos deben ser iguales';
  // errorEmail2.setAttribute('class', 'error');
  // errorEmail2.setAttribute('id', 'message-error-mail-2');

  const passwordDiv = document.createElement('div');
  passwordDiv.setAttribute('class', 'passwordDiv');
  const password = document.createElement('label');
  password.innerText = 'Contraseña';

  const divPassword = document.createElement('div');
  divPassword.setAttribute('class', 'divPassword');

  const divPassword2 = document.createElement('div');
  divPassword2.setAttribute('class', 'divPassword2');

  const passwordInput = document.createElement('input');
  passwordInput.setAttribute('class', 'inputForm');
  passwordInput.setAttribute('required', '');
  passwordInput.placeholder = 'Ingresa tu contraseña';
  passwordInput.id = 'passwordInput';
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('name', 'password1');
  const errorPassword = document.createElement('h6');
  errorPassword.innerText = 'La contraseña debe tener entre 6 y 16 caracteres, puede contener números, _ y - .';
  errorPassword.setAttribute('class', 'error');
  errorPassword.setAttribute('id', 'message-error-password-1');

  const passwordInput2 = document.createElement('input');
  passwordInput2.setAttribute('required', '');
  passwordInput2.setAttribute('class', 'inputForm');
  passwordInput2.setAttribute('name', 'password2');
  passwordInput2.placeholder = 'Válida tu contraseña';
  passwordInput2.id = 'passwordInput2';
  passwordInput2.setAttribute('type', 'password');
  const errorPassword2 = document.createElement('h6');
  errorPassword2.innerText = 'Ambas contraseñas deben ser iguales';
  errorPassword2.setAttribute('class', 'error');
  errorPassword2.setAttribute('id', 'message-error-password-2');

  const imageEye = document.createElement('img');
  imageEye.src = '../Image/eye-solid.svg';
  imageEye.setAttribute('id', 'imageEye');

  const imageEye2 = document.createElement('img');
  imageEye2.src = '../Image/eye-solid.svg';
  imageEye2.setAttribute('id', 'imageEye2');

  const buttonRegister = document.createElement('button');
  buttonRegister.innerText = 'Registrarse';
  buttonRegister.id = 'registerButton';

  const buttonGoogle = document.createElement('button');
  const image = document.createElement('img');
  image.src = 'https://andigarcia.com/wp-content/uploads/2020/04/Google-Logo-Fondo-negro.jpg';
  buttonGoogle.innerText = 'Ingresa con Google';
  buttonGoogle.setAttribute('id', 'buttonGoogle');

  const divAccount = document.createElement('div');
  divAccount.className = 'divAccount';

  const haveAccount = document.createElement('h3');
  haveAccount.innerText = '¿Ya tienes una cuenta?';
  haveAccount.className = 'haveAccount';
  const login = document.createElement('h3');
  login.innerText = 'Inicia sesión';
  login.className = 'login';

  // buttonGoogle.addEventListener('click', async (e) => {
  // try {
  // await registroGoogle();
  // } catch (error) {}
  // });
  buttonGoogle.appendChild(image);

  userDiv.appendChild(user);
  userDiv.appendChild(userInput);
  userDiv.appendChild(errorUser);
  userDiv.appendChild(errorUserExist);

  emailDiv.appendChild(email);
  emailDiv.appendChild(emailInput);
  emailDiv.appendChild(errorEmail);
  // emailDiv.appendChild(emailInput2);
  // emailDiv.appendChild(errorEmail2);

  divPassword.appendChild(passwordInput);
  divPassword.appendChild(imageEye);

  divPassword2.appendChild(passwordInput2);
  divPassword2.appendChild(imageEye2);

  passwordDiv.appendChild(password);
  passwordDiv.appendChild(divPassword);
  passwordDiv.appendChild(errorPassword);
  passwordDiv.appendChild(divPassword2);
  passwordDiv.appendChild(errorPassword2);

  divAccount.appendChild(haveAccount);
  divAccount.appendChild(login);

  Home.appendChild(userDiv);
  Home.appendChild(emailDiv);
  Home.appendChild(passwordDiv);
  Home.appendChild(buttonRegister);
  Home.appendChild(buttonGoogle);
  Home.appendChild(divAccount);
  // Home.appendChild(buttonGoogle);
  register.appendChild(title);
  register.appendChild(welcome);
  register.appendChild(Home);

  const inputs = Home.querySelectorAll('input');
  inputs.forEach((input, index) => {
    const messageError = Home.querySelectorAll('h6')[index].id;
    input.addEventListener('keyup', () => {
      validate(input.name, input.value, messageError);
    });
    input.addEventListener('blur', () => {
      validate(input.name, input.value, messageError);
    });
  });

  userInput.addEventListener('keyup', () => {
    onGetUsers((users) => {
      const userNames = [];
      users.forEach((userss) => {
        userNames.push(userss.data().user);
      });
      if (userNames.includes(userInput.value)) {
        console.log('este usuario ya existe');
        console.log(errorUserExist);
        errorUserExist.classList.add('activo');
      } else {
        errorUserExist.classList.remove('activo');
      }
    });
  });

  Home.addEventListener('submit', (e) => {
    e.preventDefault();

    // TODO: antes de llamar a registerClick, deben validar los inputs

    registerEmailAndPassword(emailInput.value, passwordInput.value)
      .then((UserCredential) => {
        console.log(UserCredential.user.uid);
        const userID = UserCredential.user.uid;
        onNavigate('/login');
        newUserCollection(userID, userInput.value, emailInput.value, passwordInput.value);
        console.log(UserCredential.User);
      });
    /*
    .then(() => onNavigate('/login'));
    alert('Te hemos enviado un correo de verificación');
    sendEmailVerification(auth.currentUser);
    onNavigate('/login');
    verificarEmail();
    newUserCollection(userInput.value, correoInput.value, contraseñaInput.value);
    inputForm();
    */
  });

  imageEye.addEventListener('click', () => {
    const passwordType = document.getElementById('passwordInput');
    const imageOpenEye = document.getElementById('imageEye');
    if (passwordType.type === 'password') {
      passwordType.type = 'text';
      imageOpenEye.src = '../Image/eye-slash-solid.svg';
    } else {
      passwordType.type = 'password';
      imageOpenEye.src = '../Image/eye-solid.svg';
    }
  });

  imageEye2.addEventListener('click', () => {
    const passwordType2 = document.getElementById('passwordInput2');
    const imageOpenEye = document.getElementById('imageEye2');
    if (passwordType2.type === 'password') {
      passwordType2.type = 'text';
      imageOpenEye.src = '../Image/eye-slash-solid.svg';
    } else {
      passwordType2.type = 'password';
      imageOpenEye.src = '../Image/eye-solid.svg';
    }
  });

  buttonGoogle.addEventListener('click', () => {
    onNavigate('/login');
    googleRegister()
      .then((credenciales) => {
        console.log(credenciales);
      })
      .catch((error) => console.log(error));
  });

  // console.log(inputs);
  // console.log(inputForm);

  login.addEventListener('click', () => {
    onNavigate('/login');
  });

  return register;
};
