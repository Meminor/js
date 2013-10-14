// UnderConstruct 2 frame animation Version .01 - by Mark Hawkins of MarkHawkinsDesigns.com

$(window).load(function(){	
		
var bgfxtimer;
var bgTimerSpeed = "10000";

   // Set our z-indexes to stack our animation frames as layers
  $("#bg1").css('z-index',1);
  $("#bg2").css('z-index',2);
  // this is our frame/cover layer
  $("#bgcover").css('z-index',3);


function bgCab_1(event){
         // show and hide our frames
		$("#bg1").css("display","block"); 
		$("#bg2").css("display","none");
		// animate from left to right
		$("#bg1").animate({"left": "+=900px"},{
           easing: "linear",
           duration:10000,
           complete: function(){

         }
     });


                clearTimeout(bgfxtimer);
    bgfxtimer = setTimeout(eval("bgCab_2"),bgTimerSpeed);
     // reset our background position
	$("#bg2").animate({"left": "-900px"}, 0);

}


function bgCab_2(event){
	   
	    $("#bg2").addClass("resetbg2");
		$("#bg2").css("display","block"); 
		$("#bg1").css("display","none");
		$("#bg2").animate({"left": "+=900px"},{
    easing: "linear",
    duration:10000,
    complete: function(){
        //callback
    }
});

  clearTimeout(bgfxtimer);
  bgfxtimer = setTimeout(eval("bgCab_1"),bgTimerSpeed);  

  $("#bg1").animate({"left": "-900px"}, 0);


}

// Initialize our BG animation!
bgCab_1();


});