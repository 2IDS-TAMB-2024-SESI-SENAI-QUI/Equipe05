const cadeias = [
    { imagem: "images/but.png", resposta: "butano" },
    { imagem: "images/pent.png", resposta: "pentano" },
    { imagem: "images/hex.png", resposta: "hexano" },
    {imagem: "images/w2.png", resposta: "benzeno"},
    {imagem: "images/butt.png", resposta: "buteno"},
    {imagem: "images/pentt.png", resposta: "pent-2,4-dieno"},
    {imagem: "images/hexx.png", resposta: "hex-1,3-dieno"},
    // Adicione mais cadeias carbônicas conforme necessário
];

let indiceAtual = 0;

const imagemElement = document.getElementById("cadeiaImagem");
const respostaInput = document.getElementById("respostaAluno");
const botaoEnviar = document.getElementById("btnEnviar");

botaoEnviar.addEventListener('click', () => {
    const respostaAluno = respostaInput.value.trim().toLowerCase();

    if (respostaAluno === cadeias[indiceAtual].resposta) {
        alert("Resposta correta! Ótimo trabalho!");
        indiceAtual++;
        
        if (indiceAtual < cadeias.length) {
            imagemElement.src = cadeias[indiceAtual].imagem;
            respostaInput.value = "";
        } else {
            alert("Você completou todas as cadeias!");
            // Resetar para o início, se desejar:
            indiceAtual = 0;
            imagemElement.src = cadeias[indiceAtual].imagem;
            respostaInput.value = "";

        }
    } else {
        alert("Resposta incorreta. Tente novamente.");
    }
}
);
