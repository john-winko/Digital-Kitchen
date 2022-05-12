# Personal Project - Recipe and meal planner

## Live DEMO can be found at [https://digitalkitchen.johnwinko.com](https://digitalkitchen.johnwinko.com)

## Setup

### Clone repo (take note of ending dot if you don't want to make another subfolder)
~~~
git clone https://github.com/john-winko/DigitalKitchen.git .
~~~

~~~
python -m venv .venv
~~~

#### (Windows) Go into virtual environment
~~~
.venv/scripts/activate.ps1
~~~

#### (Mac/Linux) Go into virtual environment
~~~
source venv/bin/activate
~~~

~~~
pip install -r requirements.txt
~~~
Make .env file (from template)
~~~
cp .env.sample .env
~~~

### Update .env file
- Add django secret key
- Set DEBUG=True for local development
- Set REACT_APP_URL_PREFIX=http://localhost:8000 (or wherever you would run the django server)
- Add RapidAPI key
  - Must subscribe to the Tasty and MyCookbook.io API's for full functionality

~~~
python manage.py migrate
~~~


~~~
npm install
~~~

~~~
python manage.py runserver
~~~

~~~
npm run start
~~~

(Optional) if you want to serve the app from django
~~~
npm run build
~~~
