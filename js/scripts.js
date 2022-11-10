/*alert('Exempo de comando alert');*/
//console.log('Mensagem enviada pelo console');

//var numero = 44;

const myCarouselElement = document.querySelector('carouselBannerIndicators');

function mostrarMenu()
        {
            let menu = document.getElementById("menu-sec");
            menu.classList.toggle("mostrarMenu");
            // if (menu.style.display == 'flex'){
            //     menu.style.display = 'none';
            // }else{
            //     menu.style.display = 'flex';
            // }
        }

function resetForm()
    {
        document.getElementById("id_form-cadastro").reset();
    }


/*const carousel = new bootstrap.Carousel(myCarouselElement, {interval: 2000,  wrap: true});*/
