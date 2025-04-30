const memo = {};

module.exports = async function (context, req) {
    const n = req.body?.nth;

    if (n === undefined || typeof n !== "number") {
        context.res = {
            status: 400,
            body: "Parámetro 'nth' inválido o faltante"
        };
        return;
    }

    function fib(n) {
        if (n <= 1) return n;
        if (memo[n]) return memo[n];
        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
    }

    const result = fib(n);

    context.res = {
        body: {
            nth: n,
            result
        }
    };
}
