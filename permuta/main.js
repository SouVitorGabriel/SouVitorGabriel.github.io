var teste = [1, 2, 3];

var div = document.getElementById("div");

function calcular()
{
    div.innerHTML = "";
    var number = document.getElementById("valor").value;
    alert(number);
    var strg = number.split('');
    ListarPermutacoes(strg);
}

function ListarPermutacoes(string)
{
    PermutaRecursiva(string, 0);
}

function PermutaRecursiva(string, k)
{
    var len = string.length;
    if (k == len)
    {
        console.log(string);

        string.forEach(function(item, index){
            div.innerHTML =  div.innerHTML + item;
        });
        div.innerHTML =  div.innerHTML + "<br>";
    }
    else
    {
        for (var i = k; i < len; i++)
        {
            string = TrocaCaractere(string, k, i);
            PermutaRecursiva(string, k + 1);
            string = TrocaCaractere(string, i, k);
        }
    }
}

function TrocaCaractere(str, p1, p2)
{
    var tmp = str[p1];
    str[p1] = str[p2];
    str[p2] = tmp;
    return str;
}