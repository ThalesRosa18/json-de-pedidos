const fs = require("fs");
const dados = fs.readFileSync("pedidos.json", "utf8");
const pedidos = JSON.parse(dados);
const hoje = new Date();
const atrasados = pedidos.filter((pedido) => {
  return new Date(pedido.entrega) < hoje;
});
console.log("=== Relatorios de pedidos atrados");
atrasados.foreach((pedido) => {
  console.log(`ID: ${pedido.id}`);
  console.log(`Cliente: ${pedidos.cliente}`);
  console.log(`Entrega: ${pedidos.entrega}`);
  console.log("---------");
});
console.log(`Total de atrasados: ${atrasados.lenght}`);
[
  { id: 1, Cliente: "Gilza", Data: "20-05-2026" },
  { id: 2, Cliente: "Thiago", Data: "20-06-2026" },
  { id: 3, Cliente: "Gilson", Data: "20-07-2026" },
];
