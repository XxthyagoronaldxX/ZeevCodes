document.addEventListener('DOMContentLoaded', async function (event) {
   async function findUserById(id) {
      const url = `https://netbiis.zeev.it/api/internal/legacy/1.0/datasource/get/1.0/q4qTUJhdUjldZhevX46e@zT@7ilNEPN5rpl`
         + `xiW11zNrbG82PAEaKp9NK1LOM2ST04hTUvt3tyH2-xfJZpCQWPQ__?inpuserId=${id}`;

      return (await fetch(url)).json();
   }

   async function findAllUsersByTeamCodeAndPositionCode(teamCode, positionCode) {
      const url = `https://netbiis.zeev.it/api/internal/legacy/1.0/datasource/get/1.0/q4qTUJhdUjldZhevX46e@-6gUlkf-uV7h4dL8cjT@pIZo7kkcfasKUsFF`
      + `jyqWz7QaShHkomVFFoDmk@0xQxwGA__?inpteamCode=${teamCode}&inppositionCode=${positionCode}`;

      return (await fetch(url)).json();
   }

   async function validPeopleInPositionsBy(teamCode) {
      const positions = [
         {
            code: "coordenador-9ce9538b",
            formId: "inpexisteCoordenador"
         },
         {
            code: "supervisor-1d1ef7b6",
            formId: "inpexisteSupervisor"
         },
         {
            code: "gerente-1dad778c",
            formId: "inpexisteGerente"
         },
         {
            code: "diretor-5a8cce11",
            formId: "inpexisteDiretor"
         }
      ];

      for (const position of positions) {
         const response = await findAllUsersByTeamCodeAndPositionCode(teamCode, position.code);

         document.getElementById(position.formId).value = response.success.length == 0 ? "False" : "True";
      }
   }

   document.getElementById("BtnSend").disabled = true;

   const userId = document.getElementById("inpuserId").value;

   const response = await findUserById(userId);

   const teamCode = response.success[0].fields.timeCod;

   validPeopleInPositionsBy(teamCode).then(() => {
      document.getElementById("BtnSend").disabled = false;
   });
});
