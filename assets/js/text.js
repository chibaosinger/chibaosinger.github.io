// tabs
window.onload = function (e) {


    // Populate text

    const text = [{
            item: "Far far away, be",
        },
        {
            item: "Far far away, behind the",
        },
        {
            item: "Far far away, behind the world m",
        },
        {
            item: "Far far away, behind the world mountains, far fr",
        },
        {
            item: "Far far away, behind the world mountains, far from the countries",
        },
        {
            item: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres",
        },
        {
            item: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated",
        },
        {
            item: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics",
        },
        {
            item: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by the",
        },
        {
            item: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic living month!",
        },
    ];

    text.forEach(function (el) {
        let template = `<p class="text-item">${el.item} <img src="icons/copy.svg" alt=""></p>`;

        document.querySelector(".text").insertAdjacentHTML("beforeend", template);
    });

    // Select and copy source

    var textItem = document.querySelectorAll('.text-item'),
        copied = document.querySelector('.copied'),
        input = document.querySelector('.copyUrl');

    textItem.forEach(function (element) {
        element.addEventListener('click', selectSrc);
    });

    function selectSrc(event) {
        var textSrc = event.currentTarget.innerText;
        //var target = event.currentTarget.parentElement;
        input.value = textSrc;
        input.select();
        document.execCommand('copy');

        copied.classList.add('pop');
        //target.classList.add('img-active');


        setTimeout(function () {
            copied.classList.remove('pop');
        }, 1200);

        //setTimeout(function () {
        //    target.classList.remove('img-active');
        //}, 1000);
    }
    
}