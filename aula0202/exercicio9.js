let aplicar_cupom(preco, cupom);
    descontos = {
        "BRONZE": 0.05,
        "PRATA": 0.10,
        "OURO": 0.15
    }
    
    desconto = descontos.get(cupom.upper(), 0)  
    preco_final = preco * (1 - desconto)
    return preco_final

preco = 200
cupom = "OURO"
console.log("Preço com desconto: R${aplicar_cupom(preco, cupom):.2f}")
