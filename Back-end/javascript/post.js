

    document.querySelector("#add").addEventListener("click",()=>{
        fetch("http://localhost:3000/produtos/novo",{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },            
            body: JSON.stringify({
                "desc" : document.querySelector("#descricao").value,
                "preco": document.querySelector("#precoo").value,
                "qtd": document.querySelector("#quatidade").value,
                "categoria": document.querySelector("#cate").value,
            })
            }).then((resposta)=>{
                if(resposta.status != 200){
                    console.log(resposta.json())
                }
                else{
                location.reload();
                }
        })
    })