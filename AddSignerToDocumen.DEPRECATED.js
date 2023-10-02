document.addEventListener('DOMContentLoaded', async function (event) {
  const agreementIdKey = "agreementId";

  const signerEmailElement = document.getElementById("inpe-MailDoCandidato");
  const documentIdElement = document.getElementById("inpdocumentId");
  const agreementIdElement = document.getElementById("inpagreementId");
  const btnFinishElement = document.getElementById("btnFinish");

  btnFinishElement.setAttribute("click", "");
  btnFinishElement.addEventListener("click", (event) => {
    localStorage.removeItem(agreementIdKey);

    conclude();
  })

  const agreementIdLocal = localStorage.getItem(agreementIdKey);

  if (agreementIdLocal !== null) {
    agreementIdElement.value = agreementIdLocal;
    return;
  }

  const signerEmail = signerEmailElement.value;
  const documentId = documentIdElement.value;

  const body = {
    fileInfos: [{
      transientDocumentId: documentId,
    }],
    name: "MyTestAgreement",
    participantSetsInfo: [{
      memberInfos: [{
        email: signerEmail,
      }],
      order: 1,
      role: "SIGNER"
    }],
    signatureType: "ESIGN",
    state: "IN_PROCESS"
  }

  const headers = new Headers({
    "content-type": "application/json",
    "Authorization": "Bearer 3AAABLblqZhBCnOJxNy6FLWHoBkpiviUoAwMZfgaXA5PVF9hY1w7lznNUsQDhas1MNtJpbRYkjdxP9s8t5dI48aLgpHDCav1p"
  });

  const sendToAgreementOrError = await fetch("https://api.na3.adobesign.com:443/api/rest/v6/agreements", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });

  const agreementId = (await sendToAgreementOrError.json()).id;

  agreementIdElement.value = agreementId;
  localStorage.setItem(agreementIdKey, agreementId);
});
