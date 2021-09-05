export const RegisterSW = async () =>{
    if('serviceWorker' in navigator){
        try{
            console.log("Service worker launched")
            await navigator.serviceWorker.register('./sw.js')
        }catch(e)
        {
            console.log(e)
        }
    }
}