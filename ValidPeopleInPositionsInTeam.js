const fetchConfig = {
  headers:
  {
    Authorization: 'Bearer '
  }
};

async function getRequesterTeamCode(teamName) {
  const fetchData = await fetch('https://netbiis.zeev.it/api/2/teams', fetchConfig);

  const teams = await fetchData.json();

  const requesterTeam = teams.find((team) => {
    if (team.name === teamName) return true;
    else return false;
  });

  return requesterTeam.code;
}

async function validPeopleInPositionsByTeam(teamName) {
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

  const requesterTeamCode = await getRequesterTeamCode(teamName);

  for (const position of positions) {
    const fetchData = await fetch(`https://netbiis.zeev.it/api/2/teams/code/${requesterTeamCode}/${position.code}/users`, fetchConfig);

    const users = await fetchData.json();

    document.getElementById(position.formId).value = users.length == 0 ? "False" : "True";
  }
}

const teamName = document.getElementById('inptime').value

await validPeopleInPositionsByTeam(teamName);
