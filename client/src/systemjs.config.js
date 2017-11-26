
  /**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    System.config({
        "map": {
          "ng2-ckeditor": "npm:ng2-ckeditor",
          'ng2-validation': 'npm:ng2-validation/bundles/ng2-validation.umd.js'
        },
        "packages": {
          "ng2-ckeditor": {
            "main": "lib/index.js",
            "defaultExtension": "js",
          },
        }
      });
  })(this);