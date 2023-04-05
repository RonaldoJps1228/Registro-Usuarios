let tabla=[
    {identificacion: '123', nombre: 'pedro',apellido:'conejo',direccion:'calle 12', correo:'pedrito@yopmail.com', telefono:'1012023040', pais:'jp', nacimiento:'2012-12-12'},
    {identificacion: '234', nombre: 'maya',apellido:'tamez',direccion:'calle 123', correo:'mayonesa@hotmail.com', telefono:'1234567890', pais:'mx', nacimiento:'2005-05-10'},
    {identificacion: '345', nombre: 'ronaldo',apellido:'suarez',direccion:'calle 34', correo:'nandito@cuc.edu.co', telefono:'0123456789', pais:'co', nacimiento:'2002-12-28'},
];

let cuerpotabla= document.getElementById('tabla-usuarios')
function listar(){
    let listado="";
    for(let i=0; i< tabla.length; i++){
        listado+= `<tr><th scope="row"> ${(i+1)} </th> <td>${tabla[i].identificacion} </td><td>${tabla[i].nombre} </td><td> ${tabla[i].apellido}  </td><td>${tabla[i].direccion} </td><td> ${tabla[i].correo}  </td><td> ${tabla[i].telefono}  </td><td> ${tabla[i].pais}  </td><td> ${tabla[i].nacimiento}  </td></tr>`
    }
    cuerpotabla.innerHTML=listado
}

function nuevo(){
    let identificacion= document.getElementById('identificacion').value;
    let nombre= document.getElementById('nombre').value;
    let apellido= document.getElementById('apellido').value;
    let direccion= document.getElementById('direccion').value;
    let correo= document.getElementById('correo').value;
    let telefono= document.getElementById('telefono').value;
    let pais= document.getElementById('pais').value;
    let nacimiento= document.getElementById('nacimiento').value;
    if (!identificacion) {
        alert('Ingrese la identificacion')
        return
    }
    if(!nombre) {
        alert('Ingrese el nombre')
        return
    }
    if (!apellido) {
        alert('Ingrese el apellido')
        return
    }
    if (!direccion) {
        alert('Ingrese la dirección')
        return
    }
    if(!correo) {
        alert('Ingrese el correo')
        return
    }
    if (!telefono) {
        alert('Ingrese el telefono')
        return
    }
    if (!pais) {
        alert('Ingrese su pais')
        return
    }
    if (!nacimiento) {
        alert('Ingrese su fecha de nacimiento')
        return
    }
    cuerpotabla.innerHTML=`<tr><th scope="row">${'n'}</th><td>${identificacion}</td><td>${nombre}</td><td>${apellido}</td><td>${direccion}</td><td>${correo}</td><td>${telefono}</td><td>${pais}</td><td>${nacimiento}</td></tr>`
   
    let nuevo={identificacion:identificacion,nombre:nombre,apellido:apellido,direccion:direccion,correo:correo,telefono:telefono,pais:pais,nacimiento:nacimiento}
    tabla.push(nuevo)
    alert('Usuario registrado con exito')
}
