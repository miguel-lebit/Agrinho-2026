// ===== SISTEMA DE ACESSIBILIDADE =====

// Controle do menu de acessibilidade
const btnAcessibilidade = document.getElementById('btnAcessibilidade');
const menuAcessibilidade = document.getElementById('menuAcessibilidade');

// Abrir/fechar menu de acessibilidade
btnAcessibilidade.addEventListener('click', () => {
    if (menuAcessibilidade.style.display === 'none' || menuAcessibilidade.style.display === '') {
        menuAcessibilidade.style.display = 'block';
    } else {
        menuAcessibilidade.style.display = 'none';
    }
});

// Fechar menu se clicar fora
document.addEventListener('click', (event) => {
    if (!botaoAcessibilidade.contains(event.target)) {
        menuAcessibilidade.style.display = 'none';
    }
});

// === Função para controlar tamanho da fonte ===
let tamanhoFonteAtual = 16; // tamanho padrão em px

function aplicarTamanhoFonte(tamanho) {
    document.body.style.fontSize = tamanho + 'px';
    tamanhoFonteAtual = tamanho;
}

// Botão aumentar fonte
document.getElementById('aumentarFonte').addEventListener('click', () => {
    if (tamanhoFonteAtual < 22) {
        aplicarTamanhoFonte(tamanhoFonteAtual + 2);
    } else {
        alert('A fonte já está no tamanho máximo!');
    }
});

// Botão diminuir fonte
document.getElementById('diminuirFonte').addEventListener('click', () => {
    if (tamanhoFonteAtual > 12) {
        aplicarTamanhoFonte(tamanhoFonteAtual - 2);
    } else {
        alert('A fonte já está no tamanho mínimo!');
    }
});

// === Função para alto contraste ===
let contrasteAtivo = false;

document.getElementById('altoContraste').addEventListener('click', () => {
    if (!contrasteAtivo) {
        document.body.classList.add('alto-contraste');
        contrasteAtivo = true;
    } else {
        document.body.classList.remove('alto-contraste');
        contrasteAtivo = false;
    }
});

// ===== FUNCIONALIDADE PRINCIPAL: GERADOR DE DICAS SUSTENTÁVEIS =====

// Base de dados com as dicas para cada categoria
const dicasData = {
    agua: {
        titulo: "💧 Dicas para economizar água",
        texto: "A água é essencial para a agricultura e para a vida. Pequenas atitudes no dia a dia fazem toda a diferença!",
        lista: [
            "Reutilize a água da lavagem de alimentos para regar plantas",
            "Instale sistemas de captação de água da chuva",
            "Use irrigação por gotejamento na agricultura (economiza até 60% de água)",
            "Conserte vazamentos rapidamente",
            "Não lave calçadas com mangueira - use vassoura"
        ],
        videoUrl: "https://www.youtube.com/embed/KVuZ-0V8qBE", // Vídeo sobre economia de água
        tabela: [
            { acao: "Fechar torneira ao escovar os dentes", economia: "12 litros por minuto" },
            { acao: "Banho de 5 minutos (em vez de 15)", economia: "60 litros por banho" },
            { acao: "Irrigação por gotejamento", economia: "60% de água na lavoura" },
            { acao: "Reúso da água da chuva", economia: "Até 50% da conta" }
        ],
        grafico: [
            { item: "Torneira aberta 10min", valor: 120 },
            { item: "Gotejamento na planta", valor: 48 },
            { item: "Chuva captada/mês", valor: 500 },
            { item: "Banho longo 15min", valor: 135 }
        ]
    },
    desmatamento: {
        titulo: "🌳 Como combater o desmatamento",
        texto: "O desmatamento é uma das maiores ameaças ao nosso planeta. Você pode ajudar com essas ações:",
        lista: [
            "Plante árvores nativas da sua região",
            "Compre produtos com certificação de origem sustentável",
            "Denuncie queimadas e desmatamento ilegal (Disque 0800 61 8080)",
            "Prefira alimentos orgânicos (não incentivam desmatamento)",
            "Reduza o consumo de carne (pecuária causa desmatamento)"
        ],
        videoUrl: "https://www.youtube.com/embed/8GJxRf0dVf4", // Vídeo sobre desmatamento
        tabela: [
            { acao: "Plantações ilegais", impacto: "Alto desmatamento" },
            { acao: "Agricultura sustentável", impacto: "Baixo desmatamento" },
            { acao: "Pecuária extensiva", impacto: "Muito alto" },
            { acao: "Reflorestamento", impacto: "Positivo (+ árvores)" }
        ],
        grafico: [
            { item: "Desmatamento 2010", valor: 7000 },
            { item: "Desmatamento 2015", valor: 6200 },
            { item: "Desmatamento 2020", valor: 8500 },
            { item: "Desmatamento 2023", valor: 9000 }
        ]
    },
    reciclagem: {
        titulo: "♻️ Dicas de reciclagem e redução de lixo",
        texto: "Reciclar reduz a necessidade de desmatar para novas plantações e extrações. Veja como:",
        lista: [
            "Separe o lixo orgânico do reciclável",
            "Lave as embalagens antes de reciclar",
            "Compre produtos com embalagens retornáveis",
            "Faça compostagem com restos de comida",
            "Evite plásticos descartáveis"
        ],
        videoUrl: "https://www.youtube.com/embed/7V7k1Qq6wBs", // Vídeo sobre reciclagem
        tabela: [
            { acao: "Reciclar 1 tonelada de papel", impacto: "Salva 20 árvores" },
            { acao: "Reciclar alumínio", impacto: "Economiza 95% de energia" },
            { acao: "Compostagem", impacto: "Reduz lixo em 50%" },
            { acao: "Plástico reciclado", impacto: "Menos petróleo usado" }
        ],
        grafico: [
            { item: "Papel reciclado", valor: 45 },
            { item: "Plástico reciclado", valor: 25 },
            { item: "Vidro reciclado", valor: 60 },
            { item: "Metal reciclado", valor: 70 }
        ]
    },
    solo: {
        titulo: "🌱 Cuidando do solo (agricultura sustentável)",
        texto: "Um solo saudável significa plantas saudáveis e menos necessidade de desmatar novas áreas:",
        lista: [
            "Faça rotação de culturas para não esgotar o solo",
            "Use adubo orgânico (compostagem)",
            "Evite queimadas - elas destroem a vida do solo",
            "Plante árvores ao redor das lavouras (quebra-vento)",
            "Use cobertura morta para proteger o solo"
        ],
        videoUrl: "https://www.youtube.com/embed/hKqWJcZqKGY", // Vídeo sobre solo sustentável
        tabela: [
            { acao: "Rotação de culturas", beneficio: "Solo mais fértil" },
            { acao: "Adubo orgânico", beneficio: "Sem agrotóxicos" },
            { acao: "Plantio direto", beneficio: "Menos erosão" },
            { acao: "Cobertura morta", beneficio: "Retém umidade" }
        ],
        grafico: [
            { item: "Solo saudável", valor: 85 },
            { item: "Solo degradado", valor: 30 },
            { item: "Com compostagem", valor: 90 },
            { item: "Com queimadas", valor: 20 }
        ]
    }
};

