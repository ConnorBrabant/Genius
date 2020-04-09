class CreateComedians < ActiveRecord::Migration[5.2]
  def change
    create_table :comedians do |t|
      t.string :name, null: false 
      t.text :description,  null: false
      t.timestamps
    end
  end
end
