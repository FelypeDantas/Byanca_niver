function atualizarIdade() {
    const dataNascimento = new Date(2003, 10, 28); // mês começa do 0 (10 = novembro)
    const hoje = new Date();

    let idade = hoje.getFullYear() - dataNascimento.getFullYear();

    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();

    const aindaNaoFezAniversario =
        mesAtual < dataNascimento.getMonth() ||
        (mesAtual === dataNascimento.getMonth() && diaAtual < dataNascimento.getDate());

    if (aindaNaoFezAniversario) {
        idade--; // 👈 aqui está a correção
    }

    document.querySelector(".celebration").textContent = `${idade} aninhos! 🎂`;
}

window.addEventListener("load", atualizarIdade);