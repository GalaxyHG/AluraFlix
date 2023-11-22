// Aula 03
// var listaFilmes = [];

// listaFilmes[0] = "https://static.wixstatic.com/media/da06f2_9e0748f8e4fc45eba701ee2bd5581c11~mv2.jpg/v1/fill/w_640,h_998,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/da06f2_9e0748f8e4fc45eba701ee2bd5581c11~mv2.jpg";

// listaFilmes[1] = "https://br.web.img3.acsta.net/pictures/15/05/14/21/14/504650.jpg";

// listaFilmes[2] = "https://br.web.img2.acsta.net/pictures/16/01/18/18/57/082205.jpg";


// for (var i = 0; i < listaFilmes.length; i++)
// {
//     document.write("<img src=" + listaFilmes[i] + ">");
// }

function AdicionarFilme()
{
    var filmeFavorito = document.getElementById('filme').value;
    var elementoListaFilmes = document.getElementById('listaFilmes');
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src=' + filmeFavorito + '>';
    document.getElementById('filme').value = "";
}