class CreateJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :description
      t.string :url
      t.string :company
      t.integer :category_id
      t.integer :type_id

      t.timestamps
    end
  end
end
