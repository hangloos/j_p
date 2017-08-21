# README

Job Project:

- Originally built using state in app.js. 
- Created a category list and function to show each category. 
- Implemented redux for showing all jobs, creating a job and deleting a job









Initial Notes:

# GET /api/jobs
# GET /api/jobs/:id
# POST /api/jobs
# PUT /api/jobs/:id
# DELETE /api/jobs/:id

# Job Model
# title:string, description:string, url:string, company:string, category_id:integer ( belongs_to category), type_id:integer ( belongs_to type)

#radio for each category and type

#Type Mode
# part-time, full-time, internship
#name:string
#see type


# Category Model
#accounting & finance, data/analytics, design, developer/engineer, hr/recruitment, legal, marketing, opeartions, product, project management, sales, writing & content
#name:string
#seed categories