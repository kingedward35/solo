function appendUrl() {
  elementCreator(urlSaver());
}

var userInfo = {
  username:"",
  password:"",
  photo: []
};


function updatePhoto(photo, obj) {
  obj.photo.push(photo);
}

function elementCreator(url) {
  var img = '<img class="images" src="' + url + '">';
  var a = '<a href="' + url + ' " class="info" title="Full Image">' + img + '</a>';
  var div = '<div class="gallery">' + a + '</div>';
  $('.container').append(div);
}

function urlSaver() {
  var val = $('.upload').val();
  return val;
}

var sendData = function(message) {
  $.ajax({
    url: '/signup',
    type: "POST",
    data: JSON.stringify(message),
    contentType: "application/json",
    success: function(data) {
      console.log('User info: message sent', data);
      window.location.replace('http://localhost:3000/pictures.html');
    },
    error: function(data) {
      console.error('User info: Failed to send message');
    },
  });
};

var signup = function() {
  var username = document.getElementById('username');
  var password = document.getElementById('password');
  userInfo = {
    username: username.value,
    password: password.value
  };
  sendData(userInfo);
};
