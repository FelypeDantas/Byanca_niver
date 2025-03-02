function atualizarIdade() {
    const dataNascimento = new Date("11/28/2003");  // Defina sua data de nascimento aqui
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();

    // Verificar se o aniversário já passou neste ano
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
    if (mesAtual < dataNascimento.getMonth() || (mesAtual === dataNascimento.getMonth() && diaAtual < dataNascimento.getDate())) {
        idade++;
    }

    // Atualizar o texto da idade
    document.getElementById("idade").textContent = `${idade} aninhos!`;
}

// Atualiza a idade ao carregar a página
window.onload = atualizarIdade;