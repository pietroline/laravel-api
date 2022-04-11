
// inizio gestione mostra/nascondi password 
// resources/views/auth/register.blade.php

    // inizio password-confirm
        const hiddenPasswordConfirm = document.querySelector(".mJS_password_confirm_hidden");
        const showedPasswordConfirm = document.querySelector(".mJS_password_confirm_showed");
        const inputTypePasswordConfirm = document.getElementById("password-confirm");


        //visualizzo l'icona per mostrare/nascondere la password solo se la input contiene qualcosa
            inputTypePasswordConfirm.addEventListener("input", function(e){
                if(inputTypePasswordConfirm.value.length > 0){
                    hiddenPasswordConfirm.classList.replace("d-none","d-block");
                }else{
                    hiddenPasswordConfirm.classList.replace("d-block","d-none");
                }
            });

        //funzioni di listen per le icone di nascondi/mostra password
            hiddenPasswordConfirm.addEventListener("click", function(event){
                hiddenPasswordConfirm.classList.replace("d-block","d-none");
                showedPasswordConfirm.classList.replace("d-none", "d-block");
                inputTypePasswordConfirm.type="text";
            })

            showedPasswordConfirm.addEventListener("click", function(event){
                hiddenPasswordConfirm.classList.replace("d-none","d-block");
                showedPasswordConfirm.classList.replace("d-block", "d-none");
                inputTypePasswordConfirm.type="password";
            })    
    // fine password-confirm

// fine gestione mostra/nascondi password-confirm


// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------