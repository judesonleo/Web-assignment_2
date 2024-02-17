
       const audio = document.getElementById('audio');
       const play = document.getElementById('play');
       const back = document.getElementById('back')
       const forword = document.getElementById('forword')
     
       play.addEventListener('click',()=>{
        if (audio.paused || audio.ended) {
            audio.play()
            // play.innerHTML='<i class="fa-solid fa-pause"></i>'
        } 
        else {
            audio.pause()
            
            // play.innerHTML=`<i class="fa-solid fa-play"></i>`
        }
       })

    const progress = document.getElementById('progress');
audio.addEventListener('play',()=>{
    play.innerHTML='<i class="fa-solid fa-pause"></i>'
})
audio.addEventListener('pause',()=>{
    play.innerHTML='<i class="fa-solid fa-play"></i>'
})

// audio.addEventListener('timeupdate', () => {
//     const currentTime = audio.currentTime;
//     const duration = audio.duration;
//     const progressPercentage = (currentTime / duration) * 100;
//     progress.value = progressPercentage;
// });
progress.addEventListener('input',()=>{
    const value = progress.value;
    
    const percent = (value - progress.min)/(progress.max - progress.min) * 100;
    console.log(percent);
    // progress.style.background=`linear-gradient(to right, #4CAF50 0%, #4CAF50 ${percent}%,#d3d3d3 ${percent} ,#d3d3d3 100%)`;
    progress.style.background = `linear-gradient(to right, #4CAF50 ${percent}%, #d3d3d3 ${percent}%)`;

    // const seekTime = (progress.value / 100) * audio.duration;
    // audio.currentTime = seekTime;
});
progress.addEventListener('input',()=>{
    const seekTime = (progress.value / 100) * audio.duration;
    audio.currentTime = seekTime;
})
audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progressPercentage = (currentTime / duration) * 100;
    progress.value = progressPercentage;

    const percent = (progress.value - progress.min) / (progress.max - progress.min) * 100;
    progress.style.background = `linear-gradient(to right, #4CAF50 ${percent}%, #d3d3d3 ${percent}%)`;
});


// progress.addEventListener('input', () => {
//     const seekTime = (progress.value / 100) * audio.duration;
//     audio.currentTime = seekTime;
// });


