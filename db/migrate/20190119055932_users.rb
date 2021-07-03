class Users < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name  
      t.string :email 
      t.string :password
      t.boolean :admin, :default => false
      t.timestamps null: false
    end
  end
end
