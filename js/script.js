const wrap = document.querySelector('section#gallery .wrap');
const jumbo = document.querySelector('section#gallery .jumbo');
const thumbs = document.querySelectorAll('.thumb');

wrap.addEventListener('click', function (e) {

    if(e.target.className == 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');

        setTimeout(() => {
            jumbo.classList.remove('fade');
        }, 500);


        thumbs.forEach(function (thumb) {
            thumb.className = 'thumb';
        });

        e.target.classList.add('active');
    }

});

