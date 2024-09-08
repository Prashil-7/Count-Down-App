const enddate=new Date("23 sept, 2024 23:30:00").getTime();
const startdate=new Date().getTime();


// const updatedate=()=>{

//     const currentdate=new Date().getTime();
//      const distcover= startdate-currentdate;
//      const distpend= enddate-currentdate;

//     //  days hrs sefc

//     const oneday= (24*60*60*1000);
//     const onehours= (60*60*1000);
//     const oneminutes= (60*1000);
//     const oneseconds= (1000);

//     // inko maths  karna 


//     const days= Math.floor(distpend / (oneday));
//     const hours= Math.floor((distpend % (oneday) / (onehours)));
//     const minutes = Math.floor((distpend % (onehours)) / (oneminutes));
//     const sec =  Math.floor((distpend % (oneminutes)) / (oneseconds));
     
        
//         //ui me dalna
//         document.getElementById('days').innerText=days;
//         document.getElementById('hours').innerText=hours;
//         document.getElementById('min').innerText=minutes;
//         document.getElementById('seconds').innerText=sec;

//         // progeress bar ko adjust karna 

//         const  totaldist= enddate-startdate;

//         const percentagedist= (distcover/percentagedist) *100;

//         // ui me dalna

//                 document.getElementById("progress-bar").style.width = percentagedist + "%";

//                 if(distpend<0){
//                     clearInterval(x);
//                     document.getElementsByClassName("countdown").innerText = "expried time";

//                     document.getElementById("progress-bar").style.width = "100%";
                    
//                 }

//     }

  let x= setInterval(

    function updatedate  (){

        const currentdate=new Date().getTime();
         const distcover= startdate-currentdate;
         const distpend= enddate-currentdate;
    
        //  days hrs sefc
    
        const oneday= (24*60*60*1000);
        const onehours= (60*60*1000);
        const oneminutes= (60*1000);
        const oneseconds= (1000);
    
        // inko maths  karna 
    
    
        const days= Math.floor(distpend / (oneday));
        const hours= Math.floor((distpend % (oneday) / (onehours)));
        const minutes = Math.floor((distpend % (onehours)) / (oneminutes));
        const sec =  Math.floor((distpend % (oneminutes)) / (oneseconds));
         
            
            //ui me dalna
            document.getElementById('days').innerText=days;
            document.getElementById('hours').innerText=hours;
            document.getElementById('min').innerText=minutes;
            document.getElementById('seconds').innerText=sec;
    
            // progeress bar ko adjust karna 
    
            const  totaldist= enddate-startdate;
    
            const percentagedist= (distcover/percentagedist) *100;
    
            // ui me dalna
    
                    document.getElementById("progress-bar").style.width = percentagedist + "%";
    
                    if(distpend<0){
                        clearInterval(x);
                        document.getElementsByClassName("countdown").innerText = "expried time";
    
                        document.getElementById("progress-bar").style.width = "100%";
                        
                    }
    
        } 
    
    
    
    ,1000);
