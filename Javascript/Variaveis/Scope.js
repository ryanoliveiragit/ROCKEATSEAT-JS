/* 
Scope
 - Escopo determina a visibilidade de alguma variável no JS

 Block statement
 ```js

 Vamos iniciar um bloco
{
    Aqui dentro é um bloco e posso colocar qualquer código

} aqui é o fechamento

```*/

// var é global e, também local
// hoisting ( ELEVA A VAR PRA CIMA DO CODIGO )
    

    console.log('> existe x antes do bloco ? ', x)

    {
        var x = 0
    }

    console.log('> existe x depois do bloco? ', x)


   

// let é local
// não possui HOISTING

    console.log('> existe x antes do bloco ? ', x)

    {
        let x = 0
    }

    console.log('> existe x depois do bloco? ', x)