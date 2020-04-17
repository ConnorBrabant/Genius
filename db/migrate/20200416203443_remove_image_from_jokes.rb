class RemoveImageFromJokes < ActiveRecord::Migration[5.2]
  def change
    remove_column :jokes, :image, :string
  end
end
