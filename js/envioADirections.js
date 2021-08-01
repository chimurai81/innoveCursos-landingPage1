const divWhatsappDirection = document.getElementById("whatsappdirection");
const div1 = document.getElementById("divInicio1");
const div2 = document.getElementById("divInicio2");
const div3 = document.getElementById("divInicio3");

divWhatsappDirection.addEventListener("click", () =>{
    location.href ="https://api.whatsapp.com/send?phone=5493516342592&text=Hola!%20Quiero%20generar%20mas%20ventas!"
    
})

div1.addEventListener("click", () =>{
    location.href ="/cursos.html";
})

div2.addEventListener("click", () =>{
    location.href ="/cursos.html";
})

div3.addEventListener("click", () =>{
    location.href ="/contacto.html";
})


