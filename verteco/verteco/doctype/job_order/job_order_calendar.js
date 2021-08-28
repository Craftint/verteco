frappe.views.calendar["Job Order"] = {
	field_map: {
		"start": "assigned_date",
		"end": "assigned_date",
		"id": "name",
        "title":"title",
		"color":"color",
		"allDay": "allDay"
    },
	options: {
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month'
		}
    },
    get_events_method: 'verteco.verteco.doctype.job_order.job_order.get_job_order_details'
}
