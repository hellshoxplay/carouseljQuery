$(document).ready(function(){
    let image = $('.slider img');
    let indexImage = image.length - 1;
    let i = 0;
    let imageActuelle = image.eq(i);


    image.css('display', 'none');
    imageActuelle.css('display', 'block');

//carousel avec défilement automatique exclusivement et fondu entre chaque image

    function slidePicture()
    {
        setTimeout(function(){
            if (i < indexImage) {
                i++;
            } else {
                i = 0;
            }

            image.fadeOut(1000);
            imageActuelle = image.eq(i);
            imageActuelle.fadeIn(1000);

            slidePicture();
        }, 1500);
    }

    slidePicture();

});