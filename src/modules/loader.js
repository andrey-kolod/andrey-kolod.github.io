export function loader() {
    console.log(1);
    window.addEventListener('load', function() {
console.log(2);
        const loader = document.getElementById('loader');
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
    });
}