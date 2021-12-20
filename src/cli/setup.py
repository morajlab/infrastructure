
from setuptools import setup, find_packages
from mji.core.version import get_version

VERSION = get_version()

f = open('README.md', 'r')
LONG_DESCRIPTION = f.read()
f.close()

setup(
    name='mji',
    version=VERSION,
    description='CLI app for Moraj Lab infrastructure management',
    long_description=LONG_DESCRIPTION,
    long_description_content_type='text/markdown',
    author='Morteza Jamali',
    author_email='mortezajamali4241@gmail.com',
    url='https://github.com/morajlab/infrastructure',
    license='MIT',
    packages=find_packages(exclude=['ez_setup', 'tests*']),
    package_data={'mji': ['templates/*']},
    include_package_data=True,
    entry_points="""
        [console_scripts]
        mji = mji.main:main
    """,
)
