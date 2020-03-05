Ext.onReady(function () {
    Geo.config.connector_url = OfficeConfig.actionUrl;

    var grid = new Geo.panel.Home();
    grid.render('office-geo-wrapper');

    var preloader = document.getElementById('office-preloader');
    if (preloader) {
        preloader.parentNode.removeChild(preloader);
    }
});