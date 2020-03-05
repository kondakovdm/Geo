Geo.window.CreateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'geo-item-window-create';
    }
    Ext.applyIf(config, {
        title: _('geo_item_create'),
        width: 550,
        autoHeight: true,
        url: Geo.config.connector_url,
        action: 'mgr/item/create',
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
            fieldLabel: _('geo_item_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('geo_item_description'),
            name: 'description',
            id: config.id + '-description',
            height: 150,
            anchor: '99%'
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('geo_item_active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('geo-item-window-create', Geo.window.CreateItem);


Geo.window.UpdateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'geo-item-window-update';
    }
    Ext.applyIf(config, {
        title: _('geo_item_update'),
        width: 550,
        autoHeight: true,
        url: Geo.config.connector_url,
        action: 'mgr/item/update',
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
            fieldLabel: _('geo_item_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('geo_item_description'),
            name: 'description',
            id: config.id + '-description',
            anchor: '99%',
            height: 150,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('geo_item_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('geo-item-window-update', Geo.window.UpdateItem);