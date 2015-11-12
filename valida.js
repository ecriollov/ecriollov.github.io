function validarForm() {
    email = document.getElementById("FrmMain").FrmFolderOwner.value;
    folder= document.getElementById("FrmMain").FrmFolderId.value;
    expr  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!expr.test(email)){
        alert("El email es incorrecto");
    }else if (!folder.length){
        alert("Seleccione una carpeta");
    }else {
        document.getElementById("FrmMain").submit();
    }
}