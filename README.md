# sample_django-project

Follow these steps to run it on your local machine.

---

## 1️⃣ Requirements

- [Python 3.10+](https://www.python.org/downloads/)
- [PostgreSQL](https://www.postgresql.org/download/windows/)
- [pgadmin]-> refer to the video sent in the gc
- [Git](https://git-scm.com/downloads)

---

## 2️⃣ Clone the repository

git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

3️⃣ Create and activate a virtual environment
python -m venv env
env\Scripts\activate
If activation succeeds, your prompt will look like this:
(env) C:\Users\YourName\project-folder>


4️⃣ Install Django and other dependencies
pip install -r requirements.txt

5️⃣ Configure environment variables

5.1. Copy the example file:
>> copy .env.example .env

5.2. Open .env and fill in your own settings:

SECRET_KEY=your-secret-key-here
DEBUG=True
DB_NAME=your-db-name
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_HOST=localhost
DB_PORT=5432

🔒 About the SECRET_KEY

Each teammate should generate their own secret key — do not share yours publicly.

They can create one quickly by running:
>>python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
Then paste that into their .env file under:

SECRET_KEY=generated-key-here

6️⃣ Setup PostgreSQL database

Open pgAdmin or psql terminal.

Create a new database:
>>CREATE DATABASE your_db_name;
Make sure the credentials match what’s in your .env.


7️⃣ Apply migrations
python manage.py migrate


8️⃣ Create a superuser (admin account)
python manage.py createsuperuser


9️⃣ Run the development server
python manage.py runserver

then open your browser to:

👉 http://127.0.0.1:8000/

🔟 View the admin page

Go to:

👉 http://127.0.0.1:8000/admin/

and log in using your superuser account.

✅ Done!

You should now be able to:

Register, log in, and log out.

View images and uploaded files.

Access the admin dashboard.

🧾 Notes

The .env file stores private configuration, such as database credentials and the secret key.
It is not pushed to GitHub for security reasons.

.env.example acts as a template to show what variables are needed.

PostgreSQL and pgAdmin must be installed system-wide, while Django and other dependencies are installed inside your virtual environment.
