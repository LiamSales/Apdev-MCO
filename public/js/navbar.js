const AccountMenu = document.getElementById('AccountMenu');

AccountMenu.addEventListener('change', function() {
    const selectedValue = AccountMenu.value;


    fetch('/' + selectedValue, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        window.location.href = data.redirectTo;
    });
});