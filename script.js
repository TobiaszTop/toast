if (document.querySelector('main#examples')) {
    var numberOfButtons = document.querySelectorAll('#examples button').length;

    for (var i = 1; i < numberOfButtons + 1; i++) {
        var button = document.querySelector(`#examples button#button${i}`);
        button.setAttribute('name', i);
        button.addEventListener('click', function () {
            for (var i = 1; i < numberOfButtons + 1; i++) {
                var section = document.querySelector(`#examples div.ex:nth-of-type(${i})`);
                var button = document.querySelector(`#examples button#button${i}`);
                section.classList.remove('show');
                button.classList.remove('show');
            }
            var n = this.getAttribute('name');
            document.querySelector(`#examples button#button${n}`).classList.add('show');
            document.querySelector(`#examples div.ex:nth-of-type(${n})`).classList.add('show');
        });
    }
}