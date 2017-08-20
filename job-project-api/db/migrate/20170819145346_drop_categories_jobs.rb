class DropCategoriesJobs < ActiveRecord::Migration[5.1]
  def change
    drop_table :categories_jobs
  end
end
