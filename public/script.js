const catalogo = [
    {
        id: 1,
        titulo: "A Empregada",
        tipo: "filme",
        ano: 2026,
        generos: ["mistério", "suspense"],
        nota: 9.3,
        assistido: true
    },
    {
        id: 2,
        titulo: "The Walking Dead",
        tipo: "serie",
        ano: 2010,
        generos: ["terror", "suspense"],
        nota: 8.5,
        assistido: true
    },
    {
        id: 3,
        titulo: "Michael",
        tipo: "filme",
        ano: 2026,
        generos: ["drama", "história"], 
        nota: 9.4,
        assistido: false
    },
    {
        id: 4,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["ficção científica", "fantasia", "suspense"],
        nota: 8.7,
        assistido: true
    },
    {
        id: 5,
        titulo: "O Diabo Veste Prada",
        tipo: "filme",
        ano: 2006,
        generos: ["comédia", "drama"],
        nota: 7.3,
        assistido: false
    },
    {
        id: 6,
        titulo: "Bem-Vindos à Vizinhança",
        tipo: "serie",
        ano: 2022,
        generos: ["terror"],
        nota: 8.8,
        assistido: true
    }
];

console.log("=== B.2. Estrutura do Catálogo ===");
console.log(catalogo);

console.log("=== B.2. Acesso Direto ===");
console.log(`Título do primeiro item: ${catalogo[0].titulo}`);

const ultimoIndice = catalogo.length - 1;
console.log(`Ano do último item: ${catalogo[ultimoIndice].ano}`);

const terceiroItem = catalogo[2];
if (terceiroItem.generos.length > 1) {
    console.log(`Segundo gênero do terceiro item: ${terceiroItem.generos[1]}`);
} else {
    console.log(`Mensagem amigável: O item "${terceiroItem.titulo}" possui apenas um gênero listado (${terceiroItem.generos[0]}).`);
}

console.log("\n=== B.3.A. Listagem com forEach ===");
catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

console.log("\n=== B.3.B. Transformação com map ===");
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log(titulosEmCaixaAlta);

console.log("\n=== B.3.C. Seleção com filter ===");
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log(`Existem ${naoAssistidos.length} itens não assistidos no catálogo.`);

console.log("\n=== B.3.D. Busca com find ===");
const notaExcelente = catalogo.find(item => item.nota >= 9);
if (notaExcelente) {
    console.log(`Item com nota excelente encontrado: ${notaExcelente.titulo} (Nota: ${notaExcelente.nota})`);
} else {
    console.log("Nenhum item com nota igual ou superior a 9 foi encontrado.");
}

console.log("\n=== B.3.E. Agregação com reduce ===");
const somaGeral = catalogo.reduce((acumulador, item) => acumulador + item.nota, 0);
const mediaGeral = somaGeral / catalogo.length;
console.log(`Média das notas de todo o catálogo: ${mediaGeral.toFixed(2)}`);

const assistidos = catalogo.filter(item => item.assistido === true);
const somaAssistidos = assistidos.reduce((acumulador, item) => acumulador + item.nota, 0);
const mediaAssistidos = assistidos.length > 0 ? (somaAssistidos / assistidos.length) : 0;
console.log(`Média das notas dos itens assistidos: ${mediaAssistidos.toFixed(2)}`);

console.log("\n=== B.3.F. Checagens com some e every ===");
const temAntigo = catalogo.some(item => item.ano < 2000);
console.log(`Existe algum item com ano anterior a 2000? ${temAntigo ? "Sim" : "Não"}`);

const todosTemGenero = catalogo.every(item => item.generos && item.generos.length >= 1);
console.log(`Todos os itens têm pelo menos 1 gênero? ${todosTemGenero ? "Sim" : "Não"}`);


const totalItens = catalogo.length;
const qtdFilmes = catalogo.filter(item => item.tipo === "filme").length;
const qtdSeries = catalogo.filter(item => item.tipo === "serie").length;

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

let rankingHTML = "<ul>";
ranking.forEach((item, index) => {
    rankingHTML += `<li>${index + 1}º lugar: <strong>${item.titulo}</strong> (Nota: ${item.nota})</li>`;
});
rankingHTML += "</ul>";

const outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
    <p><strong>Total de itens no catálogo:</strong> ${totalItens}</p>
    <p><strong>Composição:</strong> ${qtdFilmes} filmes e ${qtdSeries} séries</p>
    <p><strong>Na fila (Não assistidos):</strong> ${naoAssistidos.length} itens</p>
    <p><strong>Média geral das notas:</strong> ${mediaGeral.toFixed(2)}</p>
    <hr>
    <h3>Top 3 - Maiores Notas:</h3>
    ${rankingHTML}
`;