$(document).ready(function() {
    Twitch.init({clientId: client_id}, function(err, stat) {
        if (stat.authenticated) {
            var token = Twitch.getToken();
            $('.connect').hide();
            $('.token .well').html("oauth:" + token);
            $('.token').show();
        }
    });

    $('.connect').on('click', function() {
        Twitch.login({
            scope: ['chat_login']
        });
    });

    $('.logout').on('click', function() {
        Twitch.logout();
        $('.connect').show();
        $('.token').hide();
    });
});
