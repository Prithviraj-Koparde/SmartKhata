📘 SmartKhata – Full Stack Ledger Management Application

SmartKhata is a full-stack web application that digitizes traditional shop khata (credit ledger) management.
It helps shop owners accurately track customer debts, due dates, and payment status while enforcing strict backend validation to ensure data integrity.
  📌 Built as a portfolio project to demonstrate real-world backend + frontend integration using Java and Angular.

🎯 Problem It Solves
1. Replaces manual khata notebooks with a structured digital system.
2. Prevents data inconsistency and invalid entries.
3. Improves record accuracy and traceability.
4. Simplifies debt tracking and status monitoring.
5. Result: ~70% reduction in manual bookkeeping effort.

🚀 Key Features
1. Create, view, update, and delete customer debt records.
2. Automatic PAID / UNPAID status calculation.
3. View detailed account information.
4. Backend-enforced business rules (no invalid deletes).
5. Strong validation to prevent tampered or incorrect data.
6. Clean, responsive UI built with Angular & Bootstrap.

🛠 Tech Stack
Backend
1. Java
2. Spring Boot
3. Spring Data JPA (Hibernate)
4. RESTful APIs
5. PostgreSQL
6. Bean Validation
7. Maven

Frontend
1. Angular (Standalone Components)
2. TypeScript
3. Angular Forms
4. Angular Router
5. HttpClient
6. Bootstrap

Tools
2. Git & GitHub
3. Postman (API testing)
4. IntelliJ IDEA(Backend)
5. VS Code(Frontend)

🧱 Architecture Overview
Backend
1. Layered architecture: Controller → Service → Repository
2. DTO-based request/response handling
3. Entity-DTO mapping
4. Centralized business logic
5. Database-level constraints

Frontend
1. Component-based Angular architecture
2. Service-driven API communication
3. Routing for navigation
4. Template-driven form validation
5. Responsive UI design

🔐 Data Integrity & Validation
1. Backend validation using Bean Validation annotations
2. DTO-level input validation
3. Business rules enforced at service layer
4. Backend acts as the final authority against invalid or tampered data

📂 Project Structure

<img width="200" height="350" alt="image" src="https://github.com/user-attachments/assets/bcdfb1a7-213d-497e-8181-9dfba0daec92" />

📸 Screenshots
/screenshots
1. account-list
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/43135fcc-bd23-4b12-8562-2b4964d49ea4" />


2. create-account
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/7e58c94d-3eaa-4226-8958-8a014f783b49" />


3. view-account
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/bec54cc1-a655-4c3c-92e4-c781eacbb804" />


4. update-amount
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/31bb3508-d1f7-4ef4-b972-d411099f17df" />

📌 API Overview
| Method | Endpoint                        | Description         |
| ------ | ------------------------------- | ------------------- |
| POST   | `/api/accounts`                 | Create account      |
| GET    | `/api/accounts/allAccounts`     | Fetch all accounts  |
| GET    | `/api/accounts/{id}`            | Fetch account by ID |
| PUT    | `/api/accounts/{id}/updateDebt` | Update debt         |
| DELETE | `/api/accounts/{id}`            | Delete account      |

🧪 Testing
1. APIs tested using Postman
2. Backend validations tested with invalid payloads
3. Frontend tested via Angular dev server

🔮 Future Enhancements
1. Spring Security (Basic Auth / JWT)
2. Multi-user support
3. Search & filtering
4. Pagination
5. Docker & cloud deployment

👨‍💻 Developer
Prithviraj Koparde
B.E. Computer Engineering – 2025
Aspiring Full Stack Java Developer

📜 Note for Recruiters
This project demonstrates:
1. Strong backend fundamentals
2. Clean architecture
3. Real-world validation logic
4. Practical frontend integration
5. Built with clarity, correctness, and scalability in mind.

