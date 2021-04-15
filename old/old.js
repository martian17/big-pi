var calculatePiLeibniz = function(){//very inefficient
    var sum = new Frac(0n,1n);
    var sign = 1;
    for(var i = 0; i < 20000; i++){
        //console.log(i);
        var nth = new Frac(1n,BigInt(sign*(i*2+1)));
        sign = -sign;
        //console.log(nth);
        sum = sum.add(nth);
        sum = sum.roundToNthDegree(100);//throw away some bits
        //console.log(sum);
        //sum = sum.add(new Frac(1n,BigInt(sign*(i*2+1))));
        //sum.simplify();
    }
    sum = sum.multiply(new Frac(4n,1n));
    
    //console.log(sum.a);
    //console.log(sum.b);
    console.log(sum.getDecimal(100));
    return sum;
};

var calculatePiNilakantha = function(){
    var sum = new Frac(3n,4n);
    var sign = 1;
    for(var i = 0; i < 20000; i++){
        var d = (i*2+3);
        var nth = new Frac(1n,BigInt(sign*(d*d*d-d)));
        sign = -sign;
        sum = sum.add(nth);
        sum = sum.roundToNthDegree(100);//throw away some bits
    }
    sum = sum.multiply(new Frac(4n,1n));
    console.log(sum.getDecimal(100));
    return sum;
};

var calculatePiNilakantha2 = function(){
    var sum = new Frac(3n,2n);
    for(var i = 0; i < 500; i++){
        if(i % 10 === 0){
            //console.log(i);
            var pi = sum.getDecimal(100);
            console.log(pi);
            document.getElementById("display").innerHTML = pi;
        }
        /*
        (5n+3)n!(2n)!
        --------------
        2^(n-1)(3n+2)!
        
        a b c
        -----
        d e
        */
        var a = BigInt(5*i+3);
        var b = ff.factorial(i);
        var c = ff.factorial(2*i);
        var d = BigInt(1);
        for(var j = 0; j < i-1; j++){
            d *= BigInt(2);
        };
        var e = ff.factorial(3*i+2);
        
        
        var nth = new Frac(a*b*c,d*e);
        //console.log(nth);
        sum = sum.add(nth);
        sum = sum.roundToNthDegree(100);//throw away some bits
    }
    return sum;
};


var calculatePiNilakantha = function(){
    var sum = new Frac(3n,4n);
    var sign = 1;
    for(var i = 0; i < 20000; i++){
        var d = (i*2+3);
        var nth = new Frac(1n,BigInt(sign*(d*d*d-d)));
        sign = -sign;
        sum = sum.add(nth);
        sum = sum.roundToNthDegree(100);//throw away some bits
    }
    sum = sum.multiply(new Frac(4n,1n));
    console.log(sum.getDecimal(100));
    return sum;
};