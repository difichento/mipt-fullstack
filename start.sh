#!/bin/sh

python3 back/project/manage.py runserver 0.0.0.0:8000 & npm --prefix ./front/app start & fg
