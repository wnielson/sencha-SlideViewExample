Ext.define('SVE.view.Main', {
    extend: 'Ext.ux.slide.View',
    xtype: 'main',

    views: [
        'Navigation',
    ],

    config: {
        slideDuration: 500,

        shadowStyle: '0 0 2px 1px rgba(30,36,47,0.3)',

        container: {
            items: [{
                xclass: 'SVE.view.Navigation',
            },{
                xclass: 'SVE.view.Navigation',
            },{
                xclass: 'SVE.view.Navigation',
            }]
        },

        leftContainer: {
            xtype: 'list',
            width: 250,
            cls: 'fb x-slideview-container-left',
            data: [{
                name: 'Navigation View 1'
            },{
                name: 'Navigation View 2'
            },{
                name: 'Navigation View 3'
            }],
            itemTpl: '{name}',
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'fb-dark',
                items: [{
                    xtype: 'searchfield',
                    width: 225
                }]
            }],
            listeners: {
                itemtap: function(list, index) {
                    var slideview   = list.getParent(),
                        container   = slideview.getContainer();

                    container.setActiveItem(index);
                    Ext.defer(slideview.closeContainer, 200, slideview);
                },
                initialize: function(list) {
                    list.select(0);
                }
            }
        },

        rightContainer: {
            xtype: 'list',
            width: 250,
            cls: 'fb x-slideview-container-right',
            data: [{
                name: 'Friend 1'
            },{
                name: 'Friend 2'
            },{
                name: 'Friend 3'
            }],
            itemTpl: '{name}',
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'fb-dark',
                items: [{
                    xtype: 'searchfield',
                    width: 175
                },{
                    xtype: 'button',
                    iconMask: true,
                    iconCls: 'settings'
                }]
            }],

        }
    }
});
