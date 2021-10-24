# -*- coding: utf-8 -*-
# Copyright (c) 2021, Craft Interactive and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import add_days

class JobOrder(Document):
	pass

@frappe.whitelist()
def get_job_order_details(start, end, filters=None):
	"""Returns events for Gantt / Calendar view rendering.
	:param start: Start date-time.
	:param end: End date-time.
	:param filters: Filters (JSON).
	"""
	orders = []
	job_color = {
	"Open": "#96C7F8",
	"Scheduled": "#D3D3D3",
	"Pending": "#ffdd9e",
	"Completed": "#cdf5a6",
	"Cancelled": "#F79B84"
	}

	from frappe.desk.reportview import get_filters_cond
	conditions = get_filters_cond("Job Order", filters, [])

	job_orders = frappe.db.sql("""
		select
			distinct `tabJob Order`.name, `tabJob Order`.executive, `tabJob Order`.assigned_date, `tabJob Order`.end_date, `tabJob Order`.client, `tabJob Order`.status
		from
			`tabJob Order`
		where
			(`tabJob Order`.assigned_date between %(start)s and %(end)s)
			{conditions}
		""".format(conditions=conditions), {
			"start": start,
			"end": end
		}, as_dict=True, update={"allDay": 0})

	for d in job_orders:
		title_data = []
		title_data.append(d.get("name"))	
		for field in ["client", "status"]:
			if not d.get(field): continue
			title_data.append(d.get(field))
		if d.get("status") in ["Scheduled","Completed"]:
			title_data.append(d.get("executive"))

		color = job_color.get(d.status)

		job_order_data = {
			'end_date':d.end_date,
			'assigned_date': d.assigned_date,
			'name': d.name,
			'title':'\n'.join(title_data),
			'color': color if color else "#89bcde"
		}
		orders.append(job_order_data)
	return orders