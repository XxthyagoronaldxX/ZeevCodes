document.addEventListener('DOMContentLoaded', async function (event) {
   const startDateElement = document.getElementById("inpdataDeInicio");
   const endDateElement = document.getElementById("inpdataFinal");
   const totalHoursAccElement = document.getElementById("inptotalDeHorasUtilizadas");
   const sendBtnElement = document.getElementById("BtnSend");

   function transformDDMMYYYInDate(dateStr) {
      const [day, month, year] = dateStr.split("/");

      return new Date(year, month - 1, day);
   }

   function transformDateInDDMMYYYY(date) {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();

      return day + "/" + month + "/" + year;
   }

   function getDaysDifference(date1, date2) {
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());

      const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

      return dayDiff;
   }

   function calcTotalHoursByPeriod(startDateStr, endDateStr) {
      if (endDateStr === "" || startDateStr === "") return;

      let startDate = transformDDMMYYYInDate(startDateStr);
      let endDate = transformDDMMYYYInDate(endDateStr);

      if (startDate > endDate) {
         endDate = startDate;
         endDateElement.value = transformDateInDDMMYYYY(endDate);
      }

      const days = getDaysDifference(startDate, endDate);

      totalHoursAccElement.value = (days + 1) * 8;
   }

   totalHoursAccElement.setAttribute("disabled", "");

   sendBtnElement.addEventListener("click", (event) => {
      event.preventDefault();

      totalHoursAccElement.removeAttribute("disabled");
   });

   startDateElement.addEventListener("change", (event) => {
      event.preventDefault();

      calcTotalHoursByPeriod(event.target.value, endDateElement.value);
   });

   endDateElement.addEventListener("change", (event) => {
      event.preventDefault();

      calcTotalHoursByPeriod(startDateElement.value, event.target.value);
   });
});
