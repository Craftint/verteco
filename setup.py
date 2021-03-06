# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in verteco/__init__.py
from verteco import __version__ as version

setup(
	name='verteco',
	version=version,
	description='verteco customization',
	author='Craft Interactive',
	author_email='info@craftinteractive.ae',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
