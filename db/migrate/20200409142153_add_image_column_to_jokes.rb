class AddImageColumnToJokes < ActiveRecord::Migration[5.2]
  def change
    add_column :jokes, :image, :string
  end
end
