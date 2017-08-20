class ChangeTypeToJobTypeTypeIsRestricted < ActiveRecord::Migration[5.1]
  def change
    remove_column :jobs, :type
    add_column :jobs, :job_type, :string
  end
end
