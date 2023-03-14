function selectOneCheckbox(namegroupRadioButton) {
  var checkboxes = document.querySelectorAll("input[type='checkbox'][name='" + namegroupRadioButton + "']");

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        checkboxes.forEach(function (cb) {
          if (cb !== checkbox) {
            cb.checked = false;
          }
        });
      }
    });
  });
}

function seeAndHiddenPix(elementId,checkboxId){
    const element = document.getElementById(elementId);
    const checkbox = document.getElementById(checkboxId);

    if (element && checkbox){
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
              element.classList.remove('hidden');
            } else {
              element.classList.add('hidden');
            }
          });
    }
}

function seeAndHiddenCheque(elementId,checkboxId){
    const element = document.getElementById(elementId);
    const checkbox = document.getElementById(checkboxId);

    if (element && checkbox){
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
              element.classList.remove('hidden');
               element.classList.remove('required');
            } else {
              element.classList.add('hidden');
               element.classList.add('required');
            }
          });
    }
}


function seeAndHiddenTransferencia(elementId,checkboxId){
    const element = document.getElementById(elementId);
    const checkbox = document.getElementById(checkboxId);

    if (element && checkbox){
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
              element.classList.remove('hidden');
              element.classList.remove('required');
            } else {
              element.classList.add('hidden');
               element.classList.add('required');
            }
        });
    }
}

function TestaCPF(strCPF) {
  var Soma;
  var Resto;
  Soma = 0;
if (strCPF == "00000000000") return false;

for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
  return true;
}

function validEmptyForm(nameClassRequired){
  let getAllFieldsRequired = document.getElementByClass(nameClassRequired);
  
  getAllFieldsRequired.forEach(
    function(element){
       if (element.value == null || element.value == ""){
        element.classList.add('red-border');
        return false;
    }
     });
     return true;
   }
    
    
  
function validatorCpf(nameInputCpf){
  let getCPFfield = document.querySelector('input[' + nameInputCpf + ']');
  getCPFfield.forEach(function(element){
    valueFieldCpf = element.value;
    valueCpfField.replaceAll(".-");
    if(!TestaCPF(valueCpfField)){
      return false;  
    }
    return true;
  });
  }
  
  
  let valueCpfField = getCPFfield.value;
  let cpfString = valueCpfField.replaceAll(".-");

  if(!TestaCPF(cpfString)){
    
    return false
  }


}





document.addEventListener('DOMContentLoaded', () => {
    seeAndHiddenPix('hiddenPix', 'pix');
    seeAndHiddenCheque('hiddenCheque', 'cheque');
    seeAndHiddenTransferencia('hiddenTransferencia', 'transferencia');
    selectOneCheckbox("formaPagamento");
    validEmptyForm("required");
});


