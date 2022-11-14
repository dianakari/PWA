
self.addEventListener('fetch', event => {

  

    event.respondWith( fetch('img/main-patas-arriba.jpg' ) );


    const resp = fetch( event.request )
    .then( resp => {

        return resp.ok ? resp : fetch('img/girasol.jpg');
        if (resp.ok) {
            return resp;
        } else {
            return fetch('img/girasol.jpg');
        }
    });


    event.respondWith( resp );

});
