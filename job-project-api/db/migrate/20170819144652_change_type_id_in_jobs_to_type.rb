class ChangeTypeIdInJobsToType < ActiveRecord::Migration[5.1]
  def change
    remove_column :jobs, :type_id
  end
end
