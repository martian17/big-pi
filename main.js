var ff = new Frac(1,1);


var PiCalculatorLeibniz = function(n){
    var start = 0;
    var sum = new Frac(0n,1n);
    var i = -1;
    var N = 1000;
    var step = function(){
        /*
        k=2n+1
        (-1)^n {12/49^k + 32/57^k - 5/239^k + 12/110443^k}
        ---------------------------------------------------
        k
        
        a f=>{b+c+d+e}
        -----
        k
        */
        var sign = (-1)**i;
        var nth = new Frac(1n,BigInt(sign*(i*2+1)));
        sum = sum.add(nth);
        sum = sum.roundToNthDegree(N);//throw away some bits
        
        sum4 = sum.multiply(new Frac(4n,1n));
        var pi = sum4.getDecimal(N);
        document.getElementById("display").innerHTML = pi;
        i++;
        if(i > N*N*10){
            i = -1;
        }
    };
    var terminate = false;
    var animate = function(t){
        t /= 1000;
        if(start === 0)start = t;
        var dt = t-start;
        start = t;
        if(i >= 0){
            step();
        }
        if(!terminate)requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    
    this.terminate = function(){
        terminate = true;
    };
    
    this.startCalculation = function(n){
        sum = new Frac(0n,1n);
        i = 0;
        N = n;
    }
};

var PiCalculatorNilakantha = function(n){
    var start = 0;
    var sum = new Frac(3n,4n);
    var i = -1;
    var N = 1000;
    var step = function(){
        /*
        k=2n+1
        (-1)^n {12/49^k + 32/57^k - 5/239^k + 12/110443^k}
        ---------------------------------------------------
        k
        
        a f=>{b+c+d+e}
        -----
        k
        */
        var sign = (-1)**i;
        var d = (i*2+3);
        var nth = new Frac(1n,BigInt(sign*(d*d*d-d)));
        sum = sum.add(nth);
        sum = sum.roundToNthDegree(N);//throw away some bits
        
        sum4 = sum.multiply(new Frac(4n,1n));
        var pi = sum4.getDecimal(N);
        document.getElementById("display").innerHTML = pi;
        i++;
        if(i > N*N*2){
            i = -1;
        }
    };
    var terminate = false;
    var animate = function(t){
        t /= 1000;
        if(start === 0)start = t;
        var dt = t-start;
        start = t;
        if(i >= 0){
            step();
        }
        if(!terminate)requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    
    this.terminate = function(){
        terminate = true;
    };
    
    this.startCalculation = function(n){
        sum = new Frac(3n,4n);
        i = 0;
        N = n;
    }
};


var PiCalculatorNilakantha2 = function(n){
    var start = 0;
    var sum = new Frac(3n,2n);
    var i = -1;
    var N = 1000;
    var step = function(){
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
        var d;
        if(i-1 < 0){
            d = 1n;
        }else{
            d = 2n**BigInt(i-1);
        }
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
    };
    var terminate = false;
    var animate = function(t){
        t /= 1000;
        if(start === 0)start = t;
        var dt = t-start;
        start = t;
        if(i >= 0){
            step();
        }
        if(!terminate)requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    
    this.terminate = function(){
        terminate = true;
    };
    
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
        var a = 2n**BigInt(i+1);
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
    var terminate = false;
    var animate = function(t){
        t /= 1000;
        if(start === 0)start = t;
        var dt = t-start;
        start = t;
        if(i >= 0){
            step();
        }
        if(!terminate)requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    
    this.terminate = function(){
        terminate = true;
    };
    
    this.startCalculation = function(n){
        var sum = new Frac(0n,1n);
        i = 0;
        N = n;
    }
};

var PiCalculatorAtanKikuo = function(n){
    var start = 0;
    var sum = new Frac(0n,1n);
    var i = -1;
    var N = 1000;
    var step = function(){
        /*
        k=2n+1
        (-1)^n {12/49^k + 32/57^k - 5/239^k + 12/110443^k}
        ---------------------------------------------------
        k
        
        a f=>{b+c+d+e}
        -----
        k
        */
        var k = BigInt(2*i+1);
        var a = BigInt((-1)**i);
        var f = new Frac(0n,1n);
        f = f.add(new Frac(12n,49n**k));
        f = f.add(new Frac(32n,57n**k));
        f = f.add(new Frac(-5n,239n**k));
        f = f.add(new Frac(12n,110443n**k));
        sum = sum.roundToNthDegree(N);//throw away some bits
        f = f.multiplyBigint(a);
        f = f.divideBigint(k);
        sum = sum.roundToNthDegree(N);//throw away some bits
        
        sum = sum.add(f);
        sum = sum.roundToNthDegree(N);//throw away some bits
        
        sum4 = sum.multiply(new Frac(4n,1n));
        var pi = sum4.getDecimal(N);
        document.getElementById("display").innerHTML = pi;
        i++;
        if(i > N*0.3){
            i = -1;
        }
    };
    var terminate = false;
    var animate = function(t){
        t /= 1000;
        if(start === 0)start = t;
        var dt = t-start;
        start = t;
        if(i >= 0){
            step();
        }
        if(!terminate)requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    
    this.terminate = function(){
        terminate = true;
    };
    
    this.startCalculation = function(n){
        sum = new Frac(0n,1n);
        i = 0;
        N = n;
    }
};

var PiCalculatorAtanStormer = function(n){
    var start = 0;
    var sum = new Frac(0n,1n);
    var i = -1;
    var N = 1000;
    var step = function(){
        /*
        k=2n+1
        (-1)^n {12/49^k + 32/57^k - 5/239^k + 12/110443^k}
        ---------------------------------------------------
        k
        
        a f=>{b+c+d+e}
        -----
        k
        */
        var k = BigInt(2*i+1);
        var a = BigInt((-1)**i);
        var f = new Frac(0n,1n);
        f = f.add(new Frac(44n,57n**k));
        f = f.add(new Frac(7n,239n**k));
        f = f.add(new Frac(-12n,682n**k));
        f = f.add(new Frac(24n,12943n**k));
        sum = sum.roundToNthDegree(N);//throw away some bits
        f = f.multiplyBigint(a);
        f = f.divideBigint(k);
        sum = sum.roundToNthDegree(N);//throw away some bits
        
        sum = sum.add(f);
        sum = sum.roundToNthDegree(N);//throw away some bits
        
        sum4 = sum.multiply(new Frac(4n,1n));
        var pi = sum4.getDecimal(N);
        document.getElementById("display").innerHTML = pi;
        i++;
        if(i > N*0.28){
            i = -1;
        }
    };
    var terminate = false;
    var animate = function(t){
        t /= 1000;
        if(start === 0)start = t;
        var dt = t-start;
        start = t;
        if(i >= 0){
            step();
        }
        if(!terminate)requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    
    this.terminate = function(){
        terminate = true;
    };
    
    this.startCalculation = function(n){
        sum = new Frac(0n,1n);
        i = 0;
        N = n;
    }
};


var PiCalculatorAtanHwang = function(n){
    var start = 0;
    var sum = new Frac(0n,1n);
    var i = -1;
    var N = 1000;
    var step = function(){
        /*
        k=2n+1
        (-1)^n {12/49^k + 32/57^k - 5/239^k + 12/110443^k}
        ---------------------------------------------------
        k
        
        a f=>{b+c+d+e}
        -----
        k
        */
        var k = BigInt(2*i+1);
        var a = BigInt((-1)**i);
        var f = new Frac(0n,1n);
        f = f.add(new Frac(36462n,390112n**k));
        f = f.add(new Frac(135908n,485298n**k));
        f = f.add(new Frac(274509n,683982n**k));
        f = f.add(new Frac(-39581n,1984933n**k));
        f = f.add(new Frac(178477n,2478328n**k));
        f = f.add(new Frac(-114569n,3449051n**k));
        f = f.roundToNthDegree(N);//throw away some bits
        f = f.add(new Frac(-146571n,18975991n**k));
        f = f.add(new Frac(61914n,22709274n**k));
        f = f.add(new Frac(-69044n,24208144n**k));
        f = f.add(new Frac(-89431n,201229582n**k));
        f = f.add(new Frac(-43938n,2189376182n**k));
        sum = sum.roundToNthDegree(N);//throw away some bits
        f = f.multiplyBigint(a);
        f = f.divideBigint(k);
        sum = sum.roundToNthDegree(N);//throw away some bits
        
        sum = sum.add(f);
        sum = sum.roundToNthDegree(N);//throw away some bits
        
        sum4 = sum.multiply(new Frac(4n,1n));
        var pi = sum4.getDecimal(N);
        document.getElementById("display").innerHTML = pi;
        i++;
        if(i > N*0.09){
            i = -1;
        }
    };
    var terminate = false;
    var animate = function(t){
        t /= 1000;
        if(start === 0)start = t;
        var dt = t-start;
        start = t;
        if(i >= 0){
            step();
        }
        if(!terminate)requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    
    this.terminate = function(){
        terminate = true;
    };
    
    this.startCalculation = function(n){
        sum = new Frac(0n,1n);
        i = 0;
        N = n;
    }
};


//var calculator = new PiCalculatorAtanKikuo();
//var calculator = new PiCalculatorNilakantha2();
//var calculator = new PiCalculatorNilakantha3();
//var calculator = new PiCalculatorNilakantha();
//var calculator = new PiCalculatorLeibniz();
var calculator = new PiCalculatorAtanHwang();

var algorithms = {
    Leibniz:PiCalculatorLeibniz,
    Nilakantha:PiCalculatorNilakantha,
    Nilakantha2:PiCalculatorNilakantha2,
    Nilakantha3:PiCalculatorNilakantha3,
    AtanKikuo:PiCalculatorAtanKikuo,
    AtanStormer:PiCalculatorAtanStormer,
    AtanHwang:PiCalculatorAtanHwang
};

var main = function(n){
    document.getElementById("digits").value = n;
    calculator.startCalculation(n);
};

main(1000);


document.getElementById("go").addEventListener("click",function(){
    reloadAlgorithms();
});
document.getElementById("algorithms").addEventListener("input",function(){
    reloadAlgorithms();
});

var reloadAlgorithms = function(){
    calculator.terminate();
    calculator = new algorithms[document.getElementById("algorithms").value];
    main(parseInt(document.getElementById("digits").value));
};

