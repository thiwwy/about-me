var listPassionsSelected = [];

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
    var idSelected = "selected_" + obj.id;
    
    if(elem.classList.contains("selected"))

        removePassionFromSelected(idSelected);
        
    else
            
        addPassionInSelected(obj);

}

/** === Removing a Passion From the Selected Box === 
    * @id => id of the selected element in the Selected Box 
*/
function removePassionFromSelected(id){

    /** === Taking the respectively element in the Passion Box === */
    var idObj = id.substr((id.indexOf('_')+1), id.length);
    var idPassion = "yourPassion_" + idObj;
    var passionToUnselect = document.getElementById(idPassion);

    /** === Unselect the element and remove it from the Selected Box === */
    passionToUnselect.classList.remove("selected");
    document.getElementById(id).remove();

    /** Updating the Counter */
    var txtBox = document.getElementById("feedbackAboutYou_box");
    var txt = txtBox.innerHTML;
    var nPassions = Number(txt.match( /\d/g));
    nPassions ++;
    txt = txt.replace( /\d/g, nPassions);
    txtBox.innerHTML = txt;

    removeFromList(idObj);

}

/** === Adding the Passion in the Selected Box === 
    * @id => id of the selected element to add in the Selected Box
*/
function addPassionInSelected(obj){

    var id = "selected_" + obj.id;

    /** Checking The counter */
    var txtBox = document.getElementById("feedbackAboutYou_box");
    var txt = txtBox.innerHTML;
    var nPassions = Number(txt.match( /\d/g));
    
    if(nPassions == 0)
                return;

    /** === Taking the respectively element in the Passion Box and select it === */
    var idPassion = "yourPassion_" + id.substr((id.indexOf('_')+1), id.length);
    var passionToSelect = document.getElementById(idPassion);
    passionToSelect.classList.add("selected");

    /** Creating new element to add in the webpage */
    var parentToAdd = document.createElement("div");
    parentToAdd.setAttribute('id', id);
    parentToAdd.setAttribute('class','mdl-cell mdl-cell--4-col addedInBox');
    parentToAdd.setAttribute('onclick', "removePassionFromSelected('" + id + "')");

     /** Cloning the element selected */
    var cloneSelected = passionToSelect.firstChild.cloneNode(true);
    cloneSelected.removeAttribute('class');
    cloneSelected.removeAttribute('id');
    parentToAdd.appendChild(cloneSelected);

    /** Adding the Element in the page */
    var selectedBox = document.getElementById("PassionsSelected");  
    selectedBox.appendChild(parentToAdd);

    /** Updating the Counter */
    nPassions --;
    txt = txt.replace( /\d/g, nPassions);
    txtBox.innerHTML = txt;

    listPassionsSelected.push(obj);

    if(nPassions == 0)
                matchFeedback();

}

function matchFeedback(){
    var totMatch = 0;

    for(var i=0; i<listPassionsSelected.length ; i++)
        totMatch += parseInt(listPassionsSelected[i].match);

}

function removeFromList(id){

    for(var i=0; i<listPassionsSelected.length; i++){
        if(listPassionsSelected[i].id === id)
                posToCanc = i;
    }

    listPassionsSelected.splice(posToCanc, 1);
}