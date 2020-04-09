class CreateJokes < ActiveRecord::Migration[5.2]
  def change
    create_table :jokes do |t|
      t.string :title, null: false
      t.integer :comedian_id, null: false
      t.text :joke, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :jokes, :comedian_id
    add_index :jokes, :user_id
    add_index :jokes, [:title, :comedian_id], unique: true
  end
end
