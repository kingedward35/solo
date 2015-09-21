var express = require('express');



function signup() {
  var user = document.getElementById('username');
  var password = document.getElementById('password');

  var coruser = 'test';
  var corpass = '123';

  if (user.value === coruser) {
    if (password.value === corpass) {
      alert('You are logged in as ' + user.value);
      window.open('pictures.html');
    } else {
      alert('Incorrect username or password');
    }
  } else {
    alert('Incorrect username or password');
  }
}