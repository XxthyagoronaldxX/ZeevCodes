document.addEventListener('DOMContentLoaded', function (event) {
  const documentElement = document.getElementById("divdocumentSign");
  const btnFinishElement = document.getElementById("btnFinish");
  const documentIdFormElement = document.getElementById("inpdocumentId");

  async function sendDocumentToAdobeSign(document) {
    const form = new FormData();

    form.append("File", document);

    const sendToAdobeSignOrError = await fetch("https://api.na3.adobesign.com:443/api/rest/v6/transientDocuments", {
      method: "POST",
      body: form,
      headers: {
        Authorization: "Bearer "
      }
    });

    if (!sendToAdobeSignOrError.ok)
      return "";

    return (await sendToAdobeSignOrError.json()).transientDocumentId;
  }

  async function getDocumentFromForm() {
    const documentReferenceElement = documentElement.getElementsByTagName("a")[0];

    if (documentReferenceElement == undefined)
      return null;

    const documentReferenceUrl = documentReferenceElement.href;
    const getDocumentOrError = await fetch(documentReferenceUrl, { method: "GET" });

    if (!getDocumentOrError.ok) return null;

    const documentBlob = await getDocumentOrError.blob();

    return new Blob([documentBlob], { type: "application/pdf" });
  }

  btnFinishElement.setAttribute("onClick", "");
  btnFinishElement.addEventListener("click", async (event) => {
    const documentBlob = await getDocumentFromForm();

    if (documentBlob === null) {
      alert("Error ao tentar buscar o documento!");
      return;
    }

    documentIdFormElement.value = await sendDocumentToAdobeSign(documentBlob);

    if (documentIdFormElement.value === "") {
      alert("Não foi possível enviar o documento para o Adobe Sign!");
      return;
    }

    conclude();
  });
});
