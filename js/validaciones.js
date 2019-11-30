function validar(){
   name = document.getElementById('name').value;
   phone = document.getElementById('phone').value;
   mail = document.getElementById('mail').value;
   message = document.getElementById('message').value;

    let notspace = /\s/;

   if(name.length == "" || phone.length == "" || mail.length == "" || message == ""){
        alert('Por favor verifique los datos, ningún campo puede estar vacio');
        return false;
   }else if (name.length < 3) {
       alert('El campo de nombre no puede tener menos de 3 caracteres');
       return false;
   }else if (name.length > 50){
       alert('El campo de nombre no puede ser mayor a  50 caracteres');
       return false;
   }else if(!isNaN(name)){
       alert("El campo de nombre no puede llevar numeros");
       return false;
   }else if(isNaN(phone)){
       alert('El campo de telefono solo acepta numeros');
       return false;
   }else if(phone.length < 5){
       alert('El campo de telefono no puede ser menor a 5 digitos');
   }else if(phone.length > 20){
    alert('El campo de telefono no puede ser mayor a 20 digitos');
}else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(mail)){
       alert("El campo del correo no es valido, por favor verifique los datos");
       return false;
   }else if (notspace.test(phone) || notspace.test(mail)){
       alert("Los campos no pueden contener espacios");
   }

}