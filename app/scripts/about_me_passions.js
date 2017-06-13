/** ============ AboutMePassions 
 * One of passion in #about_me section has been clicked
 * @txt -> the text to show as feedback
 * changhing the html text of #feedback_box with the @txt in input
*/
function AboutMePassions(obj){
    var feedbackBox = document.getElementById("feedback_box");
    var elClone = feedbackBox.cloneNode(true);
    var parent = feedbackBox.parentNode;
    elClone.innerHTML = obj.description;
    
    parent.replaceChild(elClone, feedbackBox);
    
}

/** ============ AboutYouPassions 
 * One of passion in #about_you section has been clicked
 * obj -> the text to show as feedback
 * changhing the html text of #feedback_box with the @txt in input
*/
function AboutYouPassions(obj){
    
    var elem = document.getElementById("yourPassion_" + obj.id);
    var txtBox = document.getElementById("feedbackAboutYou_box");
    var txt = txtBox.innerHTML;
    var nPassions = Number(txt.match( /\d/g));
    console.log("Before: " + nPassions);
    
    if(elem.classList.contains("selected")){
        /* Passion already selected */
        elem.classList.remove("selected");
        nPassions ++;
        txt = txt.replace( /\d/g, nPassions);
        }
    else{
        /* Passion already selected */
        elem.classList.add("selected");
        nPassions --;
        txt = txt.replace( /\d/g, nPassions);
    }
    
    txtBox.innerHTML = txt;
    console.log("After: " + nPassions);
    
}