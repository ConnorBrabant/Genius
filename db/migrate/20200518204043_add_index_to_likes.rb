class AddIndexToLikes < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, [:likable_id, :user_id]
  end
end
