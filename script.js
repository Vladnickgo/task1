
let timePassed;//Прошло времени от начала лета
let timeLeft;  //Осталось времени до конца лета
var canvas=document.getElementById('myChart');//Опредееляем переменную canvas
var ctx = canvas.getContext('2d');
var myChartP = new Chart(ctx, {
    type: 'doughnut',//тип диаграммы - сектор
    data: {
        labels: [ 'Осталось, сек','Прошло, сек'],
        datasets: [{
            label: 'Текущий момент',
            data: [timePassed,timeLeft],
            backgroundColor: [
                'rgba(50, 205, 50, 0.2)',
                'rgba(192, 192, 192, 0.2)'
            ],
            borderColor: [
           'rgba(50, 205, 50, 1)',
           'rgba(192, 192, 192, 1)'
            ],
            borderWidth:1
        }]
    },
    options: {
    
    }
});


function outChartUpdate(){
    //вызов данной функции обновляет диаграмму myChartP
myChartP.data.datasets[0].data[0] = timePassed; // 
myChartP.data.datasets[0].data[1] = timeLeft; // 
myChartP.update(); //
}

function defineMyDate(){
    let now = new Date();//поточное значение системного времени
    let startOfSummer=new Date(2021,5,1);//определяем значение начала лета
    let endOfSummer= new Date(2021,8,1);//определяем значение конца лета
    timePassed=Math.floor((endOfSummer-now)/1000);//количество секунд, которое прошло на данный момент времени от начала лета
    timeLeft=Math.floor((now-startOfSummer)/1000);//количество секунд, которое осталось на данный момент времени до конца лета
    
    let ddp=Math.floor(timePassed/3600/24);
    let ddl=Math.floor(timeLeft/3600/24);

     
    let hhp=Math.floor(timePassed/3600)-ddp*24;
    let hhl=Math.floor(timeLeft/3600)-ddl*24;
    
  
    let mmp=Math.floor(timePassed/60)-ddp*24*60-hhp*60;
    let mml=Math.floor(timeLeft/60)-ddl*24*60-hhl*60;

    let ssp=Math.floor(timePassed)-ddp*24*60*60-hhp*60*60-mmp*60;
    let ssl=Math.floor(timeLeft)-ddl*24*60*60-hhl*60*60-mml*60;

    document.getElementById("dp").innerHTML=ddp;
    document.getElementById("dl").innerHTML=ddl;

    document.getElementById("hp").innerHTML=hhp;
    document.getElementById("hl").innerHTML=hhl;

    document.getElementById("mp").innerHTML=mmp;
    document.getElementById("ml").innerHTML=mml;

    document.getElementById("sp").innerHTML=ssp;
    document.getElementById("sl").innerHTML=ssl;

    outChartUpdate();//вызов функции обновления диаграммы
    dateText(now);
}

setInterval(defineMyDate,1000);//передаем функцию defineMyDate методу setInterval c периодичностью 1000 мс

function dateText(t){
    let dweek;
    let dmonth;
    let message;
    dweek=parseInt(t.getDay());
    dmonth=t.getDate();
    month=t.getMonth();
    year=t.getFullYear();
    let hh=t.getHours();
    let mm=t.getMinutes();
    let ss=t.getSeconds();
    if(hh<10){
        hh="0"+hh
    }
    if(mm<10){
        mm="0"+mm
    }
    if(ss<10){
        ss="0"+ss
    }


    let tdweek=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
    let tmonth=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];


    console.log(tdweek[dweek],dmonth,tmonth[month],year);
    message="<h3>"+tdweek[dweek]+"</h3>"+"<p>"+dmonth+" "+tmonth[month]+" "+year+"</p>";
    message+="<h2>"+hh+":"+mm+":"+ss+"</h2>";

    document.getElementById("ddmmyy").innerHTML=message;
    
}

