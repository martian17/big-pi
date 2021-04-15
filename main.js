var ff = new Frac(1,1);


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


var PiCalculatorNilakantha2 = function(n){
    var start = 0;
    var sum = new Frac(3n,2n);
    var i = -1;
    var N = 1000;
    var animate = function(t){
        t /= 1000;
        if(start === 0)start = t;
        var dt = t-start;
        start = t;
        if(i >= 0){
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
            //nth = nth.roundToNthDegree(1000);
            //console.log(nth);
            sum = sum.add(nth);
            sum = sum.roundToNthDegree(N);//throw away some bits
            
            
            var pi = sum.getDecimal(N);
            document.getElementById("display").innerHTML = "π = "+pi;
            
            i++;
            if(i > N*0.89){
                i = -1;
            }
        }
        requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    
    this.startCalculation = function(n){
        sum = new Frac(3n,2n);
        i = 0;
        N = n;
    }
};


var PiCalculatorNilakantha3 = function(n){
    var start = 0;
    var sum = new Frac(0n,1n);
    var i = -1;
    var N = 1000;
    var step = function(){
        /*
        2^(n+1)n!n!
        --------------
        (2n+1)!
        
        a b b
        -----
        c
        */
        var a = BigInt(1);
        for(var j = 0; j < i+1; j++){
            a *= BigInt(2);
        };
        var b = ff.factorial(i);
        var c = ff.factorial(2*i+1);
        
        
        var nth = new Frac(a*b*b,c);
        //nth = nth.roundToNthDegree(1000);
        //console.log(nth);
        sum = sum.add(nth);
        sum = sum.roundToNthDegree(N);//throw away some bits
        
        
        var pi = sum.getDecimal(N);
        document.getElementById("display").innerHTML = pi;
        
        i++;
        if(i > N*3.2){
            i = -1;
        }
    };
    var animate = function(t){
        t /= 1000;
        if(start === 0)start = t;
        var dt = t-start;
        start = t;
        if(i >= 0){
            step();
        }
        requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    
    this.startCalculation = function(n){
        var sum = new Frac(0n,1n);
        i = 0;
        N = n;
    }
};


var calculator = new PiCalculatorNilakantha2();


var main = function(n){
    document.getElementById("digits").value = n;
    calculator.startCalculation(n);
};

main(400);


document.getElementById("go").addEventListener("click",function(){
    main(parseInt(document.getElementById("digits").value));
});