// se declara el nombre del cache y los assets para almacenar los archivos al mismo
const devpwa = "pwa-site"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/imagenes/logo1.jpg",
  "/imagenes/fiestta.jpg",
  "/imagenes//evento1.jpg",
  "/imagenes/evento2.jpg",
   "/imagenes/evento3.jpg",
   "/imagenes/event4.jpg",
   "/imagenes/evento5.jpg",
   "/imagenes/evento6.jpg",
   "/imagenes/evento7.jpg",
   "/imagenes/evento8.jpg",
   "/imagenes/pegi7.png",
   "/imagenes/facebook.png",
  ]


self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(devpwa).then(cache => {
      cache.addAll(assets)
    })
  )
})

//recuperar los datos
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
      console.log("[Servicio Worker] Obteniendo recurso: " + e.request.url);
      return (
        r ||
        fetch(e.request).then((response) => {
          return caches.open(devpwa).then((cache) => {
            console.log(
              "[Servicio Worker] Almacena el nuevo recurso: " + e.request.url
            );
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});