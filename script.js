const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => menu.classList.toggle('ativo'));
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('ativo'));
  });
}

// Organizador educativo do ciclo menstrual
const calcularCiclo = document.getElementById('calcularCiclo');
if (calcularCiclo) {
  calcularCiclo.addEventListener('click', () => {
    const dataInput = document.getElementById('ultimaMenstruacao');
    const duracaoInput = document.getElementById('duracaoCiclo');
    const resultado = document.getElementById('resultadoCiclo');
    const duracao = Number(duracaoInput.value);

    if (!dataInput.value || !duracao || duracao < 15 || duracao > 60) {
      resultado.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i><div><b>Confira os dados informados</b><span>Escolha uma data e informe uma duração entre 15 e 60 dias.</span></div>';
      return;
    }

    const partes = dataInput.value.split('-').map(Number);
    const data = new Date(partes[0], partes[1] - 1, partes[2]);
    data.setDate(data.getDate() + duracao);
    const formatada = new Intl.DateTimeFormat('pt-BR', { day:'2-digit', month:'long', year:'numeric' }).format(data);

    resultado.innerHTML = `<i class="fa-regular fa-calendar-check"></i><div><b>Próximo início estimado: ${formatada}</b><span>Estimativa baseada em um ciclo médio de ${duracao} dias.</span></div>`;
  });
}

// FAQ em formato sanfona
 document.querySelectorAll('.faq-item').forEach((botao) => {
  botao.addEventListener('click', () => {
    const resposta = botao.nextElementSibling;
    botao.classList.toggle('aberto');
    resposta.classList.toggle('aberta');
  });
});

// Compartilhamento do projeto
const compartilharSite = document.getElementById('compartilharSite');
if (compartilharSite) {
  compartilharSite.addEventListener('click', async () => {
    const dados = {
      title: 'Dignidade Feminina',
      text: 'Conheça o projeto Dignidade Feminina sobre pobreza menstrual, direitos e sensibilização social.',
      url: window.location.origin + window.location.pathname.replace('materiais.html', '')
    };
    try {
      if (navigator.share) {
        await navigator.share(dados);
      } else {
        await navigator.clipboard.writeText(dados.url);
        compartilharSite.innerHTML = '<i class="fa-solid fa-check"></i> Link copiado';
        setTimeout(() => compartilharSite.innerHTML = '<i class="fa-solid fa-share-nodes"></i> Compartilhar site', 1800);
      }
    } catch (_) {}
  });
}
