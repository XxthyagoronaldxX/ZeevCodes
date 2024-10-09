function generatingCheckboxFromForm() {
   let acessosAuxiliar = "";
   const yesOption = "Sim";

   const acessoAoConfluence = document.getElementById('inpacessoAoConfluence').value;
   const acessoAoDropbox = document.getElementById('inpacessoAoDropbox').value;
   const acessoAoJira = document.getElementById('inpacessoAoJira').value;

   const inclusaoNoGrupoDoWhatsapp = document.getElementById('inpinclusaoNoGrupoDoWhatsapp').value;
   const inclusaoNoSlack = document.getElementById('inpinclusaoNoSlack').value;

   const acessoAPlataformaDeCursosAlura = document.getElementById('inpacessoAPlataformaDeCursosAlura').value;
   const acessoAPlataformaZeev = document.getElementById('inpacessoAPlataformaZeev').value;

   if (acessoAoConfluence === yesOption) acessosAuxiliar += "Liberar acesso ao Confluence\n";
   if (acessoAoDropbox === yesOption) acessosAuxiliar += "Liberar acesso ao Dropbox\n";
   if (acessoAoJira === yesOption) acessosAuxiliar += "Liberar acesso ao Jira\n";
   if (inclusaoNoGrupoDoWhatsapp === yesOption) acessosAuxiliar += "Incluir no grupo de Whatsapp\n";
   if (inclusaoNoSlack === yesOption) acessosAuxiliar += "Incluir no Slack\n";
   if (acessoAPlataformaDeCursosAlura === yesOption) acessosAuxiliar += "Dar acesso a plataforma de Cursos Alura\n";
   if (acessoAPlataformaZeev === yesOption) acessosAuxiliar += "Dar acesso a plataforma do Zeev\n";


   document.getElementById('inpacessosAuxiliar').setAttribute("value", acessosAuxiliar);
}

generatingCheckboxFromForm();
