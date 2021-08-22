// Copyright (c) 2021, Craft Interactive and contributors
// For license information, please see license.txt
frappe.ui.form.on('Job Order', {
	refresh(frm) {
		// your code here
	}
})

frappe.ui.form.on('Job Order Items', {

price:function(frm,cdt,cdn) {
        var d = locals[cdt][cdn]
               //frm.refresh("items")
        // console.log(d)
        d.amount = d.price * d.qty;
       frm.refresh_field("items")
	},

	qty:function(frm,cdt,cdn) {
        var d = locals[cdt][cdn]
               //frm.refresh("items")
        // console.log(d)
        d.amount = d.price * d.qty;
       frm.refresh_field("items")
	}
})




