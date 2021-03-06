Geo.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        /*
         stateful: true,
         stateId: 'geo-panel-home',
         stateEvents: ['tabchange'],
         getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
         */
        hideMode: 'offsets',
        items: [{
            html: '<h2>' + _('geo') + '</h2>',
            cls: '',
            style: {margin: '15px 0'}
        }, {
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: true,
            hideMode: 'offsets',
            items: [{
                title: _('geo_regions'),
                layout: 'anchor',
                items: [{
                    html: _('geo_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'geo-grid-regions',
                    cls: 'main-wrapper',
                }]
            },{
                title: _('geo_cities'),
                layout: 'anchor',
                items: [{
                    html: _('geo_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'geo-grid-cities',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    Geo.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(Geo.panel.Home, MODx.Panel);
Ext.reg('geo-panel-home', Geo.panel.Home);
