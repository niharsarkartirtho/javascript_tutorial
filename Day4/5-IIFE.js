//IIFE : immediately invoked functin expression
// is is called imediatly as soon it is defined
(function(){
    console.log("NORMAL IIFE");
})();

(()=>{
    console.log("arrow IIFE");
})();

(async () => {
    console.log("async arrow IIFE");
})();