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
        let a1 = document.getElementById('a1').value;
        let a2 = document.getElementById('a2').value;
        let sum = a1*a2;
        document.getElementById('res').innerHTML = a2;
        let sum1 = (sum/(1.602e-19))/10000000000000000000;
        document.getElementById('answer').innerHTML = Math.round(sum*1000)/1000;
        document.getElementById('answer1').innerHTML =Math.round(sum1*1000)/1000;
    }

    btn2.onclick = function(){ //question 3 4 5
        let b1= document.getElementById('b1').value;
      
        let sum = (b1*3600)/100000
        let sum1 = ((12.0)*(sum*100000))/1000000
        let sum2 =((sum*100000)/3.30)*(1/3600)
        document.getElementById('answer2').innerHTML ="3: "+Math.round(sum*1000)/1000+"E5";
        document.getElementById('answer3').innerHTML ="4: "+Math.round(sum1*1000)/1000;
        document.getElementById('answer4').innerHTML ="5: "+Math.round(sum2*1000)/1000;

    }

    btn3.onclick = function(){ 
        let c1= document.getElementById('c1').value;
            
        let sum =c1*(0.018)*(9.00)*(3600);
        let sum1 = c1*(0.018)
        document.getElementById('answer5').innerHTML = "6: "+sum;
        document.getElementById('answer6').innerHTML = "7: "+sum1*1000;

    }//question 6 7
    btn4.onclick = function(){
        let d1= document.getElementById('d1').value;
        let d2= document.getElementById('d2').value;
        let d3= document.getElementById('d3').value;
        let k=8.47e28
        let p=1.602e-19
        let pi = 3.14159265359
        let a= (d2/1000)*(d2/1000)
        let sum =pi*k*p*a*d3
        let sum1 = sum/10
        let sum2 = sum1*(1/60)
    
        document.getElementById('answer7').innerHTML = "8: "+sum2;
    }//question 8
    btn5.onclick = function(){
        let e1= document.getElementById('e1').value;
        let e2= document.getElementById('e2').value;
        let e3= document.getElementById('e3').value;
        let pi =  3.14159265359/4
        let m = (e1/1000)*(e1/1000)
        let sum = pi*(e2*10000000000000000000000000000)*(1.602e-19)*(m)*(e3/1000000);
        document.getElementById('answer8').innerHTML = "9: "+sum*1000;
    
    }//question 9
    btn6.onclick = function(){
        let f1= document.getElementById('f1').value;
        let f2= document.getElementById('f2').value;
        let sum = (1/(85.0-15.0))*((f2/f1)-1);
        document.getElementById('answer9').innerHTML = "10: "+Math.round((sum*1000)*1000)/1000+"E-3";
    }//question 10
    btn7.onclick = function(){
        let g1= document.getElementById('g1').value;
        let g2= document.getElementById('g2').value;
        document.getElementById('v').innerHTML = g2;
        let sum =(g1)/(1+(2.00/g2))
        let sum1 = sum/g2;
        document.getElementById('answer10').innerHTML ="11: "+Math.round(sum*1000)/1000;
        document.getElementById('answer11').innerHTML ="12: "+Math.round(sum1*1000)/1000;
    }//question 11 12
    btn8.onclick = function(){
        let i1= document.getElementById('i1').value;
        let i2= document.getElementById('i2').value;
        let i3= document.getElementById('i3').value;
        document.getElementById('mf').innerHTML = i2;
        let sum=parseFloat(i1)+parseFloat(i2)+parseFloat(i3);
        let sum1=parseFloat(i2)*44.0
        document.getElementById('answer12').innerHTML ="13: "+Math.round(sum*1000)/1000;
        document.getElementById('answer13').innerHTML ="14: "+Math.round(sum1*1000)/1000;
    }//question 13 14
    btn9.onclick = function(){
        let j1= parseFloat(document.getElementById('j1').value);
        let j2= parseFloat(document.getElementById('j2').value);
        let j3= parseFloat(document.getElementById('j3').value);
        document.getElementById('s').innerHTML = j3;
        document.getElementById('s1').innerHTML = j3;
        document.getElementById('p').innerHTML = j1;
        let sum = (1/((1/j1)+(1/(j3+j3))))+j2;
        let i = j1/(2*j3)
        let i1 = 1+i;
        let sum1 = 20.0/(i1*(sum))
        document.getElementById('answer14').innerHTML ="15: "+Math.round(sum*1000)/1000;
        document.getElementById('answer15').innerHTML ="16: "+Math.round(sum1*1000)/1000;
    }//question 15 16
    btn10.onclick = function(){
        let k1= parseFloat(document.getElementById('k1').value);
        let k2= parseFloat(document.getElementById('k2').value);
        let k3= parseFloat(document.getElementById('k3').value);
        let k4= parseFloat(document.getElementById('k4').value);
        document.getElementById('c').innerHTML = k1;
        document.getElementById('c1').innerHTML = k3;
        let k = 1/k3;
        let t = (1/k1)+(1/k1)
        let f = (1/t)+k2;
        let mf = 1/(f)
        let sum = 1/(k+mf);
        let sum1 = sum*k4;
        document.getElementById('answer16').innerHTML ="17: "+sum
        document.getElementById('answer17').innerHTML ="18: "+sum1//Math.round(sum*1000)/1000;
    }//question 17 18
    btn11.onclick = function(){
        let l1 = parseFloat(document.getElementById('l1').value);
        let l2 = parseFloat(document.getElementById('l2').value);
        let sum = l1/l2;
        document.getElementById('answer18').innerHTML ="19: "+Math.round(sum*1000)/1000;

    }//question 19
    btn12.onclick = function(){
        let z1 = parseFloat(document.getElementById('z1').value);
        let z2 = parseFloat(document.getElementById('z2').value);
        let sum = z2*z2;
        let sum1 = sum/z1;
        document.getElementById('answer19').innerHTML ="20: "+Math.round(sum1*1000)/1000;
    }//question 20
    btn13.onclick = function(){
        let x1 = parseFloat(document.getElementById('x1').value);
        let x2 = parseFloat(document.getElementById('x2').value);
        let sum = x1*x2;
        document.getElementById('answer20').innerHTML ="21: "+Math.round(sum*1000)/1000;
    }//question 21
    btn14.onclick = function(){
        let v1 = parseFloat(document.getElementById('v1').value);
        let v2 = parseFloat(document.getElementById('v2').value);
        let sum = (v1+v1)*(v1+v1);
        let sum2 = (sum*v2)/2.00;
        document.getElementById('answer21').innerHTML ="22: "+Math.round(sum2*1000)/1000;
    }//question 22
    btn15.onclick = function(){
        let n1 = parseFloat(document.getElementById('n1').value);
        let n2 = parseFloat(document.getElementById('n2').value);
        let sum = n1-(1.20)*(n2)
        let sum1 =sum *1.20;
        document.getElementById('answer22').innerHTML ="23: "+Math.round(sum*1000)/1000;
        document.getElementById('answer23').innerHTML ="24: "+Math.round(sum1*1000)/1000;
    }//question 23 24

