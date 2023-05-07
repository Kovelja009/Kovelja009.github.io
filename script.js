window.addEventListener('load', function() {
    var home = document.getElementById('home');
    home.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    var ponuda = document.getElementById('ponuda');
    ponuda.addEventListener('click', function() {
        window.location.href = 'ponuda.html';
    });

    var web = document.getElementById('web');
    web.addEventListener('click', function() {
        window.location.href = 'web-hosting.html';
    });

    var business = document.getElementById('business');
    business.addEventListener('click', function() {
        window.location.href = 'business-hosting.html';
    });

    var domeni = document.querySelectorAll(".opcija-row");
    var proveri = document.getElementById('proveri');
    var searhbar = document.getElementById('searchbar');
    for (let i = 0; i < domeni.length; i++) {
        let str = "korpa" + (i+1).toString();
        let korpa = document.getElementById(str);
        korpa.style.display = 'none';
    }

    proveri.addEventListener('click', function() {
        let domen = searhbar.value;        
        if(domen.length == 0){
            for(let i = 0; i < domeni.length; i++) {
                let str = "korpa" + (i+1).toString();
                let korpa = document.getElementById(str);
                korpa.style.display = 'none';
                domeni[i].classList.remove('dostupno');   
            }
        }

        if(domen.length > 0 && domen.length < 3){
            for(let i = 0; i < domeni.length; i++) {
                let str = "korpa" + (i+1).toString();
                let korpa = document.getElementById(str);
                if(i == 0  || i == 3 || i == 5){
                    korpa.style.display = 'block';
                    domeni[i].classList.add('dostupno');
                }else{
                    korpa.style.display = 'none';
                    domeni[i].classList.remove('dostupno');
                }
            }      
        }

        if(domen.length >= 3){
            for(let i = 0; i < domeni.length; i++) {
                let str = "korpa" + (i+1).toString();
                let korpa = document.getElementById(str);
                if(i == 1 || i == 4){
                    korpa.style.display = 'block';
                    domeni[i].classList.add('dostupno');
                }else{
                    korpa.style.display = 'none';
                    domeni[i].classList.remove('dostupno');
                }
            }      
        }
    
    });
});