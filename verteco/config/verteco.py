from __future__ import unicode_literals
from frappe import _


def get_data():
    return [{
        "label":
        _("Contracts"),
        "items": [
            {
                "type": "doctype",
                "name": "Contracts",
                "doctype": "Contracts",
                "onboard": 1
            },
            {
                "type": "doctype",
                "name": "Job Order",
                "doctype": "Job Order",
                "onboard": 1
            },
        ]
    }]
