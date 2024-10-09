function turnOnEventsOfHours() {
   const horaInicialElement = document.getElementById("inphoraInicial");
   const horaFinalElement = document.getElementById("inphoraFinal");
   const horaExtraElement = document.getElementById("inptotalDeHorasExtras");
   const btnFinish = document.getElementById("btnFinish");

   horaExtraElement.setAttribute("disabled", "");
   btnFinish.setAttribute("disabled", "");

   horaInicialElement.value = "";
   horaFinalElement.value = "";
   horaExtraElement.value = "";

   function genExtraHours(iniValue, finValue) {
      const [hoursIni, minutesIni] = iniValue.split(":");
      const [hoursFin, minutesFin] = finValue.split(":")

      if (hoursIni > hoursFin || (hoursIni === hoursFin && minutesIni > minutesFin) || hoursIni > 24 || hoursFin > 24 || minutesFin > 60 || minutesIni > 60) {
         horaFinalElement.value = "00:00";
         horaExtraElement.value = "00:00";
         btnFinish.setAttribute("disabled", "");
         return;
      }

      const hoursIntoMinutesIni = hoursIni * 60 + parseInt(minutesIni);
      const hoursIntoMinutesFin = hoursFin * 60 + parseInt(minutesFin);
      const hoursIntoMinutesExtra = hoursIntoMinutesFin - hoursIntoMinutesIni;

      const hoursExtra = Math.floor(hoursIntoMinutesExtra / 60);
      const minutesExtra = hoursIntoMinutesExtra % 60;

      horaExtraElement.value = (hoursExtra.toString().length > 1 ? hoursExtra : "0" + hoursExtra) + ":" + (minutesExtra.toString().length > 1 ? minutesExtra : "0" + minutesExtra);

      if (horaExtraElement.value !== "00:00")
         btnFinish.removeAttribute("disabled");
      else
         btnFinish.setAttribute("disabled", "");
   }

   horaInicialElement.addEventListener("change", (event) => {
      genExtraHours(event.target.value, horaFinalElement.value);
   });
   horaFinalElement.addEventListener("change", (event) => {
      genExtraHours(horaInicialElement.value, event.target.value);
   })
}
