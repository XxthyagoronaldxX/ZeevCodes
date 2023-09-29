function dateFromDaysAfterNow(days) {
  const dateStart = document.getElementById('inpinicioDaSolicitacao');
  const [day, month, year] = dateStart.value.split("/");
  const dateNow = new Date(+year, +month - 1, +day);
  dateNow.setDate(dateNow.getDate() + days);
  return dateNow;
}

const prazoParaCandidaturasElement = document.getElementById('inpdeterminarPrazoParaCandidaturas');

prazoParaCandidaturasElement.value = dateFromDaysAfterNow(15).toLocaleDateString("en-GB");
