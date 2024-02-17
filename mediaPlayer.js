
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

// Video Section


const video = document.getElementById('video');
const videoplay = document.getElementById('videoplay');
const video_range = document.getElementById('video-range');
const mute = document.getElementById('muteBtn');
const volume = document.getElementById('volume');
const fullscreen = document.getElementById('fullscreen');


videoplay.addEventListener('click',()=>{
    if (video.paused || video.ended) {
        video.play()
        // play.innerHTML='<i class="fa-solid fa-pause"></i>'
    } 
    else {
        video.pause()
        
        // play.innerHTML=`<i class="fa-solid fa-play"></i>`
    }
   })
   video.addEventListener('play',()=>{
    videoplay.innerHTML='<i class="fa-solid fa-pause"></i>'
})
video.addEventListener('pause',()=>{
    videoplay.innerHTML='<i class="fa-solid fa-play"></i>'
})
video_range.addEventListener('input',()=>{
    const value = video_range.value;
    
    const percent = (value - video_range.min)/(video_range.max - video_range.min) * 100;
    console.log(percent);
    // progress.style.background=`linear-gradient(to right, #4CAF50 0%, #4CAF50 ${percent}%,#d3d3d3 ${percent} ,#d3d3d3 100%)`;
    video_range.style.background = `linear-gradient(to right, #4CAF50 ${percent}%, #d3d3d3 ${percent}%)`;

    // const seekTime = (progress.value / 100) * audio.duration;
    // audio.currentTime = seekTime;
});
video_range.addEventListener('input',()=>{
    const seekTime = (video_range.value / 100) * video.duration;
    video.currentTime = seekTime;
})
video.addEventListener('timeupdate', () => {
    const currentTime = video.currentTime;
    const duration = video.duration;
    const progressPercentage = (currentTime / duration) * 100;
    video_range.value = progressPercentage;

    const percent = (video_range.value - video_range.min) / (video_range.max - video_range.min) * 100;
    video_range.style.background = `linear-gradient(to right, #4CAF50 ${percent}%, #d3d3d3 ${percent}%)`;
});

muteBtn.addEventListener('click', () => {
    if (video.muted) {
      video.muted = false;
      mute.innerHTML='<i class="fa-solid fa-volume-high"></i>'
    } else {
        video.muted = true;
        mute.innerHTML='<i class="fa-solid fa-volume-xmark"></i>'
    }
  });
  video.addEventListener('play',()=>{
    mute.innerHTML='<i class="fa-solid fa-volume-high"></i>'
  })
  video.addEventListener('pause',()=>{
    mute.innerHTML='<i class="fa-solid fa-volume-xmark"></i>'
  })
  volume.addEventListener('input', () => {
    video.volume = volume.value;
  });
  fullscreen.addEventListener('click', () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari */
      video.webkitRequestFullscreen();
}
  });