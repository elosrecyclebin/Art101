
function showTreat(treat){
    const display = document.getElementById("treat-display");

    const treats = {
        Bread: `
        <h2>Banana Bread</h2>
        <p>Soft Sweet Bread</p>
        <img src="Banana-Bread.jpg">
        `,

        Cookie: `
        <h2>Chocolate Chip Cookies</h2>
        <p>Freshly Baked Cookies</p>
        <img src="cookie.jpg">
        `,

        Cake: `
        <h2>Tiramisu</h2>
        <p>Slightly bitter but Sweet</p>
        <img src="tiramisu.jpg">
        `,

        Pie: `
        <h2>Apple Pie</h2>
        <p>Flaky Sweet Tart</p>
        <img src="Apple-Pie.jpg">
        `
    };
    display.innerHTML = treats[treat];
}




