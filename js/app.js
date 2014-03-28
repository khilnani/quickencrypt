

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

function encrypt(text, pass) {
  //console.log('pass:' + pass + ' encrypt IN:' + text);
  var key = str_sha1(pass);  
  var encrypted = Aes.Ctr.encrypt(text, key,128);
  //console.log('encrypt OUT:' + encrypted);
  return encrypted;
}

function decrypt (text, pass) {
  //console.log('pass:' + pass + ' decrypt IN:' + text);
  var key = str_sha1(pass);  
  var decrypted = Aes.Ctr.decrypt(text, key,128);
  //console.log('decrypt OUT:' + decrypted);
  return decrypted;
}

$( function () {
  $('#encrypt').click( function () {
    $('#encrypted').val( encrypt( $('#decrypted').val(), $('#password').val() ) );
  });
  
  $('#decrypt').click (function () {
    $('#decrypted').val( decrypt( $('#encrypted').val(), $('#password').val() ) );
  });
  
  console.log('Page loaded');
});


