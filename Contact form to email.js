function emailSend(){

    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var messageBody = "Name " + userName +
    "<br/> Phone " + phone +
    "<br/> Email " + email;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "succtech68@gmail.com",
        Password : "4D17E2E0976D134D5533729F45400FE96C8A",
        To : 'succtechzz4@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => {
        if(message=='OK'){
          swal("Successful", "You clicked the button!", "success");
        }
        else {
          swal("Error", "You clicked the button!", "error");
        }
      }
    );
}