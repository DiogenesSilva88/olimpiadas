function pesquisar() {
	// Obtém a seção HTML onde os resultados da pesquisa serão exibidos
	// pelo seu ID.
	let section = document.getElementById("resultados-pesquisa");

	let campoPesquisa = document.getElementById("campo-pesquisa").value;

	if (!campoPesquisa) {
		section.innerHTML = "<p> Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>"
		return
	}

	campoPesquisa = campoPesquisa.toLowerCase();

	
	// Inicializa uma string vazia para armazenar os resultados formatados.
	let resultados = "";
	let titulo = "";
	let descricao = "";
	let tags = "";
  
	// Itera sobre cada dado no array 'dados'.
	for (let dado of dados) {
		titulo = dado.titulo.toLowerCase()
		descricao = dado.descricao.toLowerCase()
		tags = dado.tags.toLowerCase()
		if	(titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)); {
			
		
			resultados += `
		<div class="item-resultado">
		  <h2>
			<a href="#" target="_blank"> ${dado.titulo} </a>
		  </h2>
		  <p class="descricao-meta"> ${dado.descricao} </p>
		  <a href=${dado.link} target="_blank">Saiba mais</a>
		</div>
	  `;
	  // Constrói o HTML para cada item do resultado da pesquisa,
	  // formatando o título, descrição e link com base nas propriedades
	  // do objeto 'dado'.
	  
	}

	if (!resultados) {
		resultados = "<p>Nada foi encontrado</p>"
	}
  
	// Atribui o HTML construído à propriedade innerHTML da seção,
	// substituindo o conteúdo anterior.
	section.innerHTML = resultados;
  }

};
