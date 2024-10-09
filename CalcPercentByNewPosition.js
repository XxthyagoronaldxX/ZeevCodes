document.addEventListener('DOMContentLoaded', async function (event) {
   function calcPercentByNewPosition() {
      const oldValue = document.getElementById("inpsalarioAtual").value;
      const newValue = document.getElementById("inpsalarioProposto").value;
      const percElement = document.getElementById("inppercentualDeAumento");

      if (oldValue.trim() === "" || newValue.trim() === "") return;

      if (parseInt(oldValue) > parseInt(newValue)) {
         percElement.value = (((parseInt(newValue)*100)/parseInt(oldValue)) * (-1) + 100) * (-1);
      } else {
         percElement.value = (parseInt(newValue)*100)/parseInt(oldValue);
      }
   }

   const oldValueElement = document.getElementById("inpsalarioAtual");
   const newValueElement = document.getElementById("inpsalarioProposto");

   oldValueElement.addEventListener("change", (event) => {
      event.preventDefault();

      calcPercentByNewPosition();
   });

   newValueElement.addEventListener("change", (event) => {
      event.preventDefault();

      calcPercentByNewPosition();
   });
});
