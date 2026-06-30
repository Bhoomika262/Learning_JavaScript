//Names IIFE
(function chai()
{
    console.log("DB Connected")
})();

//Un-named IIFE
( (name)=>{
    console.log(`DB Connected to ${name}` )
})(`Bhoomika`);