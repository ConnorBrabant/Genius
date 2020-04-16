class AddValueToLikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :value, :integer
  end
end
