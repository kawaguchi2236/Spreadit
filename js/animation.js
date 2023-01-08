'use strict'

//初期のアニメーション

$('.line').animate({ "width": "100%" }, 1500, function () {
  $('.line').css('right', 0);
  $('.line').animate({ 'width': '0%' }, 1500, function () {
    $('.up').animate({ "height": "0%" });
    $('.down').animate({ "height": "0%" }, 500, function () {
      $('.whole-wrapper').css('display', 'block')
    });
  })
})


//画面遷移アニメーション

const mainTitle = document.getElementsByClassName('main-title-sentense')[0]
const subTitle = document.getElementsByClassName('sentense-last')[0]
console.log(subTitle);

window.addEventListener('scroll', () => {

  //スクロールの高さ取得
  let pageHeight = window.pageYOffset;
  console.log(pageHeight);

  if( 0 <= pageHeight && pageHeight<= 344){   // 1page

     changeColor('white','black')
     mainTitle.style.position='fixed';
     mainTitle.innerHTML = 'This is';
     subTitle.style.position='fixed';
     subTitle.innerHTML = 'la página web';

  }else if( 344 <pageHeight && pageHeight < 1072){  // 2page

    changeColor('black','white');

  }else if(1800 < pageHeight && pageHeight <2374){

    changeColor('white','black');
    mainTitle.style.position='absolute';
    subTitle.style.position='absolute';

  }else if (2374 < pageHeight && pageHeight < 3000){

      changeColor('white','black');

      if(2200 < pageHeight && pageHeight <3000){

        mainTitle.style.position='absolute';
        subTitle.style.position='absolute';
  
        mainTitle.innerHTML = 'What I do';
        subTitle.innerHTML = 'es ...'
      }

      // document.getElementById('production-box').style.position ='fixed'
      // document.getElementById('production-box').style.backgroundColor ='white'
      // document.getElementsByClassName('title-profile')[0].style.top = '50vh';
      // document.getElementsByClassName('title-profile')[0].style.left = '50vh';
      // document.getElementsByClassName('title-profile')[0].style.color = 'white';
      // document.getElementsByClassName('subtitle-profile')[0].style.color = 'white';

  }else if(3000 < pageHeight && pageHeight <= 4400){

    // changeColor('black','white');



    if(3100 <pageHeight){

      mainTitle.style.position='fixed';
      subTitle.style.position='fixed';
    }


  }else if(3900 < pageHeight < 3902){

    mainTitle.style.position='absolute';
    subTitle.style.position='absolute';
    changeColor('black','black');

  }else if(4400 < pageHeight){



      // document.getElementsByClassName('title-profile')[0].style.color = 'white';
      // document.getElementsByClassName('subtitle-profile')[0].style.color = 'white';

    // document.getElementById('production-box').style.top = '40%'
    // document.getElementById('production-box').style.left = '50%'
    

  }

 
})


//色の反転
const changeColor =(color1,color2)=>{

  mainTitle.style.color = color1;
  subTitle.style.color = color2;

  for(let i=0; i<5; i++){
    document.getElementsByClassName('left-container')[i].style.backgroundColor = color2;
    document.getElementsByClassName('right-container')[i].style.backgroundColor = color1;
  }
}

//メアドの取得

document.getElementById('mail-address').addEventListener('click',()=>{

  
})

//ハンバーガーデザイン

$(".hamburger").click(function(){
  $(this).toggleClass('active');
  $("#g-nav").toggleClass('panelactive');
  mainTitle.style.display='none';
  subTitle.style.display='none';
});

$("g-nav a").click(function(){
  $(".hamburger").removeClass('active');
  $("#g-nav").removeClass('panelactive');
  mainTitle.style.display='block';
  subTitle.style.display='block';
})


