var canvas = new fabric.Canvas("mycanvas");
X = document.getElementById("myaudio");

function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img) { block_image_object = Img

        block_image_object.scaleToWidht(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canavs.add(block_image_object);
    });
}

function playSound()
{
    x.play();
}