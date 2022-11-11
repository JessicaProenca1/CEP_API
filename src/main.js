import './style.css'

const input = document.getElementById('input');
const btn = document.getElementById('btn');
const cep = document.getElementById('cep');
const rua = document.getElementById('rua');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');

btn.addEventListener('click', async (event) => {
  event.preventDefault();
  const textoInput = input.value;
  const url = `http://viacep.com.br/ws/${textoInput}/json/`
  const response = await fetch(url);
  const data = await response.json();
  rua.innerHTML = data.logradouro;
  cep.innerHTML = data.cep;
  bairro.innerHTML = data.bairro;
  cidade.innerHTML = data.localidade;
})