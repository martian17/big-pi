<h1>Calculating π using various fast-converging series</h1>
<div>
    <h2>List of used algorithms</h2>
    <h3>Machin-like formula</h3>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Machin-like_formula">Machin-like formula</a>
    <ul>
        <li>Hwang Chien-Lih's arctangent sum
        <li>F. C. M. Störmer's arctangent sum
        <li>Kikuo Takano's arctangent sum
    </ul>
    <h3>Leibniz based formulas</h3>
    <a target="_blank" href="https://www.researchgate.net/publication/283579663_Nilakantha's_accelerated_series_for_pi">Nilakantha's accelerated series for pi</a>
    <ul>
        <li>Leibniz formula
        <li>Nilakantha's formula 1
        <li>Nilakantha's formula 2
        <li>Nilakantha's formula 3
    </ul>
    <h4>Disclaimer: last few digits are wrong, so if you're going to use this program somewhere, make sure to throw away the last 10 or so digits</h4>
    <h2>Brief description</h2>
    <p>
        This is my last day of calculating pi, so I put some effort on implementing multiple fast-converging series.<br>
        I implemented <a target="_blank" href="https://github.com/martian17/bigfrac.js">a small extension</a> to the existing BigInt JavaScript feature to accomodate fraction arithmetics.<br>
        And for the arc-tangents I simply decomposed them into taylor-series and re-factored them as a sum<br>
    </p>
</div>
<a target="_blank" href="https://codepen.io/MartianLord/full/jOyKmGz">Demo</a><br>
<a target="_blank" href="https://github.com/martian17/big-pi">Github</a><br>
<a target="_blank" id="github" href="https://github.com/martian17/big-pi">Fork me on Github</a>