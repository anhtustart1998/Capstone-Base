document.querySelector('#change').onclick = function () {
    console.log('change: ', change);
    document.querySelector('body').classList.toggle('dark');
};
