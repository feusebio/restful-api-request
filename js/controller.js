$(document).ready(function () {
// process the form
    $('#get-dados').click(function (event) {

        // remove the past errors
        $('#name-group').removeClass('has-error');
        $('#name-group .help-block').empty();

        // remove success messages
        $('#lista-messages').removeClass('alert alert-success').empty();
        // get the form data
        var formData = {
            'url': $('input[name=url]').val(),
            'action': 'get-dados'
        };
        // process the form
        $.ajax({
            type: 'POST',
            url: 'process.php',
            data: formData,
            dataType: 'json',
            success: function (data) {
                // log data to the console so we can see
                console.log(data);
                // if validation fails
                // add the error class to show a red input
                // add the error message to the help block under the input
                if (!data.success) {
                    if (data.errors) {
                        $('#name-group').addClass('has-error');
                        $('#name-group .help-block').html('Endereço inválido');
                    }
                } else {

                    // if validation is good add success message
                    $('#lista-messages').addClass('alert alert-success').append('<p>' + JSON.stringify(data) + '</p>');
                }
            }
        });
        // stop the form from submitting and refreshing
        event.preventDefault();
    });

    $('#ver-anuncio').click(function (event) {
        // remove the past errors
        $('#name-group').removeClass('has-error');
        $('#name-group .help-block').empty();

        // remove success messages
        $('#anuncio-messages').removeClass('alert alert-success').empty();

        // get the form data
        var formData = {
            'url': $('input[name=anuncio-url]').val(),
            'action': 'ver-anuncio'
        };
        // process the form
        $.ajax({
            type: 'POST',
            url: 'process.php',
            data: formData,
            dataType: 'json',
            success: function (data) {
                // log data to the console so we can see
                console.log(data);
                // if validation fails
                // add the error class to show a red input
                // add the error message to the help block under the input
                if (!data.success) {
                    if (data.errors) {
                        $('#name-group').addClass('has-error');
                        $('#name-group .help-block').html('Endereço inválido');
                    }
                } else {

                    // if validation is good add success message
                    $('#anuncio-messages').addClass('alert alert-success').append('<p>' + JSON.stringify(data) + '</p>');
                }
            }
        });

        // stop the form from submitting and refreshing
        event.preventDefault();
    });
    
    $('#add-anuncio').click(function (event) {
    var PartnerInfo_AdId = $('input[name=partner-info-ad-id]').val();
    var json_anuncio = {
            "title": "Lote com imagem",
            "description": "Lote bem situado",
            "type_id": "sell",
            "category_id": 1020,
            "image_ids": [0890241119],
            "location": {
                "region_id": 14,
                "zipcode": "1000",
                "area_id": 220
            },
            "partner_info": {
                "ad_id": PartnerInfo_AdId,
                "group_id": "gg-45"
            },
            "parameters": {
                "rooms": 2,
                "size": 25
            },
            "author": {
                "name": "Auto21",
                "email": "geral@auto21.pt",
                "phone_number": "213456789",
                "password": "nova"
            }
        };
        // remove the past errors
        $('#name-group').removeClass('has-error');
        $('#name-group .help-block').empty();

        // remove success messages
        $('#add-anuncio-messages').removeClass('alert alert-success').empty();

        // get the form data
        var formData = {
            'url'             : $('input[name=add-anuncio-url]').val(),
            'action'          : 'add-anuncio',
            'objecto_anuncio' : json_anuncio
        };
        // process the form
        $.ajax({
            type: 'POST',
            url: 'process.php',
            data: formData,
            dataType: 'json',
            success: function (data) {
                // log data to the console so we can see
                console.log(data);
                // if validation fails
                // add the error class to show a red input
                // add the error message to the help block under the input
                if (!data.success) {
                    if (data.errors) {
                        $('#name-group').addClass('has-error');
                        $('#name-group .help-block').html('Endereço inválido');
                    }
                } else {

                    // if validation is good add success message
                    $('#add-anuncio-messages').addClass('alert alert-success').append('<p>' + JSON.stringify(data) + '</p>');
                }
            }
        });

        // stop the form from submitting and refreshing
        event.preventDefault();
    });
    
    $('#eliminar-anuncio').click(function (event) {
        // remove the past errors
        $('#name-group').removeClass('has-error');
        $('#name-group .help-block').empty();

        // remove success messages
        $('#eliminar-messages').removeClass('alert alert-success').empty();

        // get the form data
        var formData = {
            'url': $('input[name=anuncio-url]').val(),
            'action': 'eliminar-anuncio'
        };
        // process the form
        $.ajax({
            type: 'POST',
            url: 'process.php',
            data: formData,
            dataType: 'json',
            success: function (data) {
                // log data to the console so we can see
                console.log(data);
                // if validation fails
                // add the error class to show a red input
                // add the error message to the help block under the input
                if (!data.success) {
                    if (data.errors) {
                        $('#name-group').addClass('has-error');
                        $('#name-group .help-block').html('Endereço inválido');
                    }
                } else {

                    // if validation is good add success message
                    $('#eliminar-messages').addClass('alert alert-success').append('<p>' + JSON.stringify(data) + '</p>');
                }
            }
        });

        // stop the form from submitting and refreshing
        event.preventDefault();
    });
    
    $('#adicionar-imagem').click(function (event) {
        // remove the past errors
        $('#name-group').removeClass('has-error');
        $('#name-group .help-block').empty();

        // remove success messages
        $('#imagem-messages').removeClass('alert alert-success').empty();

        // get the form data
        var formData = {
            'url': $('input[name=imagem-url]').val(),
            'action': 'adicionar-imagem'
        };
        // process the form
        $.ajax({
            type: 'POST',
            url: 'process.php',
            data: formData,
            dataType: 'json',
            success: function (data) {
                // log data to the console so we can see
                console.log(data);
                // if validation fails
                // add the error class to show a red input
                // add the error message to the help block under the input
                if (!data.success) {
                    if (data.errors) {
                        $('#name-group').addClass('has-error');
                        $('#name-group .help-block').html('Endereço inválido');
                    }
                } else {

                    // if validation is good add success message
                    $('#imagem-messages').addClass('alert alert-success').append('<p>' + JSON.stringify(data) + '</p>');
                }
            }
        });

        // stop the form from submitting and refreshing
        event.preventDefault();
    });

});

