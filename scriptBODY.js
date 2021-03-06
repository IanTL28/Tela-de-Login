
// criando um evento para avisar quando apertarem o botao de envio dos dados
document.getElementById("btn-submit").addEventListener("click", e => {

    console.log("O botão foi clicado !");

});

// criando um evento para avisar quando o cursor do mouse estiver sobre o formulario
 document.getElementById("form-login").addEventListener("mouseenter", e =>{

    console.log("O mouse está sobre o formulário");

 });


 //evento para avisar quando o cursor sair de cima do formulario
document.querySelector("#form-login").addEventListener("mouseleave", e =>{

    console.log("O mouse está fora do formulário");
});


/*cancelando o comportamento normal do formulario de ser enviado para a pagina da loja.
 Ele irá pegar os dados que foram preenchidos para serem mostrados no console, apenas. */

document.querySelector("#form-login").addEventListener("submit", e =>{

    e.preventDefault(); 

    let email = document.querySelector("#email").value; 

    let password = document.querySelector("#password").value;

    let json = { // transformando o json em uma variável
        email,
        password 
    };
    
 console.log(json);

if(json.email == ""){ 
    console.error ("O campo email deve ser preenchido!");
    } 
    
    else if (!json.password){
         console.error("O campo password deve ser preenchido!");
    }

    else {
        console.log ("Dados validados com sucesso!");
    }

});

