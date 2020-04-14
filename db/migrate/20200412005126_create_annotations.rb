class CreateAnnotations < ActiveRecord::Migration[5.2]
  def change
    create_table :annotations do |t|
      t.text :description, null: false
      t.integer :joke_id, null: false
      t.integer :user_id, null: false
      t.integer :start_index, null: false 
      t.integer :end_index, null: false 

      t.timestamps
    end

    add_index :annotations, :joke_id
    add_index :annotations, :user_id
    
  end
end
