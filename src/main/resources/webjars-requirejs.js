requirejs.config({
    paths: {
        "angular-file-upload": webjars.path("angular-file-upload", "angular-file-upload"),
        "angular-file-upload-shim": webjars.path("angular-file-upload", "angular-file-upload-shim"),
        "angular-file-upload.min": webjars.path("angular-file-upload", "angular-file-upload.min"),
        "angular-file-upload-shim.min": webjars.path("angular-file-upload", "angular-file-upload-shim.min"),
        "angular-file-upload-html5-shim": webjars.path("angular-file-upload", "angular-file-upload-html5-shim"),
        "angular-file-upload-html5-shim.min": webjars.path("angular-file-upload", "angular-file-upload-html5-shim.min")
    },
    shim: {
        "angular-file-upload": [ "angular" ],
        "angular-file-upload-shim": [ "angular" ],
        "angular-file-upload.min": [ "angular" ],
        "angular-file-upload-shim.min": [ "angular" ],
        "angular-file-upload-html5-shim": [ "angular" ],
        "angular-file-upload-html5-shim.min": [ "angular" ]
    }
});
