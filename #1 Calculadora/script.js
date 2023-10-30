
const pantalla = document.querySelector(".Pantalla")
const botones = document.querySelectorAll(".boton")

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        
        if(boton.id === "limpiar"){
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "¡Error!"){
                pantalla.textContent = "0"
            }
            if(pantalla.textContent.length === 1) {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1)
            }
            return;
        }

        if(boton.id === "igual"){
            if((pantalla.textContent).charAt((pantalla.textContent).length - 1) === '/' || pantalla.textContent.includes("//")){
                pantalla.textContent = "¡Error!";
            }

            try {

                const resultado = eval(pantalla.textContent);
                if (isFinite(resultado)) { 
                    pantalla.textContent = resultado;
                } else {
                    pantalla.textContent = "¡Error!";
                }
            } catch {
                pantalla.textContent = "¡Error!";
            }
            return;
        }

        const botonOn =  boton.textContent;

        if (pantalla.textContent === "0"  || pantalla.textContent === "¡Error!") {
            pantalla.textContent = botonOn;
        } else {
            pantalla.textContent += botonOn;
        }

        
    })
})

