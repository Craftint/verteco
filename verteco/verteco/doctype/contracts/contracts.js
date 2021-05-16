// Copyright (c) 2021, Craft Interactive and contributors
// For license information, please see license.txt

frappe.ui.form.on('Contracts', {
client:function(frm)
    {
         frappe.call(
                    {
                        method : "frappe.client.get",
                        args : {
                            doctype : "Customer",
                            name : frm.doc.client,
                        },
                        callback: function(s){
                        frm.doc.contact_person=[]   //Remove existing contact row from the table.
                        frm.get_field("contact_person").grid.only_sortable()     //Remove Add
                        //Calling python method to fetch address and contact
                        frm.call({
                            method: 'verteco.verteco.doctype.contracts.contracts.load_address_and_contact',
                            args: {"doc":s},
                            callback: function(p) {
                            //Get length of the contact_list
                            var len = p.message.contact_list.length;

                         for(var i=0; i< len; i++){
                               var pos = i+1;
                               //Add details from contact_list into the contact table
                             frm.add_child("contact_person", {
                                first_name:p.message.contact_list[i].first_name,
                                last_name:p.message.contact_list[i].last_name,
                                designation:p.message.contact_list[i].designation,
                                contact_person:p.message.contact_list[i].mobile_no,
                                email_id:p.message.contact_list[i].email_id
                             })
                           }
                           frm.refresh_field("contact_person");

			                      }
                         })
                    }
             });
}
});
