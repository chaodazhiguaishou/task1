$(document).ready(function () {

    ClassicEditor
        .create(document.querySelector('#id_content'), {

            licenseKey: '',



        })
        .then(editor => {
            window.editor = editor;




        })
        .catch(error => {
            console.error('Oops, something went wrong!');
            console.error('Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:');
            console.warn('Build id: dh0v9x7h1ijz-7wn4qoaaf83c');
            console.error(error);
        });
})