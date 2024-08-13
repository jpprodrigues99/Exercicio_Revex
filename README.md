# Exercício labseq

Este projeto consiste na implementação de um serviço REST utilizando uma framework do Java (sugerido o Quarkus), que retorna valores da sequência labseq. 
Além disso, opcionalmente, foi implementada uma interface web simples em Angular para invocar esse serviço.

O serviço deve expor um endpoint na forma <baseurl>/labseq/{n}, onde {n} representa o índice do valor único da sequência a retornar. 
O índice pode ser qualquer número inteiro não negativo.

Foi necessário implementar um mecanismo de cache para aproveitar cálculos anteriores e acelerar futuros cálculos. 
Esse cache é utilizado nos cálculos intermediários do algoritmo, não apenas nas invocações do endpoint.

* a pasta exercicio_withus é referente ao exercicio labseq na framework quarkus.
* a pasta labseq-gui é referente ao exercício opcional de Angular.
