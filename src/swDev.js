

export default function SwDev(){
    const Sw_URL=`${process.env.PUBLIC_URL}/sw.js`;
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register(Sw_URL).then(res=>console.log(res)).catch(err=>console.log(err))
    }
    else{
        console.log("Service Worker is not Available !!");
    }
}