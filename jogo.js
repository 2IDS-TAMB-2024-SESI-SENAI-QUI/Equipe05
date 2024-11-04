let indiceAtual = 0; // Mova `indiceAtual` para fora da função

function verificarResposta() {
    const cadeias = [
        { imagem: "images/but.png", resposta: "butano" },
        { imagem: "images/pent.png", resposta: "pentano" },
        { imagem: "images/hex.png", resposta: "hexano" },
        { imagem: "images/w2.png", resposta: "benzeno" },
        { imagem: "images/butt.png", resposta: "buteno" },
        { imagem: "images/pentt.png", resposta: "pent-1,3-dieno" },
        { imagem: "images/hexx.png", resposta: "hex-1,3-dieno" },
        // Adicione mais cadeias carbônicas conforme necessário
    ];

    const imagemElement = document.getElementById("cadeiaImagem");
    const respostaInput = document.getElementById("resposta");
    const resultado = document.getElementById("resultado"); // Certifique-se de ter um elemento com este ID

    const resposta = respostaInput.value.trim().toLowerCase();

    if (resposta === cadeias[indiceAtual].resposta) {
        resultado.innerText = "Correto! Você adivinhou a cadeia carbônica!";
        indiceAtual++;
        
        if (indiceAtual < cadeias.length) {
            imagemElement.src = cadeias[indiceAtual].imagem;
        } else {
            resultado.innerText = "Você completou todas as cadeias!";
            // Reiniciar o jogo, se desejar
            indiceAtual = 0;
            imagemElement.src = cadeias[indiceAtual].imagem;
        }
    } else {
        resultado.innerText = "Você errou! Tente novamente";
        // Não atualiza a imagem se errar
    }

    respostaInput.value = "";
    
    // Reiniciar o jogo após 2 segundos (opcional)
    // setTimeout(reiniciarJogo, 2000);
}

// Adicione um evento de clique ao botão enviar
const botaoEnviar = document.getElementById("btnEnviar");
botaoEnviar.addEventListener('click', verificarResposta);
