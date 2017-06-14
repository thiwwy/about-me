/*------ Loading Bar ---------*/

$(window).load(function() {
    $('#page').css('opacity', 1);
})

/* ------ clicking on obout you -----*/
$("#about_you_btn").click(function() {	
	      	      
 $('#about_you').css('opacity', 1);

});

/* ------ clicking on about me -----*/
function aboutMeReset(description, description_2 = undefined){

    var feedbackBox = document.getElementById("feedback_box");
    var elClone = feedbackBox.cloneNode(true);
    var parent = feedbackBox.parentNode;
    elClone.innerHTML = description;

    if(description_2 != undefined){
        var br = document.createElement("br");
        elClone.appendChild(br);
        elClone.innerHTML += description_2;
    }
    
    parent.replaceChild(elClone, feedbackBox);

}