const containerVideos = document.querySelector('.videos__container');

async function buscarEMostrarVideos(){
    try{
        const buscaApi = await fetch('http://localhost:3000/videos');
        const videos = await buscaApi.json();
            videos.forEach((video)=> {
                if(video.categoria == ""){
                    throw new Error('vídeo não tem categoria');
                };
                containerVideos.innerHTML += `
                <li class="videos__item">
                    <iframe src="${video.url}" title"${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                        <img class="img-canal" src="${video.imagem} alt="Logo do Canal">
                        <h3 class="titulo-video">${video.titulo}</h3>
                        <p class="titulo-canal">${video.decricao}</p>
                    </div>
                </li>
                `;
            });
    } catch(error){
        containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error} </p>`;
    } finally{
        console.log('Tentativa de carregar vídeos finalizada.');
    }
}

buscarEMostrarVideos();