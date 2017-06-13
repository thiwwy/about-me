function AboutMePassions(txt){
    var feedbackBox = document.getElementById("feedback_box");
    var elClone = feedbackBox.cloneNode(true);
    var parent = feedbackBox.parentNode;
    elClone.innerHTML = txt;
    
    parent.replaceChild(elClone, feedbackBox);

    /*
    feedbackBox.classList.remove("mast__text");
    feedbackBox.classList.add("class", "mast__text");*/
    
}