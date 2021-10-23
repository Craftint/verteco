// Copyright (c) 2021, Craft Interactive and contributors
// For license information, please see license.txt
frappe.ui.form.on('Job Order', {
       setup: function(frm) {
              frm.set_query("contract", function() {
                     return {
                            filters: [
                                          ["client", "=", frm.doc.client]
                            ]
                     };
              });
       }
});

frappe.ui.form.on('Job Order Items', {
       price:function(frm,cdt,cdn) {
              var d = locals[cdt][cdn]
              d.amount = d.price * d.qty;
              frm.refresh_field("items")
	},
	qty:function(frm,cdt,cdn) {
              var d = locals[cdt][cdn]
              d.amount = d.price * d.qty;
              frm.refresh_field("items")
	}
});




