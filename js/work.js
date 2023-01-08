'use-strict'

//const.js のインポート内容

//PHOTO_GALLARY[type][num]

const PHOTO_GALLARY ={

  light : [
    '../images/light/light1.png',
    '../images/light/light2.png',
    '../images/light/light3.png',
    '../images/light/light4.png',
    '../images/light/light5.png',
    '../images/light/light6.png',
    '../images/light/light7.png'
  ],

  snap : [
    '../images/snap/snap1.png',
    '../images/snap/snap2.png',
    '../images/snap/snap3.png',
    '../images/snap/snap4.png',
    '../images/snap/snap5.png',
    '../images/snap/snap6.png',
    '../images/snap/snap7.png',
    '../images/snap/snap8.png',
    '../images/snap/snap9.png',
    '../images/snap/snap10.png',
    '../images/snap/snap11.png',
    '../images/snap/snap12.png',
    '../images/snap/snap13.png',
    '../images/snap/snap14.png'
  ],

  // video :[
  //   'videos/video1.MOV',
  //   'videos/video2.MP4'
  // ],

  all :[
    '../images/light/light1.png',
    '../images/light/light2.png',
    '../images/light/light3.png',
    '../images/light/light4.png',
    '../images/light/light5.png',
    '../images/light/light6.png',
    '../images/light/light7.png',
    '../images/snap/snap1.png',
    '../images/snap/snap2.png',
    '../images/snap/snap3.png',
    '../images/snap/snap4.png',
    '../images/snap/snap5.png',
    '../images/snap/snap6.png',
    '../images/snap/snap7.png',
    '../images/snap/snap8.png',
    '../images/snap/snap9.png',
    '../images/snap/snap10.png',
    '../images/snap/snap11.png',
    '../images/snap/snap12.png',
    '../images/snap/snap13.png',
    '../images/snap/snap14.png',
      //   'videos/video1.MOV',
    //   'videos/video2.MP4',
  ]
  
}

const GRID_MAX_POINT = 9;



const pagination = ()=>{

  //初期設定
  let page = 1;
  let step = 9;
  let type = 'all'

  //内容を表示
  const show =(type,page,step)=>{

    const gridBox = document.getElementsByClassName('photo-gridbox')[0];
    let pageCount = Math.ceil(PHOTO_GALLARY[type].length / GRID_MAX_POINT);

    //ページネーションの出力

    const ul = document.getElementsByClassName('page-ul')[0];

    while(ul.firstChild){
      ul.removeChild(ul.firstChild)
    }

    //前に戻る
    let li = document.createElement('li');
    li.classList.add('prev');
    li.innerHTML = '前へ';
    ul.appendChild(li);

    //数字の入力

    for(let i=0; i<pageCount; i++){

      li = document.createElement('li');
      li.innerHTML = i +1;
      if(i+1 == page) li.style.backgroundColor ='lightblue';
      ul.appendChild(li);
    }

    //次に進む

    li = document.createElement('li');
    li.innerHTML = ' 次へ';
    li.classList.add('next');
    ul.appendChild(li);



    //内容を一度空にする
    while(gridBox.firstChild){
      gridBox.removeChild(gridBox.firstChild);
    }

    const first = (page-1) * step;
    let last = page * step;

    if(PHOTO_GALLARY[type].length <last){

      last = last - (last - PHOTO_GALLARY[type].length);
    }

    for(let i= first; i<last; i++){

      let div = document.createElement('div');
      div.classList.add('photo-card');
      gridBox.appendChild(div)
      let img = document.createElement('img');
      img.classList.add('img-photo');
      div.appendChild(img);
      img.src = PHOTO_GALLARY[type][i];
    }

    document.getElementsByClassName('prev')[0].addEventListener('click',()=>{

      console.log("done");
      if(page <= 1) return;
      page--;
      console.log(page);
      show(type,page,step);
    })
  
    document.getElementsByClassName('next')[0].addEventListener('click',()=>{
  
      console.log(Math.ceil(PHOTO_GALLARY[type].length /step));
  
      if(page >= Math.ceil(PHOTO_GALLARY[type].length /step)) return;
      page++;
      console.log(page);
      show(type,page,step);
    })

    //モーダルオープン

    let  photoCard = document.getElementsByClassName('photo-card');
    let modal = document.getElementsByClassName('modal')[0]
    let modalPhoto = document.getElementsByClassName('modal-photo')[0];

    for(let i=0; i < photoCard.length; i++){

      photoCard[i].addEventListener('click',(e)=>{

        console.log(e.target.src);
        modal.style.display = 'block'
        modalPhoto.src =e.target.src;
      })
    }

    //モーダルクローズ

    function closeModal(){
      modalPhoto.src = '';
      modal.style.display='none';
    }

    document.getElementsByClassName('modalClose')[0].addEventListener('click',closeModal)

    modal.addEventListener('click',closeModal)

  }

  //最初に１枚目を表示

  show(type,page,step)

  let photoType = document.getElementById('photo-type');

  photoType.addEventListener('change',()=>{

    console.log(photoType.value);

    //初期値に戻す
    page = 1;
    step = GRID_MAX_POINT;
    type = photoType.value;

    show(type,page,step)
  })

  console.log(document.getElementsByClassName('prev')[0]);
  
}

window.addEventListener('load',()=>{

  pagination()
})

