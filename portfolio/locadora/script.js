function validationForm() {
  let validationCod = document.forms["register"]["cod"].value;
  let validationTitle = document.forms["register"]["title"].value;
  let valiadationDirector = document.forms["register"]["director"].value;
  let validationDate = document.forms["register"]["date"].value;
  let validationRadio = document.forms["register"]["radio"].value;

  if (validationCod == "") {
    alert("o Código deve ser preenchido");
    return false;
  }
  if (validationTitle == "") {
    alert("O Titulo deve ser preenchido");
    return false;
  }
  if (valiadationDirector == "") {
    alert("O Nome do diretor deve ser preenchido");
    return false;
  }
  if (validationDate == "") {
    alert("A Data deve ser preenchida");
    return false;
  }
  if (validationRadio == "") {
    alert("O Gênero deve ser preenchida");
    return false;
  }
  alert("A validação ocorreu de forma correta");
}
