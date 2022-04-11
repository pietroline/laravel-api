// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

// inizio gestione mostra/nascondi password 
// resources/views/auth/login.blade.php
// resources/views/auth/register.blade.php

    // inizio password

        const hiddenPassword = document.querySelector(".mJS_password_hidden");
        const showedPassword = document.querySelector(".mJS_password_showed");
        const inputTypePassword = document.getElementById("password");


        //visualizzo l'icona per mostrare/nascondere la password solo se la input contiene qualcosa
            inputTypePassword.addEventListener("input", function(e){
                if(inputTypePassword.value.length > 0){
                    hiddenPassword.classList.replace("d-none","d-block");
                }else{
                    hiddenPassword.classList.replace("d-block","d-none");
                }
            });

        //funzioni di listen per le icone di nascondi/mostra password
            hiddenPassword.addEventListener("click", function(event){
                hiddenPassword.classList.replace("d-block","d-none");
                showedPassword.classList.replace("d-none", "d-block");
                inputTypePassword.type="text";
            })

            showedPassword.addEventListener("click", function(event){
                hiddenPassword.classList.replace("d-none","d-block");
                showedPassword.classList.replace("d-block", "d-none");
                inputTypePassword.type="password";
            })     
    // fine password

    
// fine gestione mostra/nascondi password


// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------