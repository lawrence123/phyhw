var btn  =  document.getElementById('btn');
    var btn2 =  document.getElementById('btn2');
    var btn3 =  document.getElementById('btn3');
    var btn4 =  document.getElementById('btn4');
    var btn5 =  document.getElementById('btn5');
    var btn6 =  document.getElementById('btn6');
    var btn7 =  document.getElementById('btn7');
    var btn8 =  document.getElementById('btn8');
    var btn9 =  document.getElementById('btn9');
    var btn10=  document.getElementById('btn10');
    var btn11=  document.getElementById('btn11');
    var btn12=  document.getElementById('btn12');
    var btn13=  document.getElementById('btn13');
    var btn14=  document.getElementById('btn14');
    var btn15=  document.getElementById('btn15');
    var btn16=  document.getElementById('btn16');
    var btn17=  document.getElementById('btn17');
    var btn18=  document.getElementById('btn18');
    var btn19=  document.getElementById('btn19');
    var btn20=  document.getElementById('btn20');


    btn.onclick = function(){ //question 1 2
        let a1=parseFloat(document.getElementById('a1').value);
        let a2=parseFloat(document.getElementById('a2').value);
        let a3=parseFloat(document.getElementById('a3').value);

        let sum = (1.00-(0.195*a1)) + (0.0500*2.00)
        let sum1 = (1.00-(0.195*a1))-(0.245*a3)-(0.245*a2)
        
        document.getElementById('answer').innerHTML = "1: "+sum;
        document.getElementById('answer1').innerHTML = "2: "+sum1*-1;

    }

    btn2.onclick = function(){ //question 3 4
        let b1=parseFloat(document.getElementById('b1').value);
        let b2=parseFloat(document.getElementById('b2').value);
        let sum =-(1.00*6.00)-(11.00*b2)+(b1)
        let sum1 = (-(11.00*b2)+b1)/10.00
        document.getElementById('answer2').innerHTML ="3: "+ sum;
        document.getElementById('answer3').innerHTML ="4: "+ sum1;
    }

  

    btn4.onclick = function(){
        let c = document.getElementById('c').value;
        let i3 = 1.40/99.0;
        let i2 = c/((1+i3)*35.0+(1.40*1000))
        let i = Math.round((i2*1000)*1000)/1000
        let sum = i3*i
        let sum1 =( (Math.round((sum*1000)*1000)/1000)*83.0)/1000

        let a = (c/((1.01511*35.0)+(1.40*1000)))*1000
        let sum2 =Math.round(((((0.01511*a)*1000)*76.639)/1000)*1000)/1000;
        document.getElementById('answer4').innerHTML ="8: "+sum1;
        document.getElementById('answer5').innerHTML ="9: "+sum2;

    }//question 7 8 9
    btn5.onclick = function(){
        let d1=parseFloat(document.getElementById('d1').value);
        let d2=parseFloat(document.getElementById('d2').value);
        let sum = -(1.00)*(d2)*Math.log(1-(15.0/d1));
        document.getElementById('answer6').innerHTML ="10: "+Math.round(sum*1000)/1000;
    }//question 10
    btn6.onclick = function(){
        let e1=parseFloat(document.getElementById('e1').value);
        let sum = e1*0.0608
        document.getElementById('answer7').innerHTML ="11: "+Math.round(sum*1000)/1000;
    }//question 11
    btn7.onclick = function(){
        let f1=parseFloat(document.getElementById('f1').value);
        let sum  = ((200/2)*Math.log(f1/1.25))/60
        document.getElementById('answer8').innerHTML ="12: "+Math.round(sum*1000)/1000;
    }//question 12
    btn8.onclick = function(){
        let g1=parseFloat(document.getElementById('g1').value);
        let sum = g1/27.0
        let sum1 =12.0*g1/27.0
        document.getElementById('answer9').innerHTML ="13: "+Math.round(sum*1000)/1000;
        document.getElementById('answer10').innerHTML ="14: "+Math.round(sum1*1000)/1000; 
    }//question 13 14
  
