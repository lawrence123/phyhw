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


    btn.onclick = function(){ //question 1
        let a = document.getElementById('a').value;
        let emax = 3e6
        let sum = ((a/1000)*emax)/1000
        
        document.getElementById('answer').innerHTML = sum;

    }

    btn2.onclick = function(){ //question 2
        let c = 2e-6
        let b = document.getElementById('b').value;
        let emax = 3e6
        let v = ((b/1000)*emax)/1000
        let sum = (c)*(v)

        document.getElementById('answer2').innerHTML = sum*1000000;

    }

    btn3.onclick = function(){
        let a1 = document.getElementById('a1').value;
        let a2 = document.getElementById('a2').value;
        let a3 = document.getElementById('a3').value;
            
        let sum = a2/(a1/1000000)
        document.getElementById('answer3').innerHTML = sum/1000;

    }//question 3
    btn4.onclick = function(){
        let b1 = document.getElementById('b1').value;
        let b2 = document.getElementById('b2').value;
        let sum = (b1*100000000000000)/(b2/1000)
        document.getElementById('answer4').innerHTML = sum/10000000000000000;

    }//question 4
    btn5.onclick = function(){
        let c1 = document.getElementById('c1').value;
        let c2 = document.getElementById('c2').value;
        let c3 = document.getElementById('c3').value;
        let c4 = document.getElementById('c4').value;
        let sum = (c4/100000000000)/((8.854/1000000000000)*(c1/100)*(c2/100))
        let sum1 = Math.round(sum)
        let sum2 = (sum1/1000)*1000
        document.getElementById('answer5').innerHTML = sum1/1000+"E3";
        document.getElementById('answer6').innerHTML = sum2/100/5.50+"E2";

    }//question 5
    
    btn7.onclick = function(){
        let d1 = document.getElementById('d1').value;
        let d2 = document.getElementById('d2').value;
        let d3 = document.getElementById('d3').value;
        let k=2.50;
        let c = 8.854e-12;
        let d = d3/1000;
        let sum = (k*c*d1*d2)/d;
        document.getElementById('answer7').innerHTML = sum*1000000000;


    }//question 7
    btn8.onclick = function(){
        let e1 = document.getElementById('e1').value;
        let e2 = document.getElementById('e2').value;
        let c = 8.854e-12;
        let sum = (0.0300*(e1/1000000000000))/((c)*(e2/10000));
        document.getElementById('answer8').innerHTML = sum;
    }//question 8
    btn9.onclick = function(){
        let f1 = document.getElementById('f1').value;
        document.getElementById('answer9').innerHTML = f1+"%";
    }//question 9
    btn10.onclick = function(){
        let g1 = document.getElementById('g1').value;
        let g2 = document.getElementById('g2').value;
        let sum = g1*g2;
        let sum1 = 0.5*(g1/1000000)*(g2)*(g2);
        let c = g1/3.00;
        let sum2 = sum/c;
        let sum3 = 0.5*(c/1000000)*(sum2)*(sum2)
        document.getElementById('answer10').innerHTML = "10: "+sum;
        document.getElementById('answer11').innerHTML = "11: "+sum1*1000000;
        document.getElementById('answer12').innerHTML = "12: "+sum;
        document.getElementById('answer13').innerHTML = "13: "+sum2;
        document.getElementById('answer14').innerHTML = "14: "+sum3*1000000;
    }//question 10 11 12 13 14
    btn11.onclick = function(){
        let h1 = document.getElementById('h1').value;
        let h2 = document.getElementById('h2').value;
        let sum = ((8.854e-12)*(h1/100)*(h1/100)*(h2))/(0.75/1000);
        let sum1= 0.5*(sum/1000000000)*(h2);
        document.getElementById('x').innerHTML =h2;
        document.getElementById('answer15').innerHTML ="15: "+sum*1000000000;
        document.getElementById('answer16').innerHTML ="16: "+ sum1*1000000000000000;
    }//question 15 16
    btn12.onclick = function(){
        let j1 = document.getElementById('j1').value;
        let j2 = document.getElementById('j2').value;
        let sum = 0.5*(j1/1000000)*(j2);
        document.getElementById('answer17').innerHTML =sum*1000000;
    }//question 17
    btn13.onclick = function(){
        let k1 = document.getElementById('k1').value;
        let k2 = document.getElementById('k2').value;
        let sum = Math.sqrt(2*(k2)/(k1/1000000));
        document.getElementById('answer18').innerHTML =sum/1000;

    }//question 18
    btn14.onclick = function(){
        let l1 = document.getElementById('l1').value;
        let l2 = document.getElementById('l2').value;
        let l = l1/1000000;
        let ll=l2*1000
        let sum = (l)*(ll);
        let sum1 =(l*ll*ll)/((2)*(2.00/1000))
        document.getElementById('answer19').innerHTML ="19: "+sum;
        document.getElementById('answer20').innerHTML ="20: "+sum1/1000000;

    }//question 19 20
  