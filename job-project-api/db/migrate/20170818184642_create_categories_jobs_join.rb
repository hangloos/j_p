class CreateCategoriesJobsJoin < ActiveRecord::Migration[5.1]
  def change
    create_table :categories_jobs, :id => false do |t|
      t.integer :category_id
      t.integer :job_id
    end
  end
end
