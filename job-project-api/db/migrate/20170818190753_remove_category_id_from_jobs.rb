class RemoveCategoryIdFromJobs < ActiveRecord::Migration[5.1]
  def change
    remove_column :jobs, :category_id
  end
end
