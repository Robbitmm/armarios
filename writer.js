function Writing(){
    let count = 0;
    
    for(var a in G){
        console.log("Armário " + G[count].numero);

        for(c in G[count].itens){
            console.log(G[count].itens[c]);
            it = G[count].itens[c];

	    p = document.createElement('p');
            p.innerHTML += it
        }
        count ++;
    }
}

function Writting2(){
    for(let a = 0; a < armarios.length; a++){
        const newH1 = document.createElement('h1'),
              oldDiv = document.querySelector("div");

        let armariosN = armarios[a];

        oldDiv.append(newH1);
        newH1.innerHTML = "Armário " + armariosN.numero;

        for(let p = 0; p < armariosN.prateleira.length; p++){
            const Ul = document.createElement('ul'),
                  Li = document.createElement('li');

            let prateleiraN = armariosN.prateleira[p];

            Li.classList.add('prateleira');

            oldDiv.append(Ul);
            Ul.append(Li);

            Li.innerHTML = "Prateleira " + prateleiraN;

            for(i = 0; i < armariosN.itens.length; i++){
                let item = armariosN.itens[i];

                for(v = 0; v < item.length; v++){
                    const Ul2 = document.createElement('ul'),
                          Li2 = document.createElement('li');
    
                    Li.append(Ul2);
                    Ul2.append(Li2);
    
                    Li2.innerHTML = item[v];
                }
            }
        }
    }
}