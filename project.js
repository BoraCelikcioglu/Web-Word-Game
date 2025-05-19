let letters = ["A","R","E","L","B"];
let output ="";
let statusflag=false;
let words = ["ABLER","BARE","BALER","ARE","LEAR"];
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
    // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }


$(function(){
    
    $(".shuffleletters").click(function(){
    
        if(output.length === 0 ){
            console.log("xavi")
            shuffle(letters)
            for(let i=0;i<letters.length;i++){
                    $("#p"+(i+1)).text(letters[i]);
            }                   
        }if($(".letter").hasClass("selected")){
        $(".shuffleletters").click(function(){
            $(".shuffleletters").effect("shake",{ direction: "right"},1000);
                                
        })                
    }
    
    });
        $(".letter").click(function(){
            
            
            if($(this).hasClass("selected")){
                $(this).click(function(){
                    $(this).effect("shake",{ direction: "up"},1000);
                    $(this).effect("shake",{ direction: "down"},1000);
                    
                })
              
                
            }else{
                $(this).css("background","#FFF")

                $(this).addClass("selected");
                output+=$(this).text();
                $("#letterdisplay").text(output);
                $("#letterdisplay").css("visibility","visible");
                // $("#letterdisplay").width(text.length*5);
              
            
              
                
            }
    });
    $("#letters").mousedown(function(e){
     if(e.which===3){
            let foundWord;
            for(let word of words){
                if(output === word){
                foundWord = word;}
                      
            }
               
                // $(".").css(" background-color","darkmagenta")
                //             .css("font-size","24px");
               if(foundWord === undefined)
                {
                    $("#letterdisplay").effect("shake",function(){
                        output="";
                        $(this).text(output);
                        $(".letter").removeClass("selected")
                        .css("background-color", "rgb(249,137,241)")
                       
                    })
                } else {
                    let className = "." + foundWord;
                   
                    $(className).map(function(){
                        $(this).removeClass("used").addClass("shown")
                        $(this).css("background-color","darkmagenta")
                                .css("color","white")
                                .css("font-size","24px")
                                .css("font-family","verdana")
                                .css("height", "38px")
                                $("#letterdisplay").animate({up:'50px',down:'10px'},function(){
                                output="";
                                $(this).text(output);
                            })
                                $(".letter").removeClass("selected")
                                .css("background-color", "rgb(249,137,241)")
                                $(className).map(function(){
                                    if($(this).hasClass("shown")){
                                        $(this).addClass("second")        
                                        
                                      }
                                })                
                            

                    });
                    
                     
                    
                }
               
    }
        
    })
    $("#hint").click(function(){
        
if(!statusflag){
    statusflag=!statusflag;
    $(".used").map(function(){
$(this).addClass("hinted").removeClass("used")
    })
    
}
else{
    statusflag=!statusflag;
    $(".hinted").map(function(){
        $(this).removeClass("hinted").addClass("used");
    })
}
    
})
    
});

