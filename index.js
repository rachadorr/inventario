let km_rodados_por_litro
let preco_medio
let distancia_viagem
let preco_viagem_total

preco_medio = 5.94
km_rodados_por_litro = 34
distancia_viagem = 70

preco_viagem_total = (distancia_viagem / km_rodados_por_litro)*preco_medio

window.alert(`O gasto total da viagem é ${preco_viagem_total}`);

