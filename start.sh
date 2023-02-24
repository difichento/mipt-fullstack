#!/bin/sh

python back/project/manage.py runserver 0.0.0.0:8000 & npm --prefix ./front/app start & fg
