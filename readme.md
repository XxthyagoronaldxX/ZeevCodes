<h1> ZeevCodes </h1>

<p text-align="justify"> Os códigos do Zeev são códigos javascript responsáveis por realizar alguma manipulação do formulário, tanto sua interface quanto seus valores em si, muitos dós códigos afetam diretamente nos seus valores, e esse comportamento é uma necessidade de muitos processos, como ainda vamos ver a seguir. </p>

<h2>Map: Códigos com Processos</h2>
<h3>1 - GeneratingCheckboxFromForm</h3>

<p>Função responsável por gerar checkBox dinâmico de acordo com as seleções realizadas no formulário do zeev:</p>
<img src="https://github.com/XxthyagoronaldxX/ZeevCodes/assets/16446463/fe0c1910-9ec8-4317-a526-ffcdebad4fa1" alt="Zeev Form" />
<h6>Esse formulário é preenchido no processo [RECRUTAMENTO_pt3_Admissão de um Novo Colaborador], no componente T01.</h6>
<p>Os checkbox gerados estão localizados no processo [RECRUTAMENTO_pt4_Emissão de Contrato de Trabalho], no componente T06. A função é
efetivamente executada neste mesmo processo e no componente T01.</p>

<h3>2 - HoursDiffCalc</h3>
  
<p>Função responsável por calcular a diferença entre dois campos de horários no Zeev. Essa função é utilizada no processo [Solicitação de Horas Extras], 
no componente T01. Essa função tira a diferença entre o campo de Hora Inicial e Hora Final, e preenche automaticamente no campo de Horas Extras, além disso 
a função altera o comportamento do botão concluir, onde o botão só estara ativo quando for passado uma Hora Inicial e Final válidas.</p>
<img src="https://github.com/XxthyagoronaldxX/ZeevCodes/assets/16446463/79f691b8-951b-4793-a23f-9fa69ca0447a"/>

<h3>3 - ShowDocumentsByContract</h3>

<p>Função responsável por escolher um determinado conjunto de documentos para realizar o processo de admissão de acordo com a modalidade de contratamento:</p>
<img src="https://github.com/XxthyagoronaldxX/ZeevCodes/assets/16446463/6c199fe6-b278-4752-8664-e7829435a948"/>
<h6>Esse formulário é preenchido no processo [RECRUTAMENTO_pt4_Emissão de Contrato de Trabalho], no componente T01.</h6>
<img src="https://github.com/XxthyagoronaldxX/ZeevCodes/assets/16446463/6d6c86cf-a633-4bac-981b-6cf536b661cb"/>
<h6>Esse formulário está localizado no processo [RECRUTAMENTO_pt4_Emissão de Contrato de Trabalho], no componente T02.</h6>

<h3>4 - ValidPeopleInPositionInTeam</h3>

