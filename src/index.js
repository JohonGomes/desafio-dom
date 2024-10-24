// Selecionando elementos do DOM
const form = document.getElementById('calculadoraConta');
const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const btnFechar = document.getElementById('button-fechar');
const btnFecharModal2 = document.getElementById('bt-fechar-modal2');
const btnFecharModal3 = document.getElementById('bt-fechar-modal3');
const btnSim = document.getElementById('button-sim');
const btnNao = document.getElementById('button-nao');

// Variáveis globais para armazenar os valores
let valorConta = 0;
let taxaServico = '';
let qtdPagantes = 0;

// Função para calcular a taxa de serviço (10%)
function calcularTaxaServico(valor) {
    return valor * 0.1;
}

// Função para calcular o desconto (10%)
function calcularDesconto(valor) {
    return valor * 0.1;
}

// Função para formatar valores em reais
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    valorConta = parseFloat(document.getElementById('valorDaConta').value);
    taxaServico = document.getElementById('taxaServico').value;
    qtdPagantes = parseInt(document.getElementById('qtdPagantes').value);
    
    if (valorConta && taxaServico && qtdPagantes) {
        modal.showModal();
    }
});

btnFechar.addEventListener('click', () => modal.close());
btnFecharModal2.addEventListener('click', () => modal2.close());
btnFecharModal3.addEventListener('click', () => modal3.close());

btnSim.addEventListener('click', function() {
    modal.close();
    const desconto = calcularDesconto(valorConta);
    const valorComDesconto = valorConta - desconto;
    let taxaServicoValor = 0;
    
    if (taxaServico === 'sim') {
        taxaServicoValor = calcularTaxaServico(valorComDesconto);
    }
    
    const totalPagar = valorComDesconto + taxaServicoValor;
    const valorPorPessoa = totalPagar / qtdPagantes;
    
    // Atualizando o modal2 com os valores calculados
    const modal2Content = modal2.querySelectorAll('p');
    modal2Content[0].textContent = `Total de Consumo R$: ${formatarMoeda(valorConta)}`;
    modal2Content[1].textContent = `Valor de Desconto: ${formatarMoeda(desconto)}`;
    modal2Content[2].textContent = `Taxa de Serviço R$: ${formatarMoeda(taxaServicoValor)}`;
    modal2Content[3].textContent = `Total a pagar R$: ${formatarMoeda(totalPagar)}`;
    modal2Content[4].textContent = `Total por Pessoa R$: ${formatarMoeda(valorPorPessoa)}`;
    
    modal2.showModal();
});

btnNao.addEventListener('click', function() {
    modal.close();
    let taxaServicoValor = 0;
    
    if (taxaServico === 'sim') {
        taxaServicoValor = calcularTaxaServico(valorConta);
    }
    
    const totalPagar = valorConta + taxaServicoValor;
    const valorPorPessoa = totalPagar / qtdPagantes;
    
    // Atualizando o modal3 com os valores calculados
    const modal3Content = modal3.querySelectorAll('p');
    modal3Content[0].textContent = `Total de Consumo R$: ${formatarMoeda(valorConta)}`;
    modal3Content[1].textContent = `Taxa de Serviço R$: ${formatarMoeda(taxaServicoValor)}`;
    modal3Content[2].textContent = `Total a pagar R$: ${formatarMoeda(totalPagar)}`;
    modal3Content[3].textContent = `Total por Pessoa R$: ${formatarMoeda(valorPorPessoa)}`;
    
    modal3.showModal();
});

// Limpar formulário após fechar qualquer modal
btnFecharModal2.addEventListener('click', () => {
    form.reset();
});

btnFecharModal3.addEventListener('click', () => {
    form.reset();
});