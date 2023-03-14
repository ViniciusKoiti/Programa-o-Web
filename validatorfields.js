function getFieldAllEmptyHidden(){
    
}

function getFieldAllEmpty(){
    let querySelectorAllFieldText = document.getElementsByTagName(input[type='text']);

    let filterTextField = querySelectorAllFieldText.filter(filterText);
    let getTextProject = filterTextField.filter();
    console.log("Error");
    
}

function filterText(filterTextField){
    return  filterTextField == null;
}

function filterHiddenText(field){
    let querySelectorAllFieldText = document.getElementsByTagName(input[type='text']);
    let filterTextField = querySelectorAllFieldText.filter(filterText);
}