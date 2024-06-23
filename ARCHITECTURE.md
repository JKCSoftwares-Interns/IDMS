# Architecture

**MVC** (**M**odel **V**iew **C**ontroller)

## Frontend

Based off of MUI.

### Folder

- `data/`: This is our DAL (Data Access Layer).
- `layouts/`: This contains components that usually never leave the page, like `sidebar` or `footerk.
- `utils/`: Contain resuable helper functions.

### Component

- `Page Animation`: Wrapper for page that abstracts away animation logic. 
- `TableGeneration`: Resuable component with high level of abstraction for generating table.
- `AddForm`: Reusable form layout with high level of abstraction for adding to database.
- `UpdateForm`: Reusable form layout with high level of abstraction for adding to database.
- `InputBox`: Custom input field. 
- `AlertBar`: Prompts an alert.
- `PromptButton`: Button that on press present a prompt, so it processes actions that are cautious in nature hence it by default has an herrorh color.

## Backend

**Entry Point**: `server.ts`.

### Folder

- `database/`: Contains modules for export & scripts for database initialization & migration script.
- `routes/`: Contains handling logic for each route pertaining to its own file.
- `test/`: Contains tests for APIs and fake data for testing frontend without the database records.
