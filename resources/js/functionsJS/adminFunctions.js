
// inizio gestione della conferma di eliminazione
// resources/views/admin/posts/index.blade.php
// resources/views/admin/categories/index.blade.php
// resources/views/admin/tags/index.blade.php

    const buttons = document.getElementsByClassName("mJS_deleteButton");
    const title = document.getElementById("mJS_modelTitle");
    const form = document.getElementById("mJS_form");


    for(let i=0; i<buttons.length; i++){
        const button = buttons[i];
        const array = JSON.parse(button.value);

        button.addEventListener("click", function(e){

            if(array.type == "posts"){
                title.innerHTML = `Confermi di eliminare <strong>${array.title}</strong>?`
            }else if(array.type == "categories" || array.type == "tags"){
                title.innerHTML = `Confermi di eliminare <strong>${array.name}</strong>?`
            }
        
            form.action = `http://127.0.0.1:8000/admin/${array.type}/${array.id}`
        });
    }


// fine gestione della conferma di eliminazione


// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------


// inizio gestione color badge diversi
// resources/views/admin/posts/show.blade.php
// resources/views/admin/tags/show.blade.php

    for(let i=0; i< document.getElementsByClassName("mJS_badge_color").length; i++){
        const badge_color = document.getElementsByClassName("mJS_badge_color")[i];

        const array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
        let numeroEsadecimale = "#";
        for(let i=0; i<6; i++){
            numeroEsadecimale += array[Math.floor(Math.random() * 16)]
        }
        badge_color.style.backgroundColor = numeroEsadecimale;

    }
// fine gestione color badge diversi




// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
