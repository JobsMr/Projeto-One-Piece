/*O que precisamos fazer? - Quando clicarmos no botão do personagem na lista, temos que marcar o botão como selecionado e mostrar o personagem correspondente. 
    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como selecionado.
        Passo 1 - Pegar os botões do JS para poder verificar quando o usuário clicar em cima de um deles.
        Passo 2 - Adicionar a classe "selecionado" no botão que o usuário clicou.
        Passo 3 - Verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele.

    Objetivo 2 - Quando clicar no botão do personagem mostrar as informações do personagem.
        Passo 1 - Pegar os personagens no JS para poder mostrar ou esconder ele.
        Passo 2 - Adicionar a classe "selecionado" no personagem que o usuário selecionou.
        Passo 3 - Verificarr se já existe um personagem selecionado, se sim, devemos remover a seleção dele
    
        OBJETIVO 1 - Quando clicar no botão do personagem na lista, marcar o botão como selecionado.  
        */

const botoes = document.querySelectorAll(".botao");
//OBJETIVO 1 - PASSO 1
/* 
 
OBJETIVO 1 - Passo 1 - Pegar os botões do JS para poder verificar quando o usuário clicar em cima de um deles.
querySelectorAll('.botao'): só aceita um argumento.
 
 
OBJETIVO 1 - Passo 2 
- Adicionar a classe "selecionado" no botão que o usuário clicou.
No html para deixar um botão destacado uso o nome selecionado na classe que quero destacar, então:
No JS também consigo adicionar uma classe a um elemento.
Com o Js consigo manipular um elemento HTML depois que a página já foi carregada.
Antes de adiciomar a classe, precisamos saber se o usuário já clicou no botão, então:
É preciso programar o botão do HTML com JS, para o JS saber que ele receberá a informação de quando o usuário clicar no botão. E para saber isso, usa-se o comando botoes.addEventListener().   
O comando addEventListener(), só funciona em 
um elemento e os botoes estão dentro de uma lista <ul> onde tem outros botões.
Para resolver isso, uso o método FOREACH()
  
 
 
Objetivo 2 - Quando clicar no botão do personagem mostrar as informações do personagem.
    Passo 1 - Pegar os personagens no JS para poder mostrar ou esconder ele.
*/

const personagens = document.querySelectorAll(".personagem");
/*              
- Crio uma varIável para armazenar esses personagens
- Esse comando pegará todas as DIV's que tem a classe personagem
*/


botoes.forEach((botao, indice) => { //OBJETIVO 1 - PASSO 2
    //para cada botão vou executar um  código.
    //pegará o botão através do seu indice.
    botao.addEventListener("click", () => { //OBJETIVO 1 - PASSO 2

        /*Aceita mais argumentos separado por virgulas onde está o click
        Será usado o addEventListener só no botão e não na lista toda, por isso uso botao.addEventListener
        Todos botões que forem clicados, receberão todos esses comandos.
         Todo elemento que estiver dentro desse comando, precisará ser clicado para receber o próximo comando.*/


        //OBJETIVO 1: - PASSO 3 - Verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        //Para fazer isso é preciso pegar o elemento com essa classe selecionado do HTML. O MÉTODO que faz isso é o QUERY SELECTOR
        /*Para fazer isso, crio uma variavel: 
            CONST de nome BOTAOSELECIONADO que RECEBE o
            DOCUMENT que pega o botão que já está selelcionado
            PONTO QUERYSELECTOR(.BOTAO.SELECIONADO)
            QUERYSELECTOR: busca o seletor do HTML que tem essas classes juntas. Então sempre que um botão for  clicado ele será selecionado e ess variavel armazenará esse botão que foi selelcionado.
            Como já foi amazenado o botão que foi selecionado, agora é só tirar a classe desse botão que está selelcionado.                       
        */

        //OBJETIVO 1: - PASSO 3
        botaoSelecionado.classList.remove("selecionado");
        /*Para remover o botão selecionado, uso a variavel criada botaoSelecionado. 
        CLASSlIST:  queé a lista de classe desse elemento
        .REMOVE: que é para remover a classe selecionado.
        (SELECIONADO): é a classe que será removida do elemento.
        Por esse motivo o Passo 3 vem antes do passo 2
        Porque primeiro se identifica que identifica qual é o botão que está selelcionado e depois remove esse selecionado.
        Após isso nenhum botão terá a classe selecionado
        E um botão só terá novamente o botão selecionado, quando algum desses botões for clicado, que é o evento do passo 2.
              
    
 
OBJETIVO 1 - PASSO 2 */
        botao.classList.add("selecionado");
        //Esse comando adiciona uma classe nova a esse botão.
        //Então toda vez que eu clicar em um botão, esse botão terá a mesma configuração da classe SELECIONADO.
        //Esse comando pega uma lista de classes desse botão, pega todas as classes desse botão.
        //Esse comando adiciona uma classe do HTML (essa classe precisa existir no HTML), a todos os botões.
        //essa é a classe do botão clicado pelo usuário.
        //Quando o botão é clicado, essa classe é adicionada ao botão que foi clicado no HTML.


        /* OBJETIVO 2 - Passo 3 - Verificarr se já existe um personagem selecionado,     se sim, devemos remover a seleção dele*/
        const personagemSelecionado = document.querySelector(".personagem.selecionado");

        personagemSelecionado.classList.remove("selecionado");
        //remove a classe selecionado do personagem clicado anterior e coloca no personagem atual.


        // OBJETIVO 2 - Passo 2   
        personagens[indice].classList.add("selecionado");
        /*        
        - Adicionar a classe "selecionado" no personagem que o usuário selecionou
        - No caso do botão consigo saber extamente qual botão foi clicado e consegue-se adicionar a classe naquele botão, porém agora não tem como saber qual personagem foi clicado, porque foi clicado  no botão e não na DIV PERSONAGEM. 
        - Então como criar uma referencia do botão para o personagem?
        - Para isso usa-se um VETOR ou ARRAY e no FORECHEA coloco a pala    vra indice, isso vai fazer ele pegar o indice do personagem quando o botão for clicado.
        - Atavés desse indice consigo saber quem é o personagem que foi clicado.
                
        */
    });
});

