const scContainer = document.getElementById('js--sc--container');

const sc = new ScratchCard ('#js--sc--container', {
    scratchType: SCRATCH_TYPE.SPRAY,
    containerWidth: scContainer.offsetWidth,
    containerHeight:300,
    imageForwardSrc: 'img/premio.jpg',
    imageBackgroundSrc: 'img/front.jpg',
    clearZoneRadius: 30,
    nPoints: 30, 
    pointSize: 6,
})

sc.init().then(()=> {
    sc.canvas.addEventListener('scratch.move',()=> {
        let percent = sc.getPercent().toFixed(0);
        scInfos.innerHTML = percent + '%';
        console.log(percent)
    })
}).catch((error) => {
    alert(error.menssage)
})