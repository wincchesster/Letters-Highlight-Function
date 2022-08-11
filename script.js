document.addEventListener('keydown', function (event) {
    let keyBoard = document.querySelectorAll('.btn');
    keyBoard.forEach(element => {
        if (event.code === element.dataset.title) {  
            keyBoard.forEach(key => {
                // + unput active key
                if (event.code !== key.dataset.title) 
                key.classList.remove('active')
            });
            element.classList.toggle('active');
        }
    });
});