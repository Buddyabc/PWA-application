let cacheData="appV1";


//make cache of pre files 

this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                "/static/js/bundle.js",
                "/favicon.ico",
                "/manifest.json",
                "/logo192.png",
                "index.html",
                "/",
                "/user"
            ])
        })
    )
})


//fetch data comes from caches

this.addEventListener("fetch",(event)=>{
    //only if we are offline then fetch from cache 
   if(! navigator.onLine){
    event.respondWith(
        caches.match(event.request).then((result)=>{
            if(result){
                return result;
            }

            //to fetch the un-cache data like api fetch 
            let requestUrl=event.request.clone();
            return fetch(requestUrl);
        })
    )
   }
})





