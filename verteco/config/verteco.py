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


        ]
    }]
