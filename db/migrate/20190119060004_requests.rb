class Requests < ActiveRecord::Migration[5.2]
  def up
    create_table :requests do |t|
      t.string :title 
      t.string :description 
      t.string :request_type 
      t.integer :user_id
      t.string :status, :default => 'pending'

      t.timestamps null: false
    end
    add_foreign_key :requests, :users, column: :user_id, primary_key: :id
  end
end
