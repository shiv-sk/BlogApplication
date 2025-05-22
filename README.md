# BlogApplication
### About
The Blog Application is a full-featured web app that allows users to create, read, update, and delete (CRUD) blog posts. In addition to writing and managing their own blogs, users can interact with others by liking and commenting on posts. Only the owner of a blog has the authority to delete it, ensuring content ownership and control.
### Features
#### Admin Features
- **User Authentication** – Register and log in to manage your own blogs.
- **Create Blog Posts** – Add rich content with titles and descriptions.
- **Like Posts** – Like your favorite blog posts.
- **Comment on Posts** – Share your thoughts by commenting on blogs.
- **Authorization** – Only the blog owner can perform sensitive actions (like delete or edit).

### Tech Stack
- Frontend: React.js, Tailwind CSS , DaisyUi
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)
- Others: Quill-TextEditor , React-Toastify

### Installation & Setup
- git clone ```repo-url```

### Install Dependencies
- Frontend
```
cd client 
npm install
``` 
- Backend
```
cd server 
npm install
```
### Setup Environment Variables
Create a `.env` file in the `server` directory using the structure in `env.example` and provide your own values.

### Run the Application
- Frontend
```
cd client 
npm run dev
``` 
- Backend
```
cd server 
npm run dev
```
### API Endpoints
For sample API endpoints, refer to the routes folder located in the server directory. It includes:
- User Authentication routes
- Blog CRUD routes
- Like and Comment routes

### Notes
- Make sure MongoDB is running locally or configured via cloud (e.g., MongoDB Atlas).
- The app uses Quill.js for rich text editing.
- Toast notifications are implemented with React-Toastify.

### Contributing
Contributions are welcome! Please fork the repository and create Issue with full description.

### Screenshots
![bog5](https://github.com/user-attachments/assets/1b4c50b5-63f4-4b62-9841-bd5c15aff35c)
![blog7](https://github.com/user-attachments/assets/a47c66d9-4b7d-4e42-bad4-245b1dfe8151)
![blog6](https://github.com/user-attachments/assets/9f01aa50-848f-409e-a16f-0a86589b4b85)
![blog4](https://github.com/user-attachments/assets/31e3c15f-5bce-48e4-a30d-cf1d2533a4f3)
![blog3](https://github.com/user-attachments/assets/7d79da19-57dd-450f-b916-052b1dd49f2a)
![blog2](https://github.com/user-attachments/assets/f635f248-2fc9-460a-a22d-2d3cfd99436c)
![blog1](https://github.com/user-attachments/assets/fe0c1f8a-fc68-4a8e-b85e-6bc64c0215a9)

### Contact
- Gmail: shivanandcrew034@gmail.com