// Função para gerar o conteúdo HTML das dicas
function gerarConteudoDicas(categoria) {
    const dados = dicasData[categoria];
    if (!dados) return '<p>Erro: categoria não encontrada</p>';
    
    // Gerar lista de dicas
    let listaHtml = '<ul>';
    dados.lista.forEach(item => {
        listaHtml += `<li>${item}</li>`;
    });
    listaHtml += '</ul>';
    
    // Gerar tabela
    let tabelaHtml = `
        <table class="tabela-dicas">
            <thead>
                <tr><th>Ação / Prática</th><th>Impacto / Benefício</th></tr>
            </thead>
            <tbody>
    `;
    dados.tabela.forEach(item => {
        tabelaHtml += `<tr><td>${item.acao}</td><td>${item.impacto || item.beneficio}</td></tr>`;
    });
    tabelaHtml += '</tbody></table>';
    
    // Gerar gráfico de barras simples
    let graficoHtml = '<div class="grafico-barras-dicas"><h4>📊 Dados comparativos</h4>';
    const maxValor = Math.max(...dados.grafico.map(g => g.valor));
    dados.grafico.forEach(item => {
        const porcentagem = (item.valor / maxValor) * 100;
        graficoHtml += `
            <div class="barra-container">
                <span>${item.item}</span>
                <div class="barra">
                    <div class="barra-preenchimento" style="width: ${porcentagem}%">${item.valor}</div>
                </div>
            </div>
        `;
    });
    graficoHtml += '</div>';
    
    // Montar HTML completo
    const htmlCompleto = `
        <h3>${dados.titulo}</h3>
        <div class="dica-texto">
            <p>${dados.texto}</p>
            ${listaHtml}
        </div>
        
        <div class="dica-video">
            <iframe 
                src="${dados.videoUrl}" 
                title="Vídeo sobre ${dados.titulo}"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        
        <h4>📋 Tabela comparativa</h4>
        ${tabelaHtml}
        
        ${graficoHtml}
        
        <p style="margin-top: 20px; font-style: italic;">✨ Pequenas atitudes mudam o mundo! Compartilhe essas dicas.</p>
    `;
    
    return htmlCompleto;
}

// Adicionar evento de clique em todos os botões de categoria
const botoesCategoria = document.querySelectorAll('.btn-categoria');
const conteudoDicasDiv = document.getElementById('conteudoDicas');

botoesCategoria.forEach(botao => {
    botao.addEventListener('click', () => {
        const categoria = botao.getAttribute('data-categoria');
        const novoConteudo = gerarConteudoDicas(categoria);
        conteudoDicasDiv.innerHTML = novoConteudo;
        
        // Rolar suavemente até a área de conteúdo
        conteudoDicasDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ===== MENSAGEM DE BOAS-VINDAS NO CONSOLE (para desenvolvedores) =====
console.log('🛡️ Shield of the World - Site carregado com sucesso!');
console.log('🌿 Ajude a combater o desmatamento com pequenas atitudes.');
