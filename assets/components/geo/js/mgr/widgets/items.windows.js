Geo.window.CreateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'geo-region-window-create';
    }
    Ext.applyIf(config, {
        title: _('geo_region_create'),
        width: 550,
        autoHeight: true,
        url: Geo.config.connector_url,
        action: 'mgr/region/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    Geo.window.CreateItem.superclass.constructor.call(this, config);
};
Ext.extend(Geo.window.CreateItem, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('geo_region_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('geo_region_price'),
            name: 'price',
            id: config.id + '-price',
            anchor: '99%'
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('geo-region-window-create', Geo.window.CreateItem);


Geo.window.UpdateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'geo-region-window-update';
    }
    Ext.applyIf(config, {
        title: _('geo_region_update'),
        width: 550,
        autoHeight: true,
        url: Geo.config.connector_url,
        action: 'mgr/region/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    Geo.window.UpdateItem.superclass.constructor.call(this, config);
};
Ext.extend(Geo.window.UpdateItem, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('geo_region_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('geo_region_price'),
            name: 'price',
            id: config.id + '-price',
            anchor: '99%',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('geo-region-window-update', Geo.window.UpdateItem);




Geo.window.CreateCity = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'geo-city-window-create';
    }
    Ext.applyIf(config, {
        title: _('geo_city_create'),
        width: 550,
        autoHeight: true,
        url: Geo.config.connector_url,
        action: 'mgr/city/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    Geo.window.CreateCity.superclass.constructor.call(this, config);
};
Ext.extend(Geo.window.CreateCity, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('geo_city_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('geo-city-window-create', Geo.window.CreateCity);

Geo.window.UpdateCity = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'geo-city-window-update';
    }
    Ext.applyIf(config, {
        title: _('geo_city_update'),
        width: 550,
        autoHeight: true,
        url: Geo.config.connector_url,
        action: 'mgr/city/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    Geo.window.UpdateCity.superclass.constructor.call(this, config);
};
Ext.extend(Geo.window.UpdateCity, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('geo_city_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'geo-combo-region',
            fieldLabel: _('geo_city_region'),
            name: 'region_id',
            id: config.id + '-region_id',
            anchor: '99%',
            allowBlank: false,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('geo-city-window-update', Geo.window.UpdateCity);



/*Geo.combo.regions = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        name: 'region'
        ,fieldLabel: 'Регион'
        ,hiddenName: 'region'
        ,displayField: 'region_id'
        ,valueField: 'region_id'
        ,anchor: '99%'
        ,fields: ['id','name']
        ,pageSize: 20
        // Если будете использовать не в CustomExtra, не забудьте проверить правильность
        // написание параметра connector_url - у вас он может отличатсья.
        ,url: Geo.config.connector_url
        ,editable: true
        ,allowBlank: true
        ,emptyText: 'Выберите регион'
        ,baseParams: {
            action: 'mgr/region/getlist'
            ,combo: 1
        }
        ,tpl: new Ext.XTemplate(
            '<tpl for=".">\
                <div class="x-combo-list-item">\
                    <strong>{name}</strong> <sup>({id})</sup>\
                </div>\
            </tpl>'
            ,{compiled: true}
        )
    });
    Geo.combo.regions.superclass.constructor.call(this,config);
};
Ext.extend(Geo.combo.regions,MODx.combo.ComboBox);
Ext.reg('geo-combo-regions',Geo.combo.regions);*/


Geo.combo.Region = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        name: 'region_id'
        ,hiddenName: 'region_id'
        ,displayField: 'name'
        ,valueField: 'id'
        ,fields: ['id','name']
        ,pageSize: 100
        ,url: Geo.config.connector_url
        ,baseParams: {
            action: 'mgr/region/getlist'
            ,combo: 1
            ,limit: 0
        }
        ,tpl: new Ext.XTemplate(
        '<tpl for=".">\
            <div class="x-combo-list-item">\
                <strong>{name}</strong> <sup>({id})</sup>\
            </div>\
        </tpl>'
        ,{compiled: true}
    )
    });
    Geo.combo.Region.superclass.constructor.call(this,config);
};
Ext.extend(Geo.combo.Region,MODx.combo.ComboBox);
Ext.reg('geo-combo-region',Geo.combo.Region);